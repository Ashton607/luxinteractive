"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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

  // close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* mobile only: tap outside the menu to close it */}
      {open && (
        <div
          className={styles.backdrop}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

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

          <a href="/#booking" className={styles.cta}>
            Book Call <FaCalendarAlt size={15} style={{marginBottom:'-1.5px'}} />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className={styles.bars} aria-hidden="true">
              <span className={`${styles.bar} ${open ? styles.barTopOpen : ""}`} />
              <span className={`${styles.bar} ${open ? styles.barMidOpen : ""}`} />
              <span className={`${styles.bar} ${open ? styles.barBottomOpen : ""}`} />
            </span>
            <span className={styles.toggleLabel}>{open ? "Close" : "Menu"}</span>
          </button>
        </nav>

        {open && (
          <div id="mobile-menu" className={styles.mobileMenu}>
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={styles.mobileLink}
              >
                {link.label}
                <IoIosArrowForward className={styles.mobileArrow} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </header>

      {/* spacer so page content isn't hidden under the fixed navbar */}
      <div className={styles.spacer} />
    </>
  );
}