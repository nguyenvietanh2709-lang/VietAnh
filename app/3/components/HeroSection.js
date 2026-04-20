import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-wrap p-4 text-center mt-4">
      <div className="w-full md:w-1/3 px-2 mb-4">
        <div className="bg-white shadow p-4 flex flex-col min-h-[460px]">
          <h3 className="text-2xl font-normal mb-8">Responsive</h3>
          <i className="fa fa-desktop text-black mb-10 text-[120px]"></i>
          <p className="mb-2 text-gray-800">Built-in responsiveness</p>
          <p className="mb-2 text-gray-800">Mobile first fluid grid</p>
          <p className="mb-2 text-gray-800">Fits any screen sizes</p>
          <p className="mb-2 text-gray-800">PC Tablet and Mobile</p>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-2 mb-4">
        <div className="bg-white shadow p-4 flex flex-col min-h-[460px]">
          <h3 className="text-2xl font-normal mb-8">Standard CSS</h3>
          <i className="fa fa-css3 text-black mb-10 text-[120px]"></i>
          <p className="mb-2 text-gray-800">Standard CSS only</p>
          <p className="mb-2 text-gray-800">Easy to learn</p>
          <p className="mb-2 text-gray-800">No need for jQuery</p>
          <p className="mb-2 text-gray-800">No JavaScript library</p>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-2 mb-4">
        <div className="bg-white shadow p-4 flex flex-col min-h-[460px]">
          <h3 className="text-2xl font-normal mb-8">Design</h3>
          <i className="fa fa-diamond text-black mb-10 text-[120px]"></i>
          <p className="mb-2 text-gray-800">Paper like design</p>
          <p className="mb-2 text-gray-800">Bold colors and shadows</p>
          <p className="mb-2 text-gray-800">Equal across platforms</p>
          <p className="mb-2 text-gray-800">Equal across devices</p>
        </div>
      </div>
    </div>
  );
}
