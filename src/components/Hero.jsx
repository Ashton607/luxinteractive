import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <img src="/Luxinteractive_logo.svg" alt="Luxinteractive Logo" className={styles.eyebrowImg} />
        </div>

        <h1 className={styles.headline}>
          Websites built with intention,
          <br />
          not templates.
        </h1>

        <p className={styles.subtext}>
          I design and build fast, considered websites for founders and small
          teams who care about how their business looks and performs online.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.primaryCta}>
            Start a project
          </a>
          <a href="#work" className={styles.secondaryCta}>
            View work <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}