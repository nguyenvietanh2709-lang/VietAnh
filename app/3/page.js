"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Modal from "./components/Modal";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import DataTable from "./components/DataTable";
import FormDataSection from "./components/FormDataSection";
import Slideshow from "./components/Slideshow";
import MiscUISection from "./components/MiscUISection";
import Footer from "./components/Footer";

export default function TemplatePage3() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="font-sans text-[#000] leading-[1.5]">
      {/* FontAwesome for Icons since the template relies heavily on it */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />

      {/* Global generic styles like Roboto or similar can be inherited but standard Tailwind sans is fine */}
      
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Header setSidebarOpen={setSidebarOpen} setModalOpen={setModalOpen} />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <HeroSection />
      <InfoSection />
      
      <DataTable />
      
      <FormDataSection />
      <Slideshow />
      <MiscUISection />
      
      <Footer />
    </div>
  );
}
