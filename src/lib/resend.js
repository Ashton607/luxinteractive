import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
          Looking forward to speaking with you.<br />luxinteractive
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
            <p><strong>Name: ${name}</strong> 
            <br/>
            <strong>Email: ${email}</strong> booked a call.</p>
            <p>${when}</p>
            ${notes ? `<p>Message: ${notes}</p>` : ""}
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