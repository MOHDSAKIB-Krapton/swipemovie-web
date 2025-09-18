"use client";

import { motion } from "framer-motion";

const navLinks = ["Top Picks", "Trending", "Pricing"];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-[99999] p-6 flex justify-between items-center text-white backdrop-blur-md bg-black/30"
    >
      <div className="font-bold text-2xl text-[#E50914]">SWIPEMOVIE</div>
      <div className="text-center self-end">
        <ul className="flex justify-center space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="hover:text-gray-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
