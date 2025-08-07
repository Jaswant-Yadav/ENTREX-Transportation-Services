'use client';

import React from "react";
import Navbar from "./Navbar";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center text-white pt-10" style={{ backgroundImage: "url('pickup.jpg')" }}>
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10 ">
        <Navbar />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 pr-20 pl-20">
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full max-w-7xl mt-15">
          {/* Left Section */}
          <div className="text-white md:w-2/3 space-y-6 pt-10">
          <img
                    src="car-icon.webp"
                    alt="logo"
                    className="w-20 h-16 mb-1" // Adjust the size of the logo
                  />
            <h1 className="text-lg md:text-5xl font-lightbold leading-tight">
              Premium Chauffeur<br />Services for every journey
            </h1>
            <p className="text-sm">
              From corporate travel to airport transfer. ENTREX ensure a safe, <br />
              punctual, and comfortable ride-- every time.
            </p>
            <button className="bg-gradient-to-r from-red-400 to-orange-400 px-6 py-1 text-white rounded-full ">
              Call Us Now
            </button>
            <div className="flex justify-between text-sm text-white mt-4 pr-50">
              <div>
                <h3 className="font-bold text-lg">Verified</h3>
                <p>Chauffeurs</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Real-time</h3>
                <p> Tracking</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">24x7 </h3>
                <p>Support</p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-gradient-to-r from-red-400 to-orange-400 p-6 rounded-xl shadow-lg md:w-1/3 h-100 text-white">
            <h2 className="text-2xl font-bold mb-4">Book Your Ride Instantly</h2>
            <HeroForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;