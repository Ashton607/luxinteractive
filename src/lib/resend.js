import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const resendcontact = new Resend(process.env.RESEND_API_KEY_CLIENT);

function formatDateTime(isoString, timezone) {
  return new Date(isoString).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: timezone,
  });
}

export async function sendBookingEmails({ start, name, email, notes, timezone }) {
  const when = formatDateTime(start, timezone);

  // confirmation to the client
  const clientEmail = resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: email,
    subject: "Your call with luxinteractive is confirmed",
    html: `
      <div style="font-family: sans-serif; color: #0f172a; max-width: 480px;">
        <h2 style="margin-bottom: 4px;">You're booked, ${name.split(" ")[0]}</h2>
        <p style="color: #5b6b68;">Here are the details:</p>
        <p style="font-size: 15px;"><strong>${when}</strong></p>
        ${notes ? `<p style="color: #5b6b68;">Notes: ${notes}</p>` : ""}
        <p style="color: #5b6b68; margin-top: 24px;">
          Looking forward to speaking with you.<br />
          <br/>
          Kind Regards,<br/>
          <br/>
          Luxinteractive
        </p>
      </div>
    `,
  });

  // internal notification, so the booking doesn't rely on you checking Calendar
  const ownerEmail = process.env.RESEND_OWNER_EMAIL
    ? resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.RESEND_OWNER_EMAIL,
        subject: `New booking: ${name}`,
        html: `
          <div style="font-family: sans-serif; color: #0f172a;">
            <p><strong>${name} booked a call.</strong> <br/>
            <br/>
            <strong>Email: ${email}</strong> </p>
            <p>${when}</p>
            ${notes ? `<p>Notes: ${notes}</p>` : ""}
          </div>
        `,
      })
    : Promise.resolve();

  // don't let a failed email take down the booking — the calendar event is the source of truth
  const results = await Promise.allSettled([clientEmail, ownerEmail]);
  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`Resend email ${i === 0 ? "(client)" : "(owner)"} failed:`, r.reason);
    }
  });
}

//Contact

export async function sendContactEmail({ name, email, phone, website, message, enquiryType }) {
  // notification to you
  const ownerEmail = process.env.RESEND_OWNER_EMAIL
    ? resendcontact.emails.send({
        from: process.env.RESEND_FROM_EMAIL_TO_CLIENT,
        to: process.env.RESEND_OWNER_EMAIL,
        replyTo: email,
        subject: `New enquiry: ${name} (${enquiryType})`,
        html: `
          <div style="font-family: sans-serif; color: #0f172a; max-width: 480px;">
            <p><strong>${name}</strong> (${email}) sent an enquiry.</p>
            <p><strong>Type:</strong> ${enquiryType}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
            <p style="margin-top: 16px;">${message.replace(/\n/g, "<br />")}</p>
          </div>
        `,
      })
    : Promise.resolve();

  // confirmation to the visitor
  const visitorEmail = resendcontact.emails.send({
    from: process.env.RESEND_FROM_EMAIL_TO_CLIENT,
    to: email,
    subject: "We got your message — luxinteractive",
    html: `
      <div style="font-family: sans-serif; color: #0f172a; max-width: 480px;">
        <h2 style="margin-bottom: 4px;">Thanks, ${name.split(" ")[0]}</h2>
        <p style="color: #5b6b68;">
          Your message has been received and we'll get back to you shortly.
        </p>
        <p style="color: #5b6b68; margin-top: 24px;">Kind Regards,</p>
        <p style="color: #5b6b68; margin-top: 24px;">Luxinteractive</p>
      </div>
    `,
  });

  const results2 = await Promise.allSettled([ownerEmail, visitorEmail]);
  results2.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`Resend contact email ${i === 0 ? "(owner)" : "(visitor)"} failed:`, r.reason);
    }
  });
}