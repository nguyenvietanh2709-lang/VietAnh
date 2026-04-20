"use client";

import React, { useState } from "react";

export default function FormDataSection() {
  const [progress, setProgress] = useState(5);

  function move() {
    let elemWidth = 5;
    const id = setInterval(() => {
      if (elemWidth >= 100) {
        clearInterval(id);
      } else {
        elemWidth++;
        setProgress(elemWidth);
      }
    }, 10);
  }

  return (
    <div className="p-4 lg:p-8">
      <hr className="my-8 border-gray-300" />
      <h2 className="text-3xl font-normal text-center mb-6">Forms and Lists</h2>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <form className="p-4 shadow-md bg-white border border-gray-200" onSubmit={e => e.preventDefault()}>
            <h2 className="text-3xl font-normal mb-8">Input Form</h2>
            
            <div className="mb-6">
              <input className="w-full border-b border-gray-400 py-2 outline-none focus:border-black transition-colors bg-transparent" type="text" required />
              <label className="text-gray-500 block mt-2 text-sm">Name</label>
            </div>
            
            <div className="mb-6">
              <input className="w-full border-b border-gray-400 py-2 outline-none focus:border-black transition-colors bg-transparent" type="text" required />
              <label className="text-gray-500 block mt-2 text-sm">Email</label>
            </div>
            
            <div className="mb-8">
              <input className="w-full border-b border-gray-400 py-2 outline-none focus:border-black transition-colors bg-transparent" type="text" required />
              <label className="text-gray-500 block mt-2 text-sm">Subject</label>
            </div>

            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/2 px-2">
                <div className="mb-4 flex items-center">
                  <input id="milk" className="w-6 h-6 mr-3 cursor-pointer disabled:cursor-not-allowed accent-black" type="checkbox" defaultChecked />
                  <label htmlFor="milk" className="cursor-pointer">Milk</label>
                </div>
                <div className="mb-4 flex items-center">
                  <input id="sugar" className="w-6 h-6 mr-3 cursor-pointer disabled:cursor-not-allowed accent-black" type="checkbox" />
                  <label htmlFor="sugar" className="cursor-pointer">Sugar</label>
                </div>
                <div className="mb-4 flex items-center">
                  <input id="lemon" className="w-6 h-6 mr-3 cursor-pointer disabled:cursor-not-allowed text-gray-300" type="checkbox" disabled />
                  <label htmlFor="lemon" className="text-gray-400 cursor-not-allowed">Lemon (Disabled)</label>
                </div>
              </div>

              <div className="w-full sm:w-1/2 px-2">
                <div className="mb-4 flex items-center">
                  <input id="male" className="w-6 h-6 mr-3 cursor-pointer disabled:cursor-not-allowed accent-black" type="radio" name="gender" value="male" defaultChecked />
                  <label htmlFor="male" className="cursor-pointer">Male</label>
                </div>
                <div className="mb-4 flex items-center">
                  <input id="female" className="w-6 h-6 mr-3 cursor-pointer disabled:cursor-not-allowed accent-black" type="radio" name="gender" value="female" />
                  <label htmlFor="female" className="cursor-pointer">Female</label>
                </div>
                <div className="mb-4 flex items-center">
                  <input id="unknown" className="w-6 h-6 mr-3 cursor-pointer disabled:cursor-not-allowed" type="radio" name="gender" value="" disabled />
                  <label htmlFor="unknown" className="text-gray-400 cursor-not-allowed">Don't know (Disabled)</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="shadow-md bg-white border border-gray-200">
            <h2 className="text-3xl font-normal p-4">Lists</h2>
            <ul className="flex flex-col bg-white">
              <li className="p-4 border-t border-gray-200">Jill</li>
              <li className="p-4 border-t border-gray-200">Eve</li>
              <li className="p-4 border-t border-gray-200">Adam</li>
            </ul>
          </div>
          
          <br />
          
          <ul className="flex flex-col bg-white border border-gray-200 shadow-md">
            <li className="p-4 border-b border-gray-200 bg-black text-white">Jill</li>
            <li className="p-4 border-b border-gray-200 hover:bg-gray-200 cursor-pointer">Eve</li>
            <li className="p-4 border-b border-gray-200 hover:bg-gray-200 cursor-pointer">Adam</li>
            <li className="p-4 hover:bg-gray-200 cursor-pointer">Steve</li>
          </ul>
        </div>
      </div>
      
      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-normal text-center mb-6">Progress Bars</h2>
      <div>
        <div className="bg-gray-300 mb-6">
          <div 
            className="bg-black text-white text-center py-2 transition-all duration-100 ease-linear" 
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
        <button 
          className="bg-black text-white hover:bg-gray-300 hover:text-black px-6 py-2 transition-colors cursor-pointer" 
          onClick={move}
        >
          Click Me
        </button>
      </div>
      
      <hr className="my-8 border-gray-300" />
    </div>
  );
}
