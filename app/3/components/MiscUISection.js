"use client";

import React, { useState } from "react";

export default function MiscUISection() {
  const [activeTab, setActiveTab] = useState("London");
  const [accordionDemo1, setAccordionDemo1] = useState(false);
  const [accordionDemo2, setAccordionDemo2] = useState(false);
  const [accordionDemo3, setAccordionDemo3] = useState(false);

  return (
    <div className="p-4 lg:p-8">
      <hr className="my-8 border-gray-300" />
      <h2 className="text-3xl font-normal text-center mb-6">Navigation</h2>

      <div className="bg-black text-white w-full flex flex-wrap">
        <a href="#" className="px-4 py-4 hover:bg-gray-200 hover:text-black transition-colors">Home</a>
        <a href="#" className="px-4 py-4 hover:bg-gray-200 hover:text-black transition-colors">Link 1</a>
        <div className="relative group">
          <button className="px-4 py-4 hover:bg-gray-200 hover:text-black transition-colors h-full flex items-center cursor-pointer">
            Dropdown <i className="fa fa-caret-down ml-2"></i>
          </button>
          <div className="absolute top-full left-0 bg-white text-black min-w-[160px] shadow-lg hidden group-hover:flex flex-col z-10">
            <a href="#" className="px-4 py-3 hover:bg-gray-200 transition-colors">Link 1</a>
            <a href="#" className="px-4 py-3 hover:bg-gray-200 transition-colors">Link 2</a>
            <a href="#" className="px-4 py-3 hover:bg-gray-200 transition-colors">Link 3</a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
      <h2 className="text-3xl font-normal text-center mb-6">Accordions</h2>

      <div className="mb-1">
        <button
          onClick={() => setAccordionDemo1(!accordionDemo1)}
          className="w-full bg-black text-white text-left px-4 py-4 hover:bg-gray-300 hover:text-black transition-colors cursor-pointer"
        >
          Open Section 1
        </button>
        <div className={`bg-gray-100 ${accordionDemo1 ? 'block' : 'hidden'} animate-[fade_0.4s]`}>
          <div className="p-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>

      <div className="mb-1">
        <button
          onClick={() => setAccordionDemo2(!accordionDemo2)}
          className="w-full bg-black text-white text-left px-4 py-4 hover:bg-gray-300 hover:text-black transition-colors cursor-pointer"
        >
          Open Section 2
        </button>
        <div className={`bg-gray-100 flex flex-col ${accordionDemo2 ? 'block' : 'hidden'} animate-[fade_0.4s]`}>
          <a href="#" className="w-full text-left px-4 py-3 hover:bg-gray-300 transition-colors">Link 1</a>
          <a href="#" className="w-full text-left px-4 py-3 hover:bg-gray-300 transition-colors">Link 2</a>
          <a href="#" className="w-full text-left px-4 py-3 hover:bg-gray-300 transition-colors">Link 3</a>
        </div>
      </div>

      <div className="mb-1">
        <button
          onClick={() => setAccordionDemo3(!accordionDemo3)}
          className="w-full bg-black text-white text-left px-4 py-4 hover:bg-gray-300 hover:text-black transition-colors cursor-pointer"
        >
          Open Section 3
        </button>
        <div className={`bg-black text-white ${accordionDemo3 ? 'block' : 'hidden'} animate-[fade_0.4s]`}>
          <div className="p-4">
            <p className="mb-4">Accordion with Images:</p>
            <img src="/snowtops.jpg" className="w-[30%] mb-4 animate-[zoom_0.6s]" alt="snowtops" />
            <p>French Alps</p>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
      <h2 className="text-3xl font-normal text-center mb-6">Tabs</h2>

      <div className="border border-gray-300">
        <div className="bg-black text-white flex flex-wrap border-b border-gray-300">
          <button
            className={`px-6 py-4 transition-colors cursor-pointer ${activeTab === 'London' ? 'bg-gray-400 text-black' : 'hover:bg-gray-200 hover:text-black'}`}
            onClick={() => setActiveTab('London')}
          >
            London
          </button>
          <button
            className={`px-6 py-4 transition-colors cursor-pointer ${activeTab === 'Paris' ? 'bg-gray-400 text-black' : 'hover:bg-gray-200 hover:text-black'}`}
            onClick={() => setActiveTab('Paris')}
          >
            Paris
          </button>
          <button
            className={`px-6 py-4 transition-colors cursor-pointer ${activeTab === 'Tokyo' ? 'bg-gray-400 text-black' : 'hover:bg-gray-200 hover:text-black'}`}
            onClick={() => setActiveTab('Tokyo')}
          >
            Tokyo
          </button>
        </div>

        <div className={`p-4 animate-[fade_0.5s] ${activeTab === 'London' ? 'block' : 'hidden'}`}>
          <h2 className="text-3xl font-normal mb-4">London</h2>
          <p className="mb-2">London is the capital city of England.</p>
          <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        </div>

        <div className={`p-4 animate-[fade_0.5s] ${activeTab === 'Paris' ? 'block' : 'hidden'}`}>
          <h2 className="text-3xl font-normal mb-4">Paris</h2>
          <p className="mb-2">Paris is the capital of France.</p>
          <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
        </div>

        <div className={`p-4 animate-[fade_0.5s] ${activeTab === 'Tokyo' ? 'block' : 'hidden'}`}>
          <h2 className="text-3xl font-normal mb-4">Tokyo</h2>
          <p className="mb-2">Tokyo is the capital of Japan.</p>
          <p>It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
      <h2 className="text-3xl font-normal text-center mb-6">Buttons</h2>
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <a className="bg-black text-white px-4 py-2 hover:bg-gray-300 hover:text-black cursor-pointer transition-colors">Button</a>
          <a className="bg-black text-white px-4 py-2 hover:bg-gray-300 hover:text-black cursor-pointer transition-colors">Button</a>
          <a className="bg-gray-500 text-gray-300 px-4 py-2 cursor-not-allowed">Button</a>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <a className="bg-black w-12 h-12 rounded-full text-white flex items-center justify-center hover:bg-gray-300 hover:text-black cursor-pointer shadow"><i className="fa fa-plus"></i></a>
          <a className="bg-black w-12 h-12 rounded-full text-white flex items-center justify-center hover:bg-gray-300 hover:text-black cursor-pointer shadow"><i className="fa fa-plus"></i></a>
          <a className="bg-white w-12 h-12 rounded-full text-black flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-200"><i className="fa fa-plus"></i></a>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="relative inline-block group">
          <button className="bg-black text-white px-6 py-3 hover:bg-gray-300 hover:text-black transition-colors cursor-pointer">
            Dropdown <i className="fa fa-caret-down ml-2"></i>
          </button>
          <div className="absolute top-full left-0 bg-white text-black min-w-[160px] shadow border border-gray-200 hidden group-hover:flex flex-col z-10 text-left">
            <a href="#" className="px-4 py-3 hover:bg-gray-200 transition-colors">Link 1</a>
            <a href="#" className="px-4 py-3 hover:bg-gray-200 transition-colors">Link 2</a>
            <a href="#" className="px-4 py-3 hover:bg-gray-200 transition-colors">Link 3</a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
      <h2 className="text-3xl font-normal text-center mb-6">Pagination</h2>
      <div className="text-center py-8">
        <div className="inline-flex flex-wrap items-center justify-center shadow">
          <a href="#" className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors border-r border-gray-200">&laquo;</a>
          <a href="#" className="px-4 py-2 bg-black text-white border-r border-gray-200">1</a>
          <a href="#" className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors border-r border-gray-200">2</a>
          <a href="#" className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors border-r border-gray-200">3</a>
          <a href="#" className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors border-r border-gray-200">4</a>
          <a href="#" className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors border-r border-gray-200">5</a>
          <a href="#" className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors">&raquo;</a>
        </div>
      </div>
      <br />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade {
          from {opacity: 0} 
          to {opacity: 1}
        }
        @keyframes zoom {
          from {transform: scale(0)} 
          to {transform: scale(1)}
        }
      `}} />
    </div>
  );
}
