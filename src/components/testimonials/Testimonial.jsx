"use client";

import { useState } from "react";
import styles from "./Testimonial.module.css";
import { IoIosArrowDown } from "react-icons/io";

const TESTIMONIALS = [
  {
    name: "Sarah Whitfield",
    role: "Founder, Mint Clean Co.",
    quote:
      "Our booking calendar filled up within weeks of launching the new site. The local SEO and automated scheduling saved us hours on the phone while steadily increasing our monthly bookings.",
  },
  {
    name: "Payton Rourke",
    role: "Owner, Skyscape Canopies",
    quote:
      "We went from invisible on Google to ranking near the top in our area. The online quote and appointment system is seamless, and we've seen a massive surge in qualified local leads.",
  },
  {
    name: "Daniel Osei",
    role: "Director, Harborline Consulting",
    quote:
      "The site redesign modernized our brand and made client onboarding effortless. New clients can now schedule consultation calls directly on our calendar without any back-and-forth.",
  },
  {
    name: "Priya Nandan",
    role: "Founder, Nandan Studio",
    quote:
      "The new site loads fast, looks incredibly sharp, and consistently turns casual Google searchers into confirmed appointments. Communication was top-tier from start to finish.",
  },
  {
    name: "Marcus Ile",
    role: "CEO, Ile & Partners",
    quote:
      "Night and day difference from freelancers we've used before. They actually understood local search optimization and built a reliable booking engine that keeps our schedule full.",
  },
  {
    name: "Grace Ferreira",
    role: "Founder, Ferreira Interiors",
    quote:
      "A stunning website that showcases our portfolio and makes booking design consultations simple for local clients. It has completely transformed our online presence.",
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