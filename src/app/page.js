import Booking from "@/components/booking/Booking";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Testimonial from "@/components/testimonials/Testimonial";
import UVP from "@/components/uvp/UVP";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work/>
      <Services/>
      <Testimonial/>
      <UVP/>
      <Booking/>
    </main>
  );
}