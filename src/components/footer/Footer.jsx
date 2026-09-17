import styles from "./Footer.module.css";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/ashton.b_jordan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ashton-portman-0815b1399/" },
  { label: "GitHub", href: "https://github.com/Ashton607" },
  { label: "WhatsApp", href: "https://wa.me/27788825777" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandBlock}>
          <a href="/" className={styles.logo}>
            <img src="/Luxinteractive_logo.svg" alt="Luxinteractive logo" className={styles.logo} />
          </a>
          <p className={styles.tagline}>
            Web Design Agent &amp; development for founders and small
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
            <li className={styles.plainText}>portmanashton4@gmail.com</li>
            <li className={styles.plainText}>+27 78 882 5777</li>
            <li className={styles.plainText}>Douglas Northern Cape, <br /> South Africa</li>
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