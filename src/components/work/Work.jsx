import styles from "./Work.module.css";

const PROJECTS = [
  {
    name: "Deon Ellison Foundation",
    image: "/work/npo.png",
    quote:
      "Been worth every penny so far. On track to grow $6,500 in revenue this month. I know you guys have been a big part of that.",
    stat: "27 New Leads In Month One",
  },
  {
    name: "Hair Salon",
    image: "/work/salon.png",
    quote:
      "Payton and his team are very knowledgeable about the SEO process. They have helped give Skyscape a better presence online.",
    stat: "4.5k Monthly Visitors",
  },
  {
    name: "Barbershop",
    image: "/work/barbershop.png",
    quote:
      "Payton and his team are very knowledgeable about the SEO process. They have helped give Skyscape a better presence online.",
    stat: "4.5k Monthly Visitors",
  },
];

export default function Work() {
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
        {PROJECTS.map((project) => (
          <div key={project.name} className={styles.card}>
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