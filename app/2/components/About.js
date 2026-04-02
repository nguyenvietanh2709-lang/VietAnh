import React, { useState } from 'react';

export default function About() {
  const [skills, setSkills] = useState({
    photography: 95,
    webDesign: 85,
    photoshop: 80
  });

  const randomizeSkills = () => {
    setSkills({
      photography: Math.floor(Math.random() * 101),
      webDesign: Math.floor(Math.random() * 101),
      photoshop: Math.floor(Math.random() * 101)
    });
  };

  return (
    <>
      {/* Images of Me */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 p-4 lg:p-8 py-4" id="about">
        <div>
          <img src="https://www.w3schools.com/w3images/avatar_g.jpg" alt="Me" className="w-full" />
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/me2.jpg" alt="Me" className="w-full" />
        </div>
      </div>

      <div className="p-4 lg:p-8 mb-8 text-gray-700">
        <h4 className="text-2xl font-bold mb-4">About Me</h4>
        <p className="mb-4 leading-relaxed">Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <hr className="my-6 border-gray-300" />

        <h4 className="text-xl font-bold mb-4">Technical Skills</h4>
        {/* Progress bars / Skills */}
        <p className="mb-1 uppercase tracking-wide text-sm font-semibold">Photography</p>
        <div className="bg-gray-300 mb-4 h-8 relative">
          <div className="bg-gray-600 text-white text-center flex items-center justify-center h-full absolute left-0 transition-all duration-500 ease-out" style={{ width: `${skills.photography}%` }}>{skills.photography}%</div>
        </div>

        <p className="mb-1 uppercase tracking-wide text-sm font-semibold">Web Design</p>
        <div className="bg-gray-300 mb-4 h-8 relative">
          <div className="bg-gray-600 text-white text-center flex items-center justify-center h-full absolute left-0 transition-all duration-500 ease-out" style={{ width: `${skills.webDesign}%` }}>{skills.webDesign}%</div>
        </div>

        <p className="mb-1 uppercase tracking-wide text-sm font-semibold">Photoshop</p>
        <div className="bg-gray-300 mb-4 h-8 relative">
          <div className="bg-gray-600 text-white text-center flex items-center justify-center h-full absolute left-0 transition-all duration-500 ease-out" style={{ width: `${skills.photoshop}%` }}>{skills.photoshop}%</div>
        </div>

        <p className="mt-6 mb-6">
          <button onClick={randomizeSkills} className="bg-gray-800 text-white hover:bg-gray-300 hover:text-black px-6 py-3 transition-colors cursor-pointer">
            <i className="fa fa-download mr-2"></i>Download Resume
          </button>
        </p>
        <hr className="my-6 border-gray-300" />
      </div>
    </>
  );
}
