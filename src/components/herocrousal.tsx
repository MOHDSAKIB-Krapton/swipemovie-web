"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_MOVIES } from "@/constants/index";
import { Calendar, Globe, TimerIcon } from "lucide-react";
import TextAnimation from "./animations/text";
import Image from "next/image";

export default function HeroCarousel({
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
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden py-12 md:py-24">
      <div className="text-center mb-10 space-y-4">
        <TextAnimation>
          <h2 className="text-6xl font-bold">Explore from App</h2>
        </TextAnimation>
        <TextAnimation delay={0.4}>
          <p className="text-gray-400">
            Here are some picks from our app for you to explore
          </p>
        </TextAnimation>
      </div>

      <div className="relative flex justify-center items-center max-w-7xl w-full mx-auto">
        {/* Gradients */}
        <div className="absolute left-0 bottom-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-50" />
        <div className="absolute right-0 bottom-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-50" />

        {/* Main Carousel */}
        <div
          className="relative w-full h-[500px] flex justify-center items-center overflow-hidden"
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
                    opacity: offset === 0 ? 1 : Math.abs(offset) <= 2 ? 0.4 : 0,
                    // y: offset === 0 ? -30 : Math.abs(offset) === 1 ? -15 : -0,
                    y: 0,
                    scale: isActive ? 1.05 : 1,
                    x: -offset * 480,
                    rotateY: offset * -10,
                    zIndex: isActive ? 10 : 9,
                    width: isActive ? "50%" : "22%",
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

                  <motion.div
                    initial={{ translateY: 100, opacity: 0 }}
                    animate={{
                      translateY: isActive ? 0 : 100,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: isActive ? 0.5 : 0 }}
                    exit={{ translateY: 100, opacity: 0 }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex flex-row justify-between"
                  >
                    <h3 className="text-3xl font-semibold wrap-break-word max-w-52">
                      {card.title}
                    </h3>

                    <div className="flex flex-row items-center space-x-4 flex-1 justify-end">
                      <div className="flex flex-row items-center space-x-1">
                        <TimerIcon width={30} height={30} />
                        <div>
                          <p className="text-[8px]">Length</p>
                          <p className="text-xs tracking-wider">
                            {card.runtime} minutes
                          </p>
                        </div>
                      </div>

                      <div className="h-6 w-[1px] bg-white/80" />
                      <div className="flex flex-row items-center space-x-1">
                        <Calendar width={25} height={25} color="#f3f4f6" />
                        <div>
                          <p className="text-[8px]">Year</p>
                          <p className="text-xs tracking-wider">
                            {card.release_year}
                          </p>
                        </div>
                      </div>

                      <div className="h-6 w-[1px] bg-white/80" />
                      <div className="flex flex-row items-center space-x-1">
                        <Globe width={25} height={25} color="#f3f4f6" />
                        <div>
                          <p className="text-[8px]">Language</p>
                          <p className="text-xs tracking-wider">
                            {card.languages[0]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 items-center absolute z-20 right-[21%]">
          <div className="w-15 h-15 flex lex-row items-center justify-center rounded-full text-white backdrop-blur-lg">
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
      </div>
    </section>
  );
}
