"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from  '../../../public/Luxinteractive_logo.svg'

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.nav}>


          <ul className={styles.links}>
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className={styles.cta}>
            Book Appointment
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={styles.toggle}
          >
            <span className={`${styles.bar} ${open ? styles.barTopOpen : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barMidOpen : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barBottomOpen : ""}`} />
          </button>
        </nav>

        {open && (
          <div className={styles.mobileMenu}>
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={styles.mobileLink}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={styles.mobileCta}
            >
              Start a project
            </a>
          </div>
        )}
      </header>

      {/* spacer so page content isn't hidden under the fixed navbar */}
      <div className={styles.spacer} />
    </>
  );
}