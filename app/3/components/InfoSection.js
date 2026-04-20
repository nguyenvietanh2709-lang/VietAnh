import React from "react";

export default function InfoSection() {
  return (
    <div className="p-4 lg:p-8">
      <hr className="my-8 border-gray-300" />
      <div className="text-center mb-6">
        <h2 className="text-3xl font-normal">Color Classes</h2>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/6 px-4 py-6 bg-red-500 text-white"><p>Red</p></div>
        <div className="w-full md:w-1/6 px-4 py-6 bg-blue-500 text-white"><p>Blue</p></div>
        <div className="w-full md:w-1/6 px-4 py-6 bg-slate-500 text-white"><p>Blue Grey</p></div>
        <div className="w-full md:w-1/6 px-4 py-6 bg-teal-500 text-white"><p>Teal</p></div>
        <div className="w-full md:w-1/6 px-4 py-6 bg-yellow-400 text-black"><p>Yellow</p></div>
        <div className="w-full md:w-1/6 px-4 py-6 bg-orange-500 text-white"><p>Orange</p></div>
      </div>

      <hr className="my-8 border-gray-300" />
      <div className="text-center mb-6">
        <h2 className="text-3xl font-normal">Built-In Responsiveness</h2>
        <p className="text-lg">Resize the page to see the effect!</p>
      </div>

      <div className="flex flex-wrap border border-gray-300 mb-6">
        <div className="w-full md:w-1/2 p-4 bg-blue-500 text-white border-b md:border-b-0 md:border-r border-gray-300 relative">
          <h5 className="text-xl mb-4">w3-half</h5>
          <p className="mb-2">The w3-half class uses half (50%) of the screen window.</p>
          <p className="mb-2">On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h5 className="text-xl">w3-half</h5>
        </div>
      </div>

      <div className="flex flex-wrap border border-gray-300 mb-6">
        <div className="w-full md:w-1/3 p-4 bg-green-500 text-white border-b md:border-b-0 md:border-r border-gray-300 relative">
          <h5 className="text-xl mb-4">w3-third</h5>
          <p className="mb-2">The w3-third class uses one third (33.33%) of the screen widow.</p>
          <p className="mb-2">On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
        </div>
        <div className="w-full md:w-1/3 p-4 md:border-r border-gray-300">
          <h5 className="text-xl mb-4">w3-third</h5>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h5 className="text-xl mb-4">w3-third</h5>
        </div>
      </div>

      <div className="flex flex-wrap border border-gray-300 mb-6">
        <div className="w-full md:w-1/4 p-4 bg-red-500 text-white border-b md:border-b-0 md:border-r border-gray-300 relative">
          <h5 className="text-xl mb-4">w3-quarter</h5>
          <p className="mb-2">The w3-quarter class uses one quarter (25%) of the screen window.</p>
          <p className="mb-2">On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
        </div>
        <div className="w-full md:w-1/4 p-4 md:border-r border-gray-300">
          <h5 className="text-xl">w3-quarter</h5>
        </div>
        <div className="w-full md:w-1/4 p-4 md:border-r border-gray-300">
          <h5 className="text-xl">w3-quarter</h5>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h5 className="text-xl">w3-quarter</h5>
        </div>
      </div>

      <div className="text-center mt-12 mb-6">
        <h2 className="text-3xl font-normal">Containers</h2>
        <p>Use containers to create headers, sections and footers.</p>
      </div>

      <header className="bg-slate-500 text-white p-4">
        <h2 className="text-3xl font-normal">Header</h2>
      </header>

      <div className="p-4 bg-white relative">
        <span onClick={(e) => e.target.parentElement.style.display = 'none'} className="absolute top-0 right-0 p-4 cursor-pointer hover:bg-gray-200 hover:text-black transition-colors text-xl">
          <i className="fa fa-remove"></i>
        </span>
        <h2 className="text-3xl font-normal mb-4">London</h2>
        <p className="mb-4">London is the capital city of England. It is the most populous city in the United Kingdom,
        with a metropolitan area of over 13 million inhabitants.</p>
        <p className="mb-4">Standing on the River Thames, London has been a major settlement for two millennia,
        its history going back to its founding by the Romans, who named it Londinium.</p>
        <p>By the way, you can add a close icon to all containers if you want the ability to hide them. Look to your right!</p>
      </div>

      <footer className="bg-slate-500 text-white p-4">
        <h5 className="text-xl mb-2">Footer</h5>
        <p className="opacity-70">Footer information goes here</p>
      </footer>

      <hr className="my-8 border-gray-300" />
      <div className="text-center mb-6">
        <h2 className="text-3xl font-normal">Color Themes</h2>
        <p>The color themes have been designed to work harmoniously with each other.</p>
      </div>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white shadow relative">
            <div className="bg-indigo-500 text-white p-4">
              <h3 className="text-2xl font-normal">Theme Indigo</h3>
            </div>
            <div className="p-4 border-b border-gray-300">
              <h3 className="text-2xl font-normal text-indigo-500">Movies 2014</h3>
            </div>
            <ul className="flex flex-col">
              <li className="p-4 border-b border-gray-300">
                <h3 className="text-xl font-normal mb-2">Frozen</h3>
                <p>The response to the animations was ridiculous</p>
              </li>
              <li className="p-4 border-b border-gray-300">
                <h3 className="text-xl font-normal mb-2">The Fault in Our Stars</h3>
                <p>Touching, gripping and genuinely well made</p>
              </li>
              <li className="p-4 border-b border-gray-300">
                <h3 className="text-xl font-normal mb-2">The Avengers</h3>
                <p>A huge success for Marvel and Disney</p>
              </li>
            </ul>
            <div className="bg-indigo-500 text-white p-4 text-lg text-right cursor-pointer hover:bg-indigo-600 transition-colors">
              <span>Next</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white shadow relative">
            <div className="bg-black text-white p-4">
              <h3 className="text-2xl font-normal">Theme</h3>
            </div>
            <div className="p-4 border-b border-gray-300">
              <h3 className="text-2xl font-normal text-black">Movies 2014</h3>
            </div>
            <ul className="flex flex-col">
              <li className="p-4 border-b border-gray-300">
                <h3 className="text-xl font-normal mb-2">Frozen</h3>
                <p>The response to the animations was ridiculous</p>
              </li>
              <li className="p-4 border-b border-gray-300">
                <h3 className="text-xl font-normal mb-2">The Fault in Our Stars</h3>
                <p>Touching, gripping and genuinely well made</p>
              </li>
              <li className="p-4 border-b border-gray-300">
                <h3 className="text-xl font-normal mb-2">The Avengers</h3>
                <p>A huge success for Marvel and Disney</p>
              </li>
            </ul>
            <div className="bg-black text-white p-4 text-lg text-right cursor-pointer hover:bg-gray-800 transition-colors">
              <span>Next</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 mb-6">
        <hr className="my-8 border-gray-300" />
        <h3 className="text-2xl font-normal">Paper-like Cards with Shadows</h3>
      </div>

      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
          <div className="bg-white shadow">
            <img src="https://www.w3schools.com/w3images/car.jpg" alt="Car" className="w-full" />
            <div className="p-4">
              <p>w3-card (shadow-sm)</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-md">
            <img src="https://www.w3schools.com/w3images/car.jpg" alt="Car" className="w-full" />
            <div className="p-4">
              <p>w3-card-4 (shadow-md)</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-lg">
            <img src="https://www.w3schools.com/w3images/car.jpg" alt="Car" className="w-full" />
            <div className="p-4">
              <p>w3-card-4 (shadow-lg)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
