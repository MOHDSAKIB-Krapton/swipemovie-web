"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextAnimation from "./animations/text";
import { MOCK_MOVIES } from "@/constants";
import Image from "next/image";

export default function TasteSection({
  cards = [...MOCK_MOVIES, ...MOCK_MOVIES, ...MOCK_MOVIES],
}: {
  cards?: typeof MOCK_MOVIES;
}) {
  const [index, setIndex] = useState(0);

  const nextSlide = (direction: "left" | "right") => {
    setIndex((prev) => {
      if (direction === "left") {
        return (prev - 1 + cards.length) % cards.length;
      }
      return (prev + 1) % cards.length;
    });
  };

  return (
    <section
      id="trending"
      className="w-full min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden py-12 md:py-24"
    >
      <div className="text-center mb-10 space-y-4">
        <TextAnimation>
          <h2 className="text-6xl font-bold">Your taste</h2>
        </TextAnimation>
        <TextAnimation delay={0.4}>
          <p className="text-gray-400">
            Here are your something which you maybe love
          </p>
        </TextAnimation>
      </div>

      <div className="relative w-6xl flex justify-center items-center">
        <div className="absolute left-0 bottom-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-50" />
        <div className="absolute right-0 bottom-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-50" />
        <div
          className="relative w-full max-w-6xl h-[500px] flex justify-center items-center overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {cards.map((card, i) => {
            let offset = (i - index + cards.length) % cards.length;
            if (offset > cards.length / 2) {
              offset -= cards.length;
            }

            const isActive = offset === 0;

            return (
              <AnimatePresence key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: offset === 0 ? 1 : Math.abs(offset) <= 2 ? 0.8 : 0,
                    y: offset === 0 ? -30 : Math.abs(offset) === 1 ? -15 : -0,
                    scale: isActive ? 1.05 : 1,
                    x: -offset * 270,
                    rotateY: offset * -10,
                    zIndex: isActive ? 10 : 9,
                    width: isActive ? 280 : 300,
                    height:
                      offset === 0 ? 390 : Math.abs(offset) === 1 ? 390 : 350,
                  }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 50,
                    duration: 5,
                  }}
                  className={`absolute overflow-hidden shadow-lg rounded-2xl`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src={card.image}
                    alt="taste"
                    fill
                    title={card.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </div>

      <div className="flex space-x-3 items-center">
        <div className="w-15 h-15 flex lex-row items-center justify-center rounded-full bg-white/10 text-gray-500">
          {/* Left slide */}
          <button
            className=" w-full h-full rounded-l-full"
            onClick={() => nextSlide("left")}
          >
            <span className="text-2xl cursor-pointer">←</span>
          </button>

          {/* Right Slide */}
          <button
            className="w-full h-full rounded-r-full"
            onClick={() => nextSlide("right")}
          >
            <span className="text-2xl cursor-pointer">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
