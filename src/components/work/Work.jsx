"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Work.module.css";

const PROJECTS = [
  {
    name: "Deon Ellison Foundation",
    image: "/work/npo.png",
    quote:
      "Our mission finally has the online presence it deserves. The site makes it effortless for sponsors to contribute and for local families to access our programs.",
    stat: "+140% Increase in Donor Support",
  },
  {
    name: "Hair Salon",
    image: "/work/salon.png",
    quote:
      "Our booking schedule filled up faster than ever after the site redesign. Clients love booking online, and it saves us hours on the phone every single week.",
    stat: "85% Bookings Handled Online",
  },
  {
    name: "Barbershop",
    image: "/work/barbershop.png",
    quote:
      "Our booking schedule filled up faster than ever after the site redesign. Clients love booking online, and it saves us hours on the phone every single week.",
    stat: "85% Bookings Handled Online",
  },
];

export default function Work() {
  const [visible, setVisible] = useState(() => new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisible((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className={styles.section}>
      <h2 className={styles.heading}>
        Some Of My <span className={styles.highlight}>Recent Websites</span>
      </h2>

      <p className={styles.subtext}>
        Helping local businesses in Douglas Northern Cape rank higher on Google by building brand new 
        websites or rebuilding old websites engineered to convert search traffic into booked appointments.      
      </p>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.name}
            ref={(el) => (cardRefs.current[i] = el)}
            data-index={i}
            style={{ transitionDelay: `${i * 0.12}s` }}
            className={`${styles.card} ${visible.has(i) ? styles.cardVisible : ""}`}
          >
            <div className={styles.laptop}>
              <div className={styles.screenWrap}>
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.screenImg}
                />
              </div>
              <div className={styles.base} />
            </div>

            <h3 className={styles.name}>{project.name}</h3>

            <div className={styles.stars} aria-hidden="true">
              ★★★★★
            </div>

            <p className={styles.quote}>&ldquo;{project.quote}&rdquo;</p>

            <span className={styles.stat}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              {project.stat}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}