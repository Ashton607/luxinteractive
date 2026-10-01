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
  // SAST is a fixed UTC+2 year-round — South Africa does not observe DST,
  // so a hardcoded offset is safe (unlike most other timezones).
  utcOffsetHours: Number(process.env.BOOKING_UTC_OFFSET_HOURS || 2),
  startHour: Number(process.env.BOOKING_START_HOUR || 9),
  endHour: Number(process.env.BOOKING_END_HOUR || 17),
  slotMinutes: Number(process.env.BOOKING_SLOT_MINUTES || 60),
};

/**
 * Converts a wall-clock date + hour in the business's local timezone (SAST)
 * into the correct absolute UTC Date — regardless of what timezone the
 * server this code runs on is set to.
 *
 * dateStr: "YYYY-MM-DD", hour/minute: local SAST wall-clock time
 */
export function localDateTimeToUTC(dateStr, hour, minute = 0) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(
    Date.UTC(year, month - 1, day, hour - BOOKING_CONFIG.utcOffsetHours, minute)
  );
}

/** Day of week (0=Sun..6=Sat) for a "YYYY-MM-DD" string, independent of server timezone. */
export function localDateWeekday(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}