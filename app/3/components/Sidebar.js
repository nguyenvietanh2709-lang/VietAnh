import React from "react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg flex flex-col text-center transition-transform duration-300 z-50 overflow-y-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ fontSize: "40px", paddingTop: "10%" }}
      id="mySidebar"
    >
      <h1 className="text-5xl font-normal mb-6 text-black">Side Navigation</h1>
      <button className="block w-full text-center py-4 px-6 hover:bg-gray-200 transition-colors cursor-pointer" onClick={() => setSidebarOpen(false)}>
        Close <i className="fa fa-remove"></i>
      </button>
      <a href="#" className="block w-full text-center py-4 px-6 hover:bg-gray-200 transition-colors">Link 1</a>
      <a href="#" className="block w-full text-center py-4 px-6 hover:bg-gray-200 transition-colors">Link 2</a>
      <a href="#" className="block w-full text-center py-4 px-6 hover:bg-gray-200 transition-colors">Link 3</a>
      <a href="#" className="block w-full text-center py-4 px-6 hover:bg-gray-200 transition-colors">Link 4</a>
    </nav>
  );
}
