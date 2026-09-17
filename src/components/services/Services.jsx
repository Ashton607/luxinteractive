import { FiTool, FiLayout, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: FiTool,
    title: "Maintenance",
    description: "Keep your site fast, secure, and up to date without lifting a finger.",
    features: [
      "Monthly updates & security patches",
      "Uptime monitoring",
      "Content & copy edits",
      "Priority bug fixes",
    ],
    ctaLabel: "Get Maintenance",
    ctaHref: "/#contact",
  },
  {
    icon: FiLayout,
    title: "Web Design",
    description: "A custom-built site designed around your brand, not a template.",
    features: [
      "Custom design & layout",
      "Mobile-first & responsive",
      "Copywriting support",
      "Fast, optimized performance",
    ],
    ctaLabel: "Start a Project",
    ctaHref: "/#contact",
  },
  {
    icon: FiTrendingUp,
    title: "SEO",
    description: "Get found on Google with a site that's built to rank, not just look good.",
    features: [
      "On-page SEO setup",
      "Sitemap & metadata",
      "Page speed optimization",
      "Monthly performance reports",
    ],
    ctaLabel: "Boost My Rankings",
    ctaHref: "/#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.heading}>What I can help you with</h2>

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