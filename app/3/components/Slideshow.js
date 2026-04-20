"use client";

import React, { useState } from "react";

export default function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    "https://www.w3schools.com/w3images/snow.jpg",
    "https://www.w3schools.com/w3images/lights.jpg",
    "https://www.w3schools.com/w3images/mountains.jpg",
    "https://www.w3schools.com/w3images/forest.jpg"
  ];

  function plusDivs(n) {
    let newIndex = slideIndex + n;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    setSlideIndex(newIndex);
  }

  return (
    <div className="p-4 lg:p-8">
      <h2 className="text-3xl font-normal text-center mb-6">Slideshows</h2>
      <div className="max-w-[800px] mx-auto relative cursor-pointer group">
        {slides.map((src, idx) => (
          <img
            key={idx}
            className="animate-[fade_0.5s]"
            src={src}
            style={{ width: "100%", display: idx === slideIndex ? "block" : "none" }}
            alt={`slide-${idx}`}
          />
        ))}

        <button 
          className="absolute top-1/2 -translate-y-1/2 left-0 px-5 py-4 text-white text-xl bg-transparent hover:bg-gray-800 hover:text-white transition-colors cursor-pointer border-0" 
          onClick={() => plusDivs(-1)}
        >
          &#10094;
        </button>
        <button 
          className="absolute top-1/2 -translate-y-1/2 right-0 px-5 py-4 text-white text-xl bg-transparent hover:bg-gray-800 hover:text-white transition-colors cursor-pointer border-0" 
          onClick={() => plusDivs(1)}
        >
          &#10095;
        </button>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fade {
            from {opacity: 0} 
            to {opacity: 1}
          }
        `}} />
      </div>
    </div>
  );
}
