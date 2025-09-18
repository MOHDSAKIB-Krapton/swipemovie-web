"use client";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="text-center py-10 px-6 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-400 mb-2">
              SwipeMovie © {new Date().getFullYear()}
            </p>
            <p className="text-[#E50914]/80 font-semibold">
              contact.swipemovie@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-5 opacity-80">
            <a href="#" className="hover:opacity-100 transition">
              X
            </a>
            <a
              href="https://instagram.com/swipemovie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition"
            >
              Instagram
            </a>
            <a href="#" className="hover:opacity-100 transition">
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
