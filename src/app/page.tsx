
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}
