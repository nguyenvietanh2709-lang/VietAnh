import React from 'react';

export default function Header({ onToggleSidebar, activeFilter = 'ALL', onFilterChange }) {
  return (
    <header id="portfolio" className="bg-[#f1f1f1]">
      <div className="lg:hidden p-4 flex justify-between items-center">
        <span className="text-3xl hover:text-gray-500 cursor-pointer" onClick={onToggleSidebar}><i className="fa fa-bars"></i></span>
        <a href="#"><img src="https://www.w3schools.com/w3images/avatar_g2.jpg" className="w-[65px] h-[65px] rounded-full hover:opacity-75" alt="avatar" /></a>
      </div>

      <div className="p-4 lg:p-8">
        <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
        <div className="flex flex-wrap items-center gap-2 border-b-4 border-gray-300 pb-4">
          <span className="mr-4 font-semibold">Filter:</span>
          <button onClick={() => onFilterChange('ALL')} className={`px-4 py-2 transition-colors ${activeFilter === 'ALL' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}>ALL</button>
          <button onClick={() => onFilterChange('design')} className={`px-4 py-2 transition-colors ${activeFilter === 'design' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><i className="fa fa-diamond mr-2"></i>Design</button>
          <button onClick={() => onFilterChange('photo')} className={`px-4 py-2 hidden sm:inline-block transition-colors ${activeFilter === 'photo' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><i className="fa fa-photo mr-2"></i>Photos</button>
          <button onClick={() => onFilterChange('art')} className={`px-4 py-2 hidden sm:inline-block transition-colors ${activeFilter === 'art' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}><i className="fa fa-map-pin mr-2"></i>Art</button>
        </div>
      </div>
    </header>
  );
}
