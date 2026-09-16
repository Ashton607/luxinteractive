import { getCalendarClient, BOOKING_CONFIG } from "@/lib/google-calendar";
import { sendBookingEmails } from "@/lib/resend";

// POST /api/bookings
export async function POST(request) {
  const body = await request.json();
  const { start, name, email, notes } = body;

  if (!start || !name || !email) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { calendarId, timezone, slotMinutes } = BOOKING_CONFIG;

  const startTime = new Date(start);
  const endTime = new Date(startTime.getTime() + slotMinutes * 60000);

  try {
    const calendar = getCalendarClient();

    const event = await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: `Consultation with ${name}`,
        description: `${notes || "Booked via luxinteractive website"}\n\nClient: ${name} (${email})`,
        start: { dateTime: startTime.toISOString(), timeZone: timezone },
        end: { dateTime: endTime.toISOString(), timeZone: timezone },
      },
    });

    // the calendar event is the source of truth — a failed email shouldn't fail the booking
    try {
      await sendBookingEmails({ start, name, email, notes, timezone });
    } catch (emailErr) {
      console.error("Confirmation email failed:", emailErr);
    }

    return Response.json({ success: true, eventId: event.data.id });
  } catch (err) {
    console.error("Booking creation failed:", err);
    return Response.json({ error: "Could not create booking" }, { status: 500 });
  }
}