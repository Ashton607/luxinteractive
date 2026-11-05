"use client";

import { useState } from "react";
import styles from "./Testimonial.module.css";
import { IoIosArrowDown } from "react-icons/io";

const TESTIMONIALS = [
  {
    name: "Deon Ellison",
    role: "Founder, Deon Ellison Foundation",
    quote:
      ".",
  },
  {
    name: "Penny De Villiers",
    role: "Owner, BeeWell Infant Spa",
    quote:
      ".",
  },
  {
    name: "Daniel Osei",
    role: "Owner, Daniel Osei Photography",
    quote:
      ".",
  },
 
];

const INITIAL_COUNT = 3;

export default function Testimonial() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? TESTIMONIALS : TESTIMONIALS.slice(0, INITIAL_COUNT);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.testimonialContent}>
        <h2 className={styles.testimonialHeading}>Real Reviews, Real Calendar <span className={styles.highlight}>Bookings</span></h2>
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
            <IoIosArrowDown style={{verticalAlign:'middle'}} />
          </span>
        </button>
      )}
    </section>
  );
}