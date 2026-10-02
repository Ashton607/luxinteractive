import { google } from "googleapis";

export function getCalendarClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  return google.calendar({ version: "v3", auth });
}

export const BOOKING_CONFIG = {
  calendarId: process.env.GOOGLE_CALENDAR_ID,
  timezone: process.env.BOOKING_TIMEZONE || "Africa/Johannesburg",
  startHour: Number(process.env.BOOKING_START_HOUR || 9),
  endHour: Number(process.env.BOOKING_END_HOUR || 17),
  slotMinutes: Number(process.env.BOOKING_SLOT_MINUTES || 60),
};

// Milliseconds the given time zone is ahead of UTC at a given instant
function getOffsetMs(timestamp, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(timestamp));

  const p = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  return asUtc - timestamp;
}

/**
 * Turns a wall-clock time in the business's time zone (e.g. "09:00" on a
 * given date, in Africa/Johannesburg) into the correct absolute UTC instant.
 * The server may run in UTC or any other zone, so we can't rely on its
 * local clock for this — this works correctly regardless, and automatically
 * accounts for DST if the configured time zone ever observes it.
 */
export function zonedTimeToUtc(dateStr, minutesIntoDay, timeZone) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const utcGuess = Date.UTC(y, m - 1, d, 0, minutesIntoDay);
  return new Date(utcGuess - getOffsetMs(utcGuess, timeZone));
}