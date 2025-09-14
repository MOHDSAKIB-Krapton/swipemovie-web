"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative w-full h-screen flex items-center justify-center">
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
        <div className="relative z-10 px-6 text-center max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Your Movie Taste,{" "}
            <span className="text-[#E50914]/80">Reimagined</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Swipe through suggestions, let AI learn your vibe, and match movies
            that hit just right.
          </p>
          <button className="bg-[#E50914]/80 hover:bg-[#E50914] px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Section: How It Works (immersive split image + text) */}
      <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-6">Swipe. Learn. Recommend.</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Every swipe (left or right) trains our AI on what you truly like. No
            generic picks — only what matters to *you*.
          </p>
        </div>
        <div className="md:w-1/2 relative w-full h-80 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // placeholder background from Unsplash
            alt="AI matching projector"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Section: Spectacular Visual Showcase (widestrip backgrounds) */}
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

      {/* Section: Unique Content Flow */}
      <section className="py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Not Just Matching, But Immersing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Imagine being shown full‐width snapshots, ambient stills, motion
            blur, soundtrack snippets — a feed that doesn’t box you in.
          </p>
        </div>
        <div className="relative h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vintage cinema backdrop"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-10 px-6 border-t border-gray-800">
        <p className="text-gray-400 mb-2">
          SwipeMovie © {new Date().getFullYear()}
        </p>
        <p className="text-[#E50914]/80 font-semibold">
          support@swipemovie.com
        </p>
      </footer>
    </main>
  );
}
