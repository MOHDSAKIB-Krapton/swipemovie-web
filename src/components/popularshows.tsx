"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MOCK_MOVIES } from "@/constants";

const categories = ["Movies", "TV Shows", "Animation", "Anime"];
const images = MOCK_MOVIES.map((movie) => movie.image);

const InfiniteRow = ({
  images,
  active,
  direction = "left",
  speed = 50,
}: {
  images: string[];
  active: string;
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Define dimensions based on the original component
  const itemWidth = 216; // 192px image + 24px gap
  const totalWidth = images.length * itemWidth;

  // Calculate duration: Lower 'speed' means slower movement, so a longer 'duration'.
  // Using an arbitrary base: 50 speed = 10s duration.
  // const baseDuration = 500; // in seconds (e.g., totalWidth / 500 = seconds)
  const duration = (totalWidth / speed) * 0.5; // Adjusted heuristic for a good feel

  const animationName = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className="relative h-48 overflow-hidden">
      {/* Define CSS Keyframes dynamically based on 'totalWidth' to handle the looping.
        The 'totalWidth' is the distance the container must travel before resetting.
      */}
      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${totalWidth}px);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-${totalWidth}px);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      {/*
        The inner container is animated. It must hold two copies of the images 
        for a seamless loop.
      */}
      <div
        className="absolute inset-0 flex gap-6 w-max"
        style={{
          // Set explicit width to hold two sets of images plus the gap between them.
          width: `${totalWidth * 2}px`,
          // Apply the CSS animation
          animation: `${animationName} ${duration}s linear infinite`,
        }}
      >
        {/* Render images twice for seamless looping */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-48">
            <div className="relative w-full h-full rounded-4xl overflow-hidden">
              <Image src={src} alt="show" fill className="object-cover" />
              {/* Overlay for inactive categories */}
              {active !== "Movies" && (
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays to hide the loop reset point */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const PopularShows = () => {
  const [active, setActive] = useState("Movies");

  return (
    <div
      id="top-picks"
      className="max-w-7xl mx-auto py-16 text-white flex flex-col items-center"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-10 space-y-2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold">Popular Shows</h2>
        <p className="text-[#E50914]">Online Streaming</p>
      </motion.div>

      {/* Tab Bar */}
      <motion.div
        className="flex gap-6 bg-[#1a1a1a] px-6 py-3 rounded-full overflow-hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            className={`px-6 py-2 rounded-full font-medium ${
              active === cat
                ? "bg-[#E50914] text-black"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActive(cat)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            viewport={{ once: true }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Infinite Sliders */}
      <div className="mt-12 space-y-6 w-full">
        {/* Top row (left → right) */}
        <InfiniteRow
          images={images}
          active={active}
          direction="left"
          speed={60}
        />

        {/* Bottom row (right → left) */}
        <InfiniteRow
          images={images}
          active={active}
          direction="right"
          speed={40}
        />
      </div>
    </div>
  );
};

export default PopularShows;
