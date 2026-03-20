"use client";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="flex items-center bg-slate-600 text-white">

        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-700">
          <i className="fa-solid fa-home"></i>
          Logo
        </div>

        {/* Menu */}
        <div className="hidden sm:flex items-center">

          <a href="#" className="px-4 py-3 hover:bg-white hover:text-black">
            <i className="fa fa-globe"></i>
          </a>

          <a href="#" className="px-4 py-3 hover:bg-white hover:text-black">
            <i className="fa-solid fa-user"></i>
          </a>

          <a href="#" className="px-4 py-3 hover:bg-white hover:text-black">
            <i className="fa-solid fa-envelope"></i>
          </a>

          {/* Dropdown */}
          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-3 flex items-center gap-1 hover:bg-white hover:text-black"
            >
              <i className="fa-solid fa-bell"></i>
              <span className="bg-green-500 text-xs px-2 rounded-full">3</span>
            </button>

            {open && (
              <div className="absolute bg-white text-black shadow-lg w-72">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  One new friend request
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  John Doe posted on your wall
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Jane likes your post
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Right */}
        <div className="ml-auto flex items-center">

          {/* Mobile button */}
          <button className="sm:hidden px-4 py-3 hover:bg-white hover:text-black">
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Avatar */}
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            className="h-8 w-8 rounded-full mx-3"
            alt="avatar"
          />
        </div>

      </div>
    </div>
  );
}