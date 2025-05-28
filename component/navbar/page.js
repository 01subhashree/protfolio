"use client";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { useEffect, useState } from "react";

function NavBar() {
  // Import necessary hooks

  // Navbar component with scroll animation and fixed position
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 fixed top-0 left-0 w-full transition-all duration-300
        ${scrolled
          ? "bg-white/90 shadow-lg py-2 px-4 rounded-2xl mx-auto mt-4 max-w-3xl scale-95"
          : "bg-transparent py-6 px-8"
        }
        flex justify-between items-center`}
      style={{ backdropFilter: scrolled ? "blur(8px)" : "none" }}
    >
      <div className="flex items-center space-x-2">
        <span className="text-4xl font-bold text-[#e6c6e6]">S</span>
        <div>
          {/* <div className="text-lg font-medium tracking-wide text-gray-900">Subhashree</div> */}
          <div className="text-xs tracking-widest text-gray-500">
            {/* Fullstack Wizard ✨ | */}
             Code Bender 🦄
          </div>
        </div>
      </div>
      <div className="flex space-x-8 text-sm font-mono tracking-wide text-gray-800">
        <a href="#" className="hover:text-[#bfa2e6]">
          About
        </a>
        <a href="#" className="hover:text-[#bfa2e6]">
          Skills
        </a>
        <a href="#" className="hover:text-[#bfa2e6]">
          Projects
        </a>
        <a href="#" className="hover:text-[#bfa2e6]">
          Experience
        </a>
        <a href="#" className="hover:text-[#bfa2e6]">
          Contact
        </a>
      </div>
      <button className="bg-[#e6c6e6] text-gray-900 px-6 py-3 rounded-2xl font-mono font-bold shadow-lg flex items-center space-x-2 hover:bg-[#bfa2e6] transition">
        <span>Download CV</span>
        <MdOutlineFileDownload className="w-6 h-6" />
      </button>
    </nav>
  );
}

export default NavBar;
