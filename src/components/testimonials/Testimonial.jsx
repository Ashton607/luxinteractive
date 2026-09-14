"use client";

import { useState } from "react";
import styles from "./Testimonial.module.css";

const TESTIMONIALS = [
  {
    name: "Sarah Whitfield",
    role: "Founder, Mint Clean Co.",
    quote:
      "Been worth every penny so far. On track to grow $6,500 in revenue this month. I know you guys have been a big part of that.",
  },
  {
    name: "Payton Rourke",
    role: "Owner, Skyscape Canopies",
    quote:
      "Very knowledgeable about the SEO process. They have helped give us a better presence online and are organized and execute as promised.",
  },
  {
    name: "Daniel Osei",
    role: "Director, Harborline Consulting",
    quote:
      "The whole process was smooth from the first call to launch. Our site finally feels like it matches the quality of our work.",
  },
  {
    name: "Priya Nandan",
    role: "Founder, Nandan Studio",
    quote:
      "Communication was excellent throughout and the final site loads fast, looks clean, and actually converts visitors into leads.",
  },
  {
    name: "Marcus Ile",
    role: "CEO, Ile & Partners",
    quote:
      "We'd tried two other freelancers before this. Night and day difference in both the process and the end result.",
  },
  {
    name: "Grace Ferreira",
    role: "Founder, Ferreira Interiors",
    quote:
      "Exactly what our brand needed. Thoughtful design, clear timelines, and a site we're genuinely proud to send clients to.",
  },
];

const INITIAL_COUNT = 3;

export default function Testimonial() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? TESTIMONIALS : TESTIMONIALS.slice(0, INITIAL_COUNT);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialEyebrow}>Client Reviews</div>

        <h2 className={styles.testimonialHeading}>What our clients are saying</h2>
      </div>

      <div className={styles.grid}>
        {visible.map((t) => (
          <div key={t.name} className={styles.card}>
            <div className={styles.stars} aria-hidden="true">
              ★★★★★
            </div>

            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>

            <div className={styles.person}>
              <div className={styles.avatar}>{t.name.charAt(0)}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {TESTIMONIALS.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className={styles.expandButton}
        >
          {expanded ? "Show less" : "Show more reviews"}
          <span className={`${styles.chevron} ${expanded ? styles.chevronOpen : ""}`}>
            ▾
          </span>
        </button>
      )}
    </section>
  );
}