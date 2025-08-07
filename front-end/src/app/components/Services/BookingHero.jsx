import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import ServiceForm from "./ServiceForm";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-10 py-10 bg-[url('/your-bg-image.jpg')]">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 bg-white/90 p-6 rounded-lg shadow-md">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-4xl text-blue-500" />
          </div>

          <p className="uppercase text-sm font-semibold text-red-600 tracking-wider">
            Employee Transport Services
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Seamless, Safe, and Smart Commute Solutions for <br className="hidden sm:block" /> Your Workforce
          </h1>

          <p className="font-medium text-sm md:text-base text-gray-700">
            ENTREX delivers tech-enabled employee transport solutions that ensure your workforce arrives on time — safely, reliably, and at scale.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:max-w-md bg-white shadow-lg p-6 border border-orange-500 rounded-xl space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-bold text-red-500">Book Your Ride Instantly</h3>
          </div>
          <ServiceForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
