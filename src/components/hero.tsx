import React from "react";
import Image from "next/image";
import TextAnimation from "./animations/text";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24">
      {/* Full screen background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" // example from Pixabay
          alt="Movie Scenes Backdrop"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 px-6 text-center max-w-6xl">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
          <TextAnimation>
            Stop doom-scrolling. Start swipe-discovering.
          </TextAnimation>
          <TextAnimation delay={0.2}>
            <span className="text-[#E50914]/80">
              AI picks movies you actually vibe with.
            </span>
          </TextAnimation>
        </h1>
        <TextAnimation delay={0.6}>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            SwipeMovie learns your taste in real-time as you swipe yes/no. Zero
            spreadsheets. Zero stress. Just fresh cinema recs, tailored to your
            mood.
          </p>
        </TextAnimation>
        <button className="bg-[#E50914]/80 hover:bg-[#E50914] px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
          Download Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
