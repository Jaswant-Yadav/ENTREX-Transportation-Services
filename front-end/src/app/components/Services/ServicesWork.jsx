import React from 'react';
import { FaClipboardCheck, FaUsers, FaBusAlt, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    icon: <FaClipboardCheck className="text-3xl text-[#f07f3c]" />,
    title: 'Requirement Mapping',
    description: 'We understand your workforce size, shifts, routes, and security requirements',
  },
  {
    icon: <FaUsers className="text-3xl text-[#f07f3c]" />,
    title: 'Development Plan',
    description: 'We prepare routing plans, driver assignment, and pickup/drop schedules using AI-based planning tools',
  },
  {
    icon: <FaBusAlt className="text-3xl text-[#f07f3c]" />,
    title: 'Live Execution',
    description: 'Vehicles are dispatched on time with real-time monitoring and backup protocols',
  },
  {
    icon: <FaChartLine className="text-3xl text-[#f07f3c]" />,
    title: 'Transparent Billing',
    description: 'Automated trip logs, easy reconciliation, and centralized invoicing.',
  },
];

const ServicesWork = () => {
  return (
    <section className="bg-[#f9f9f9] py-16" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-gray-600 mb-8 text-xs">
          Choose from a wide range of well-maintained vehicles tailored for employee transportation across all business sizes and shift types.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white shadow-md text-left rounded-lg p-6 hover:shadow-lg transition">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWork;
