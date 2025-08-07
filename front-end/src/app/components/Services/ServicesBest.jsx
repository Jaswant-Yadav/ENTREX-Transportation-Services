import React from 'react';
import {
  FaCarSide,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaClock
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCarSide size={24} />,
    title: "Hatchbacks & Sedans",
    description: "Ideal for individual pickups, senior staff, or compact city routes."
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "MUVs & SUVs",
    description: "Spacious, comfortable, and perfect for small teams or mid-range commutes."
  },
  {
    icon: <FaMapMarkedAlt size={24} />,
    title: "Mini & Large Tempo Travelers",
    description: "Best suited for shift-based staff transport and high-volume deployment."
  },
  {
    icon: <FaClock size={24} />,
    title: "Luxury Air-Conditioned Coaches (on request)",
    description: "Premium option for corporate events, long-distance staff movement, or executive group travel."
  }
];

const ServicesBest = () => {
  return (
    <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Why Your Website Is Your Best Salesperson
        </h1>
        <p className="text-sm sm:text-base font-medium text-gray-600 max-w-2xl mx-auto">
          Choose from a wide range of well-maintained vehicles tailored for employee transportation across all business sizes and shift types.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="car.avif"
            alt="Car"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
          />
        </div>

        {/* Right Side: Services */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="text-primary mt-1">
                  {service.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="font-semibold text-base text-gray-800">
                    {service.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBest;
