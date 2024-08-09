// import CodingProfiles from "@/components/CodingProfiles";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ContactUs from "@/components/ContactUs";
import Contact from "@/components/Contact";
import CodingProfilesIndex from "@/components/CodingProfiles/CodingProfilesIndex";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      {/* <CodingProfiles /> */}
      <About />
      <Projects />
      <CodingProfilesIndex />
      <Skills />
      {/* <ContactUs /> */}
      <Contact />
    </main>
  );
}