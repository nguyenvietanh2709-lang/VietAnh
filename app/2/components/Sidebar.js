import React from 'react';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-30 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        id="mySidebar"
      >
        <div className="p-4 pt-8">
          <a href="#" onClick={(e) => { e.preventDefault(); onClose(); }} className="lg:hidden absolute top-4 right-4 text-4xl p-2 hover:bg-gray-200 text-gray-500 hover:text-black cursor-pointer" title="close menu">
            <i className="fa fa-remove"></i>
          </a>
          <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" className="w-[45%] rounded" alt="avatar" />
          <br /><br />
          <h4 className="text-xl font-bold tracking-wide">PORTFOLIO</h4>
          <p className="text-gray-500 mt-2">Template by W3.CSS</p>
        </div>
        
        <div className="flex flex-col mt-4">
          <a href="#portfolio" onClick={onClose} className="px-4 py-3 hover:bg-gray-200 text-teal-600 font-semibold"><i className="fa fa-th-large fa-fw mr-3"></i>PORTFOLIO</a> 
          <a href="#about" onClick={onClose} className="px-4 py-3 hover:bg-gray-200 font-semibold"><i className="fa fa-user fa-fw mr-3"></i>ABOUT</a> 
          <a href="#contact" onClick={onClose} className="px-4 py-3 hover:bg-gray-200 font-semibold"><i className="fa fa-envelope fa-fw mr-3"></i>CONTACT</a>
        </div>
        
        <div className="p-4 mt-8 text-xl flex gap-x-2 text-gray-600">
          <i className="fa fa-facebook-official hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-instagram hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-snapchat hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-pinterest-p hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-twitter hover:opacity-75 cursor-pointer"></i>
          <i className="fa fa-linkedin hover:opacity-75 cursor-pointer"></i>
        </div>
      </nav>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden" 
          onClick={onClose}
          title="close side menu"
          id="myOverlay"
        ></div>
      )}
    </>
  );
}
