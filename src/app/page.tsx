'use client'

import Navbar from "@/components/Navbar";
import Lenis from "lenis";
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
// import {projects as projectData} from '../../data'


// const projects = projectData

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf (time: number){
    lenis.raf(time);
    requestAnimationFrame(raf);

    }
    requestAnimationFrame(raf)
  }, []) 
  return (
    <>
      <Navbar />
     <HeroSection />
    </>
  
  );
}
