// "use client";

// import Navbar from "@/components/navbar";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import PopularShowsSection from "@/components/popularshows";
// import Footer from "@/components/footer";
// import HeroSection from "@/components/hero";
// import Sensory from "@/components/sensory";
// import Pricing from "@/components/pricing";
// import TasteSection from "@/components/taste";
// import HeroCarousel from "@/components/herocrousal";
// import CTA from "@/components/cta";

// export default function Home() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <main className="bg-black text-white overflow-x-hidden">
//         <Navbar />
//         <HeroSection />
//         <HeroCarousel />
//         <TasteSection />
//         <PopularShowsSection />
//         <Sensory />
//         <Pricing />
//         <CTA />
//         <Footer />
//       </main>
//     </motion.div>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Sensory from "@/components/sensory";
import Pricing from "@/components/pricing";
import TasteSection from "@/components/taste";
import HeroCarousel from "@/components/herocrousal";
import CTA from "@/components/cta";
import Navbar from "@/components/navbar";
import PopularShowsSection from "@/components/popularshows";

export default function Page() {
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCurtain(false);
    }, 1500); // curtain lasts 1.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Curtain Animation */}
      <AnimatePresence>
        {showCurtain && (
          <>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-1/2 h-screen bg-black z-50 "
            />
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-1/2 h-screen bg-black z-50"
            />
          </>
        )}
      </AnimatePresence>

      {/* Main Website */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }} // fade in after curtain
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
    </>
  );
}
