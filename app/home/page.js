import React from 'react';
import Navigator from '../component/Navigator';
import Header from '../component/Header';
import Projects from '../component/Projects';
import About from '../component/About';
import Contact from '../component/Contact'; 

export default function Home() {
  return (
    <>
      
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

      <div>
        {/* Navbar */}
        <Navigator />

        {/* Header */}
        <Header />

        {/* Content */}
        <main className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
          {/* Projects */}
          <Projects />

          {/* About */}
          <About />

          {/* Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <footer className="w3-center w3-black w3-padding-16">
          <p>Powered by w3.css</p>
        </footer>
      </div>
    </>
  );
}