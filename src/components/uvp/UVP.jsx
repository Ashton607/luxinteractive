import styles from './UVP.module.css'

const DISADVANTAGES = [
  "Slow turnarounds, weeks of waiting for updates",
  "Vague pricing with scope creep along the way",
  "Cookie-cutter templates that look like everyone else's",
  "Communication goes quiet after the site launches",
];

const ADVANTAGES = [
  "Fast, transparent timelines from kickoff to launch",
  "Flat, upfront pricing, no surprise invoices",
  "Custom built design around your brand, not a template",
  "Ongoing support and communication after launch",
];

export default function UVP() {
  return (
    <section id="uvp" className={styles.uvp}>
      <h2 className={styles.heading}>
        Your Goals, <span className={styles.highlight}>Our Mission: </span>
        <img
          src="/Luxinteractive_logo.svg"
          alt="Luxinteractive"
          className={styles.uvpImg}
        />{" "}
        <br />
        Stands Out In Website Design
      </h2>

      <p className={styles.subtext}>
        Complex technical challenges simplified with custom solutions, clear
        communication, and dependable system support.
      </p>

      <div className={styles.compareGrid}>
        <div className={`${styles.card} ${styles.cardBad}`}>
          <h3 className={styles.cardTitle}>Other Agencies / Web Developers</h3>
          <ul className={styles.list}>
            {DISADVANTAGES.map((item) => (
              <li key={item} className={styles.listItem}>
                <svg
                  className={styles.iconBad}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.card} ${styles.cardGood}`}>
          <h3 className={styles.cardTitle}>Luxinteractive</h3>
          <ul className={styles.list}>
            {ADVANTAGES.map((item) => (
              <li key={item} className={styles.listItem}>
                <svg
                  className={styles.iconGood}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}