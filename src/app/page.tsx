"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import PopularShowsSection from "@/components/popularshows";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Sensory from "@/components/sensory";
import Pricing from "@/components/pricing";
import TasteSection from "@/components/taste";
import HeroCarousel from "@/components/herocrousal";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <main className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <HeroCarousel />
        <TasteSection />
        <PopularShowsSection />
        <Sensory />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </motion.div>
  );
}
