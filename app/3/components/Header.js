import React from "react";

export default function Header({ setSidebarOpen, setModalOpen }) {
  return (
    <header className="bg-black text-white p-4" id="myHeader">
      <i onClick={() => setSidebarOpen(true)} className="fa fa-bars text-2xl p-2 hover:bg-gray-200 hover:text-black cursor-pointer transition-colors block max-w-fit"></i>
      <div className="text-center py-8">
        <h4 className="text-lg font-normal tracking-wide mb-2">BEAUTIFUL RESPONSIVE WEB SITES</h4>
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">BUILT WITH TAILWIND</h1>
        <div className="py-8">
          <button
            className="bg-gray-800 text-white hover:bg-gray-300 hover:text-black text-xl px-6 py-4 font-black tracking-wide transition-colors cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            LEARN TAILWIND
          </button>
        </div>
      </div>
    </header>
  );
}
