import React from "react";
import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaClock,
  FaUserTie,
  FaBusAlt,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={24} className="text-orange-500" />,
    title: "Real-Time GPS Tracking",
    description:
      "Monitor routes, driver behavior, and vehicle status through our centralized tracking system.",
  },
  {
    icon: <FaMapMarkedAlt size={24} className="text-orange-500" />,
    title: "Dynamic Shift Management",
    description:
      "Auto-generated rosters based on employee shift timings, integrated with your HRMS or scheduling platform.",
  },
  {
    icon: <FaClock size={24} className="text-orange-500" />,
    title: "Verified Chauffeurs",
    description:
      "All drivers undergo background checks, safety training, and etiquette certification.",
  },
  {
    icon: <FaUserTie size={24} className="text-orange-500" />,
    title: "PAN India Coverage",
    description:
      "Operations across Tier 1, Tier 2, and emerging metro regions—no location is out of reach.",
  },
  {
    icon: <FaBusAlt size={24} className="text-orange-500" />,
    title: "24×7 Control Room",
    description:
      "Round-the-clock support for routing, rescheduling, or emergency handling.",
  },
  {
    icon: <FaMobileAlt size={24} className="text-orange-500" />,
    title: "Data-Driven Reporting",
    description:
      "MIS reports, trip logs, billing summaries, and audit trails—all available via dashboard or export.",
  },
];

const ServiceWhyEntrex = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20" id="why-entrex">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Section: Features */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow-md shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/news.jpg"
            alt="Why Entrex Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceWhyEntrex;
