"use client";
import { useState } from "react";

export default function ProfileAlert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative mb-4 hidden rounded border border-[#b9c6cc] bg-[#dfe7ea] p-4 sm:block">
      {/* Nút đóng thông báo */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-0 top-0 bg-[#ccd7db] px-3 py-2 text-gray-800 hover:bg-[#b9c6cc] transition-colors"
      >
        <i className="fa fa-remove"></i>
      </button>

      {/* Nội dung thông báo */}
      <p className="mb-2">
        <strong className="font-bold text-gray-800">Hey!</strong>
      </p>
      <p className="text-sm text-gray-700">
        People are looking at your profile. Find out who.
      </p>
    </div>
  );
}