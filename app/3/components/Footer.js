import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 py-8 lg:p-8">
      <h3 className="text-2xl font-normal mb-4">Footer</h3>
      <p className="mb-4">Powered by <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="underline hover:text-gray-300">Tailwind CSS</a></p>
      
      <div className="relative">
        <div className="absolute right-0 -top-8 flex items-center group">
          <span className="hidden group-hover:inline-block bg-gray-200 text-black px-2 py-1 text-sm mr-2 rounded">Go To Top</span>
          <a className="text-white hover:text-gray-300" href="#myHeader">
            <span className="text-4xl">
              <i className="fa fa-chevron-circle-up"></i>
            </span>
          </a>
        </div>
      </div>
      
      <p>Remember to check out our&nbsp;&nbsp;<a href="https://tailwindcss.com/docs" className="bg-gray-200 text-black px-4 py-2 hover:bg-gray-300 transition-colors inline-block mt-2" target="_blank" rel="noreferrer">Tailwind CSS Reference</a></p>
    </footer>
  );
}
