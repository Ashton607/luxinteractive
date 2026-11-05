import styles from "./Hero.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";


const SCORES = [
  { label: "Performance", value: 74 },
  { label: "Accessibility", value: 96 },
  { label: "Best Practices", value: 100 },
  { label: "SEO", value: 100 },
];

const SITE = {
  name: "luxinteractive",
  url: "https://luxinteractive.co.za",
  title: "Luxinteractive | Website Design & Development in Northern Cape",
  description:
    "What I can help you with. I build affordable websites in Douglas Northern Cape. I handle your website and SEO so you can focus entirely on serving your clients",
  rating: null,
  reviews: 0,
};
// -------------------------------------------------------------------------

const RADIUS = 26;
const CIRC = 2 * Math.PI * RADIUS;

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <img
              src="/Luxinteractive_logo.svg"
              alt="Luxinteractive Logo"
              className={styles.eyebrowImg}
            />
          </div>

          <h1 className={styles.headline}>
            Raising the Standard for Websites in Northen Cape
          </h1>

          <p className={styles.subtext}>
            I design and build websites for local business owners in Northern Cape
            who care about how their business looks and performs online and help
            improve their Google ratings.
          </p>

          <div className={styles.actions}>
            <a href="#services" className={styles.primaryCta}>
              Start a project <MdRocketLaunch size={18} style={{ marginLeft: "3px" }} />
            </a>
            <a href="#work" className={styles.secondaryCta}>
              View work{" "}
              <span className={styles.arrow}>
                <IoIosArrowForward style={{ verticalAlign: "middle" }} size={17} />
              </span>
            </a>
          </div>
        </div>

        {/* proof panel: search result preview + Lighthouse scores */}
        <div className={styles.visual}>
          <div className={styles.searchCard}>
            <div className={styles.siteRow}>
              <span className={styles.favicon}><img src="/Luxinteractive.png" alt="Luxinteractive Logo" /></span>
              <div className={styles.siteMeta}>
                <span className={styles.siteName}>{SITE.name}</span>
                <span className={styles.siteUrl}>{SITE.url}</span>
              </div>
            </div>
            <p className={styles.resultTitle}>{SITE.title}</p>
            <p className={styles.resultDesc}>{SITE.description}</p>
            {SITE.rating && (
              <div className={styles.ratingRow}>
                <span className={styles.ratingValue}>{SITE.rating}</span>
                <span className={styles.stars} aria-hidden="true">
                  {"★★★★★"}
                </span>
                <span className={styles.ratingCount}>({SITE.reviews} reviews)</span>
              </div>
            )}
          </div>

          <div className={styles.scoresCard}>
            <p className={styles.scoresLabel}>AVG Lighthouse scores</p>
            <ul className={styles.scores}>
              {SCORES.map(({ label, value }) => (
                <li key={label} className={styles.score}>
                  <svg viewBox="0 0 64 64" className={styles.ring} aria-hidden="true">
                    <circle cx="32" cy="32" r={RADIUS} className={styles.ringTrack} />
                    <circle
                      cx="32"
                      cy="32"
                      r={RADIUS}
                      className={styles.ringValue}
                      strokeDasharray={CIRC}
                      strokeDashoffset={CIRC * (1 - value / 100)}
                    />
                  </svg>
                  <span className={styles.scoreNumber}>{value}</span>
                  <span className={styles.scoreName}>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}