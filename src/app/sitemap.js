// Next.js builds /sitemap.xml from this file automatically.
// Put it at: src/app/sitemap.js

// Set SITE_URL in Vercel (Settings > Environment Variables) to override this.
const SITE = (process.env.SITE_URL || "https://luxinteractive.co.za").replace(/\/+$/, "");

// Every public page you want search engines to find.
// Work, Services, Booking and Contact are sections on the homepage (/#work etc.),
// so they don't get their own entries. If one ever becomes its own page, add it here.
const pages = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap() {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    changeFrequency,
    priority,
  }));
}