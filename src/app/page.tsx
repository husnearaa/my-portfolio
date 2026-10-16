"use client";

import Navbar from "@/components/Navbar";
import Lenis from "lenis";
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import { projects as projectData } from "../../public/data";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
// import ExperienceEducationSection from "@/components/ExperienceEducationSection";

const projects = projectData;

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProjects data={projects} />
      <SkillsSection />
      <ContactSection />
      <Footer />
      < ScrollToTop />
    </>
  );
}
