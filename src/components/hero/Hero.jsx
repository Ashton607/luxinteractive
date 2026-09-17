import styles from "./Hero.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { GiRocketFlight } from "react-icons/gi";
import { MdRocketLaunch } from "react-icons/md";

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
          Raising the Standard for
          <br />
          Websites in <br/>
          Northen Cape
        </h1>

        <p className={styles.subtext}>
          I design and build websites for local business owners in Northern Cape 
          who care about how their business looks and performs online and help improve their Google 
          ratings.
        </p>

        <div className={styles.actions}>
          <a href="#services" className={styles.primaryCta}>
            Start a project <MdRocketLaunch size={18} style={{marginLeft:'3px'}} />
          </a>
          <a href="#work" className={styles.secondaryCta}>
            View work <span className={styles.arrow}><IoIosArrowForward style={{ verticalAlign: "middle" }} size={17} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}