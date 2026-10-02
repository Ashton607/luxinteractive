import { getCalendarClient, BOOKING_CONFIG, zonedTimeToUtc } from "@/lib/google-calendar";

// GET /api/availability?date=2026-09-20
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json({ error: "Missing or invalid date parameter" }, { status: 400 });
  }

  const { calendarId, timezone, startHour, endHour, slotMinutes } = BOOKING_CONFIG;

  try {
    // Day of the week for the calendar date itself, independent of server time zone
    const day = new Date(`${date}T00:00:00Z`).getUTCDay();

    // Closed weekends — adjust to taste
    if (day === 0 || day === 6) {
      return Response.json({ slots: [] });
    }

    // Full business-timezone day window, expressed as correct UTC instants
    const dayStart = zonedTimeToUtc(date, 0, timezone);
    const dayEnd = zonedTimeToUtc(date, 24 * 60, timezone);

    const calendar = getCalendarClient();

    const freeBusy = await calendar.freebusy.query({
      requestBody: {
        timeMin: dayStart.toISOString(),
        timeMax: dayEnd.toISOString(),
        timeZone: timezone,
        items: [{ id: calendarId }],
      },
    });

    const busy = freeBusy.data.calendars[calendarId]?.busy || [];

    // Every possible slot for the business day, in the business's time zone
    const allSlots = [];
    for (
      let mins = startHour * 60;
      mins + slotMinutes <= endHour * 60;
      mins += slotMinutes
    ) {
      const start = zonedTimeToUtc(date, mins, timezone);
      const end = new Date(start.getTime() + slotMinutes * 60000);
      allSlots.push({ start, end });
    }

    // Drop slots in the past, and any that overlap an existing booking
    const now = new Date();
    const availableSlots = allSlots.filter(({ start, end }) => {
      if (start < now) return false;
      const overlapsBusy = busy.some((b) => {
        const busyStart = new Date(b.start);
        const busyEnd = new Date(b.end);
        return start < busyEnd && end > busyStart;
      });
      return !overlapsBusy;
    });

    return Response.json({
      slots: availableSlots.map(({ start }) => ({
        start: start.toISOString(),
        // Formatted in the business's time zone, so it matches the calendar
        // and confirmation email regardless of where the server runs
        label: start.toLocaleTimeString("en-US", {
          timeZone: timezone,
          hour: "numeric",
          minute: "2-digit",
        }),
      })),
    });
  } catch (err) {
    console.error("Availability fetch failed:", err);
    // TEMPORARY: exposes the real error in the Network tab for debugging.
    // Remove the `detail` line once you're happy everything works.
    return Response.json(
      { error: "Could not load availability", detail: String(err?.message || err) },
      { status: 500 }
    );
  }
}