import React from "react";
import {
  FaUserTie,
  FaIndustry,
  FaUserNurse,
  FaUserGraduate,
  FaBroom,
  FaTruck,
  FaUsers,
  FaWarehouse,
  FaPeopleCarry,
  FaHotel,
} from "react-icons/fa";

const serveList = [
  { icon: <FaUserTie size={30} />, title: "IT Companies" },
  { icon: <FaUsers size={30} />, title: "BPO & Call Centres" },
  { icon: <FaUserNurse size={30} />, title: "Hospitals & Clinics" },
  { icon: <FaBroom size={30} />, title: "Manufacturing Units" },
  { icon: <FaUserGraduate size={30} />, title: "Colleges & Universities" },
  { icon: <FaTruck size={30} />, title: "Business Park" },
  { icon: <FaIndustry size={30} />, title: "Shared Workspaces" },
  { icon: <FaWarehouse size={30} />, title: "Hotels & Hospitality" },
  { icon: <FaPeopleCarry size={30} />, title: "Warehousing & Logistics" },
  { icon: <FaHotel size={30} />, title: "Government & PSU" },
];

const ServicesServe = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">
        Who We Serve
      </h2>
      <p className="text-sm sm:text-base font-medium text-center mb-10 text-gray-600">
        Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {serveList.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
          >
            <div className="bg-orange-100 text-orange-600 rounded-full p-4 mb-4">
              {item.icon}
            </div>
            <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-red-400 to-orange-400 px-6 py-3 text-sm sm:text-base text-white rounded-full hover:opacity-90 transition">
          Book Your Journey Now
        </button>
      </div>
    </section>
  );
};

export default ServicesServe;
