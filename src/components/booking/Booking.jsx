"use client";

import { useState, useEffect, useMemo } from "react";
import styles from "./Booking.module.css";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function toISODate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// hardcoded calendar grid: builds the weeks for a given month, no external date library
function buildMonthGrid(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const startWeekday = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];

  // leading padding from previous month
  for (let i = 0; i < startWeekday; i++) {
    const date = new Date(year, month, i - startWeekday + 1);
    cells.push({ date, inMonth: false });
  }

  // actual days of this month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), inMonth: true });
  }

  // trailing padding so the grid always fills full weeks
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date;
    const next = new Date(last);
    next.setDate(last.getDate() + 1);
    cells.push({ date: next, inMonth: false });
  }

  return cells;
}

export default function Booking() {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(today);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", notes: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const grid = useMemo(
    () => buildMonthGrid(viewDate.getFullYear(), viewDate.getMonth()),
    [viewDate]
  );

  const isCurrentMonthView =
    viewDate.getFullYear() === today.getFullYear() &&
    viewDate.getMonth() === today.getMonth();

  useEffect(() => {
    setSelectedSlot(null);
    setLoadingSlots(true);
    fetch(`/api/availability?date=${toISODate(selectedDate)}`)
      .then((res) => res.json())
      .then((data) => setSlots(data.slots || []))
      .catch(() => setSlots([]))
      .finally(() => setLoadingSlots(false));
  }, [selectedDate]);

  function isDisabled(date, inMonth) {
    if (!inMonth) return true;
    if (date < today) return true;
    const day = date.getDay();
    if (day === 0 || day === 6) return true; // weekends
    return false;
  }

  function changeMonth(delta) {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedSlot) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ start: selectedSlot.start, ...form }),
      });
      if (!res.ok) throw new Error("Booking failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="booking" className={styles.booking}>
        <div className={styles.confirmation}>
          <div className={styles.confirmIcon}>✓</div>
          <h2 className={styles.heading}>You&rsquo;re booked</h2>
          <p className={styles.subtext}>
            A confirmation has been sent to {form.email}. Talk soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className={styles.booking}>
      <h2 className={styles.heading}>Book a call</h2>
      <p className={styles.subtext}>
        Pick a date and time that works for you. No back and forth emails needed.
      </p>

      <form onSubmit={handleSubmit} className={styles.layout}>
        {/* Section 1: calendar */}
        <div className={styles.panel}>
          <div className={styles.calendarHeader}>
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              disabled={isCurrentMonthView}
              className={styles.monthNav}
              aria-label="Previous month"
            >
              ‹
            </button>
            <span className={styles.monthLabel}>
              {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>
            <button
              type="button"
              onClick={() => changeMonth(1)}
              className={styles.monthNav}
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          <div className={styles.weekdayRow}>
            {WEEKDAYS.map((w) => (
              <span key={w} className={styles.weekdayLabel}>
                {w}
              </span>
            ))}
          </div>

          <div className={styles.dayGrid}>
            {grid.map(({ date, inMonth }, i) => {
              const disabled = isDisabled(date, inMonth);
              const selected = isSameDay(date, selectedDate);
              const isToday = isSameDay(date, today);
              return (
                <button
                  type="button"
                  key={i}
                  disabled={disabled}
                  onClick={() => setSelectedDate(date)}
                  className={`${styles.day} ${!inMonth ? styles.dayOutside : ""} ${
                    disabled ? styles.dayDisabled : ""
                  } ${selected ? styles.daySelected : ""} ${
                    isToday ? styles.dayToday : ""
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: time slots for the selected date */}
        <div className={styles.panel}>
          <span className={styles.panelTitle}>
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </span>

          {loadingSlots && <p className={styles.helperText}>Loading available times…</p>}
          {!loadingSlots && slots.length === 0 && (
            <p className={styles.helperText}>No availability on this date — try another day.</p>
          )}

          <div className={styles.slotGrid}>
            {slots.map((slot) => (
              <button
                type="button"
                key={slot.start}
                onClick={() => setSelectedSlot(slot)}
                className={`${styles.slot} ${
                  selectedSlot?.start === slot.start ? styles.slotSelected : ""
                }`}
              >
                {slot.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section 3: details form */}
        <div className={styles.panel}>
          <span className={styles.panelTitle}>Your details</span>

          <label className={styles.label}>
            Name
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            What&rsquo;s this about? (optional)
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className={styles.textarea}
              rows={3}
            />
          </label>

          <button
            type="submit"
            disabled={!selectedSlot || status === "submitting"}
            className={styles.submitButton}
          >
            {status === "submitting" ? "Booking…" : "Confirm booking"}
          </button>

          {status === "error" && (
            <p className={styles.errorText}>Something went wrong — please try again.</p>
          )}
        </div>
        {/* Section 4: call info — informational only, no interactivity */}
        <div className={styles.panel}>
          <span className={styles.panelTitle}>About the call</span>

          <div className={styles.pillList}>
            <span className={styles.pill}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="6" width="14" height="12" rx="2" />
                <path d="M16 10l6-4v12l-6-4" />
              </svg>
              Google Meet
            </span>

            <span className={styles.pill}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="6" width="14" height="12" rx="2" />
                <path d="M16 10l6-4v12l-6-4" />
              </svg>
              Zoom
            </span>

            <span className={styles.pill}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
              10–15 min
            </span>
          </div>

          <p className={styles.helperText}>
            A link for your preferred platform is included in the confirmation email.
          </p>
        </div>
      </form>
    </section>
  );
}