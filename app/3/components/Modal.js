import React from "react";

export default function Modal({ modalOpen, setModalOpen }) {
  return (
    <div id="id01" className={`fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/50 ${modalOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white w-full sm:max-w-3xl mx-4 shadow-xl translate-y-[-20px] animate-[slideDown_0.4s_ease-out_forwards]">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideDown {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}} />
        <header className="bg-gray-200 text-black p-4 relative">
          <span 
            onClick={() => setModalOpen(false)} 
            className="absolute top-0 right-0 p-4 text-xl font-bold hover:bg-gray-300 cursor-pointer transition-colors"
          >
            &times;
          </span>
          <h4 className="text-2xl font-normal leading-tight mb-2">Oh snap! We just showed you a modal..</h4>
          <h5 className="text-lg">Because we can <i className="fa fa-smile-o"></i></h5>
        </header>
        <div className="p-4">
          <p className="mb-4">Cool huh? Ok, enough teasing around..</p>
          <p>Go to our <a className="bg-gray-200 px-4 py-2 hover:bg-gray-300 transition-colors inline-block text-black cursor-pointer" href="#">Tailwind Tutorial</a> to learn more!</p>
        </div>
        <footer className="bg-gray-200 text-black p-4">
          <p>Modal footer</p>
        </footer>
      </div>
    </div>
  );
}
