import Hero from "@/components/hero/Hero";
import Testimonial from "@/components/testimonials/Testimonial";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work/>
      <Testimonial/>
    </main>
  );
}