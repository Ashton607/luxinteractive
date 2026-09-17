import styles from "./Footer.module.css";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "X (Twitter)", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandBlock}>
          <a href="/" className={styles.logo}>
            luxinteractive
          </a>
          <p className={styles.tagline}>
            Freelance web design &amp; development for founders and small
            teams who care about how their business looks online.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Explore</h3>
          <ul className={styles.linkList}>
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <ul className={styles.linkList}>
            <li className={styles.plainText}>hello@luxinteractive.co</li>
            <li className={styles.plainText}>+27 00 000 0000</li>
            <li className={styles.plainText}>Johannesburg, South Africa</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Social</h3>
          <ul className={styles.linkList}>
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href} className={styles.link}>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>&copy; {new Date().getFullYear()} luxinteractive. All rights reserved.</span>
      </div>
    </footer>
  );
}