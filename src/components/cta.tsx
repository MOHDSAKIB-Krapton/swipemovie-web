import React from "react";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg my-20 shadow-lg gap-10">
        <div className="text-black text-center">
          <h3 className="text-2xl font-bold">
            Stop scrolling. Start discovering films you&apos;ll actually watch.
          </h3>
          <p className="mt-1">
            Join thousands rewriting their watchlists with signal over noise.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors w-full sm:w-auto">
            Go SwipeMovie Pro
          </button>
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors w-full sm:w-auto">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
