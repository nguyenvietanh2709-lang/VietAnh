"use client";

import { useState } from "react";

function AccordionItem({ title, open, onToggle, children }) {
  return (
    <div className="overflow-hidden rounded-md border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between bg-gray-50 px-3 py-2 text-left text-sm font-semibold text-gray-800 hover:bg-gray-100"
      >
        <span>{title}</span>
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`${
          open ? "block" : "hidden"
        } px-3 py-3 text-sm text-gray-600`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Accordion() {
  const [openAcc, setOpenAcc] = useState(() => new Set(["groups"]));

  function toggleAcc(key) {
    setOpenAcc((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const myPhotos = [
    "https://www.w3schools.com/w3images/house5.jpg",
    "https://www.w3schools.com/w3images/house2.jpg",
    "https://www.w3schools.com/w3images/house3.jpg",
    "https://www.w3schools.com/w3images/house4.jpg",
    "https://www.w3schools.com/w3images/house1.jpg",
    "https://www.w3schools.com/w3images/snow.jpg",
  ];

  return (
    <div className="rounded-lg border bg-white shadow-sm p-3">
      <div className="space-y-2">
        <AccordionItem
          title="My Groups"
          open={openAcc.has("groups")}
          onToggle={() => toggleAcc("groups")}
        >
          Some text..
        </AccordionItem>

        <AccordionItem
          title="My Events"
          open={openAcc.has("events")}
          onToggle={() => toggleAcc("events")}
        >
          Some other text..
        </AccordionItem>

        <AccordionItem
          title="My Photos"
          open={openAcc.has("photos")}
          onToggle={() => toggleAcc("photos")}
        >
          <div className="grid grid-cols-3 gap-2">
            {myPhotos.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt=""
                className="aspect-square w-full rounded bg-gray-100 object-cover"
              />
            ))}
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}

