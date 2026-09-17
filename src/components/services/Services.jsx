import { FiTool, FiLayout, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: FiTool,
    title: "Maintenance",
    description: "Keep your site fast, secure, and up to date without lifting a finger.",
    features: [
      "Monthly updates",
      "Uptime monitoring",
      "Content & copy edits",
      "Priority bug fixes",
    ],
    ctaLabel: "Get Maintenance",
    ctaHref: "#booking",
  },
  {
    icon: FiLayout,
    title: "Web Design",
    description: "A custom built site designed around your brand, not a template.",
    features: [
      "New Website Design & Development",
      "Old Website Redesign & Development",
    ],
    ctaLabel: "Start a Project",
    ctaHref: "#booking",
  },
  {
    icon: FiTrendingUp,
    title: "SEO",
    description: "Get found on Google with a site that's built to rank, not just look good.",
    features: [
      "On page SEO setup",
      "Sitemap & metadata",
      "Page speed optimization",
      "Monthly performance reports",
    ],
    ctaLabel: "Boost My Rankings",
    ctaHref: "#booking",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.heading}>What I can help you with</h2>

      <p className={styles.subtext}>
        I build affordable websites in Douglas Northern Cape. I handle your website and SEO so 
        you can focus entirely on serving your clients.      
      </p>

      <div className={styles.grid}>
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className={styles.card}>
              <div className={styles.iconBadge}>
                <Icon size={20} />
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>

              <ul className={styles.featureList}>
                {service.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <FiCheckCircle className={styles.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={service.ctaHref} className={styles.cta}>
                {service.ctaLabel}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}