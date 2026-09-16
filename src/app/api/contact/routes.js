import { sendContactEmail } from "@/lib/resend";

// POST /api/contact
export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, website, message, enquiryType } = body;

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendContactEmail({ name, email, phone, website, message, enquiryType });
    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return Response.json({ error: "Could not send message" }, { status: 500 });
  }
}