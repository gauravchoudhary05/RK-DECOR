import Hero        from "@/sections/Hero";
import About       from "@/sections/About";
import Process     from "@/sections/Process";
import Gallery     from "@/sections/Gallery";
import Testimonials from "@/sections/Testimonials";
import Collection  from "@/sections/Collection";
import CTA         from "@/sections/CTA";
import Footer      from "@/sections/Footer";
import PageClient  from "@/components/PageClient";

export default function Home() {
  return (
    <PageClient>
      <main>
        <Hero />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <Collection />
        <CTA />
        <Footer />
      </main>
    </PageClient>
  );
}