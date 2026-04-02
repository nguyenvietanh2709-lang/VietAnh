"use client";
import { useState } from "react";

export default function AccordionMenu() {

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };


  const images = [
    "https://www.w3schools.com/w3images/lights.jpg",
    "https://www.w3schools.com/w3images/nature.jpg",
    "https://www.w3schools.com/w3images/mountains.jpg",
    "https://www.w3schools.com/w3images/forest.jpg",
    "https://www.w3schools.com/w3images/nature.jpg",
    "https://www.w3schools.com/w3images/snow.jpg",
  ];

  return (
    <div className="w-full shadow-md rounded-md overflow-hidden bg-white">

      {/* SECTION 1: MY GROUPS */}
      <div className="border-b border-gray-100">
        <button
          onClick={() => toggle("groups")}
          className="w-full flex items-center px-4 py-3 bg-[#607d8b] hover:bg-[#455a64] text-white transition-all text-left"
        >
          <i className="fa fa-circle-o-notch fa-fw mr-4"></i>
          <span>My Groups</span>
        </button>
        <div className={`${openId === "groups" ? "block" : "hidden"} p-4 bg-white text-sm text-gray-700`}>
          <p>Some text..</p>
        </div>
      </div>

      {/* SECTION 2: MY EVENTS */}
      <div className="border-b border-gray-100">
        <button
          onClick={() => toggle("events")}
          className="w-full flex items-center px-4 py-3 bg-[#607d8b] hover:bg-[#455a64] text-white transition-all text-left"
        >
          <i className="fa fa-circle-o-notch fa-fw mr-4"></i>
          <span>My Events</span>
        </button>
        <div className={`${openId === "events" ? "block" : "hidden"} p-4 bg-white text-sm text-gray-700`}>
          <p>Some other text..</p>
        </div>
      </div>

      {/* SECTION 3: MY PHOTOS */}
      <div>
        <button
          onClick={() => toggle("photos")}
          className="w-full flex items-center px-4 py-3 bg-[#607d8b] hover:bg-[#455a64] text-white transition-all text-left"
        >
          <i className="fa fa-users fa-fw mr-4"></i>
          <span>My Photos</span>
        </button>

        <div className={`${openId === "photos" ? "block" : "hidden"} p-4 bg-white`}>
          <div className="grid grid-cols-2 gap-2">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`photo-${index}`}
                className="w-full h-auto rounded shadow-sm hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}