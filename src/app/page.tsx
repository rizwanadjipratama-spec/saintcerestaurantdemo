import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedMenu from "@/components/sections/FeaturedMenu";
import FullMenu from "@/components/sections/FullMenu";
import Gallery from "@/components/sections/Gallery";
import Experience from "@/components/sections/Experience";
import Reservation from "@/components/sections/Reservation";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <FeaturedMenu />
      <FullMenu />
      <Gallery />
      <Reservation />
      <FAQ />
      <Contact />
    </main>
  );
}
