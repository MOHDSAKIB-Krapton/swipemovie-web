import Image from "next/image";
import React from "react";

const Sensory = () => {
  return (
    <section className="relative py-0">
      <div className="h-96 w-full relative">
        <Image
          src="/movie.jpg" // wide film background from Pixabay
          alt="Film background wide"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h3 className="text-5xl font-bold text-white mb-4">
            Sensory Visuals
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl">
            Cinematic feeds. Trailer glimpses. Vibe previews. We pull you in
            before you even watch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sensory;
