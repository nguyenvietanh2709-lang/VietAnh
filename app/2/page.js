"use client";

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function Portfolio() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('ALL');

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <div className="bg-[#f1f1f1] text-gray-800 min-h-screen font-sans">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
        body { font-family: "Raleway", sans-serif; }
      `}} />

            <div className="max-w-[1600px] mx-auto bg-[#f1f1f1] relative">
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

                {/* !PAGE CONTENT! */}
                <div className="lg:ml-[300px] transition-all bg-[#f1f1f1]" style={{ minHeight: '100vh' }}>
                    <Header onToggleSidebar={toggleSidebar} activeFilter={activeFilter} onFilterChange={handleFilterChange} />
                    <PhotoGrid activeFilter={activeFilter} />
                    <About />
                    <Pricing />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    );
}