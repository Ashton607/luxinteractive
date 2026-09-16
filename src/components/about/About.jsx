import styles from "./About.module.css";

const STATS = [
  { number: "1+", label: "Years of Experience" },
  { number: "20+", label: "Projects Completed" },
  { number: "6", label: "Satisfied Clients" },
  { number: "6+", label: "Client Reviews" },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>

      <div className={styles.layout}>
        {/* Profile card — photo, name/title, gradient quote band */}
        <div className={styles.card}>
          <div className={styles.photoWrap}>
            <img
              src="/about/aboutMe.webp"
              alt="Founder of luxinteractive"
              className={styles.photo}
            />
          </div>

          <div className={styles.info}>
            <h3 className={styles.name}>Ashton</h3>
            <p className={styles.role}>Founder | Web Design &amp; Development</p>
          </div>

          <div className={styles.quoteBand}>
            <p className={styles.quote}>
              Quality is not an act, it is a habit.
            </p>
            <span className={styles.quoteAuthor}>Aristotle</span>
          </div>
        </div>

        {/* Story */}
        <div className={styles.story}>
          <h3 className={styles.storyTitle}>Background</h3>
          <p className={styles.storyText}>
            Lux was born from a simple idea: a website should be more than just a page on a browser.
            Technology gives us the ability to build almost anything, but technology alone doesn't 
            create an experience. It is the combination of creativity, design, movement, storytelling, 
            and thoughtful development that gives a digital experience its character.
            Luxinteractive brings these elements together. From a heartfelt digital letter created for 
            someone special, to an immersive wedding invitation, a memorable event experience, or a 
            modern website for a growing business, we believe digital experiences should feel intentional 
            and personal. Luxinteractive combines software with vehemence the drive to create something 
            that leaves an impression. We don't simply build websites. We take ideas and transform them 
            into experiences designed to be seen, felt, and remembered. That is Luxinteractive.
          </p>
          <h3 className={styles.storyTitle}>Mission</h3>
          <p className={styles.storyText}>
            Luxinteractive combines technology, design, animation, and storytelling to create digital experiences 
            that connect with people. I aim to make the web more expressive by transforming ideas, 
            businesses, and special moments into elegant, interactive experiences that people remember.
          </p>
          <h3 className={styles.storyTitle}>Vision</h3>
          <p className={styles.storyText}>
            To redefine the way people experience the web by turning digital experiences into something 
            meaningful, memorable, and beautifully crafted.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className={styles.statNumber}>{stat.number}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}