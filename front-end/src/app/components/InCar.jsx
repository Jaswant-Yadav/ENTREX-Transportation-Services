import React from "react";

const amenities = [
  {
    label: "Water Bottle",
    svg: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M10 2h4v2h1v2h-6V4h1V2zM8 6h8v16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V6z" fill="#3B82F6"/>
      </svg>
    ),
  },
  {
    label: "Newspaper",
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" fill="#9CA3AF"/>
        <path d="M6 6h8v2H6V6zm0 4h12v2H6v-2zm0 4h12v2H6v-2z" fill="#F3F4F6"/>
      </svg>
    ),
  },
  {
    label: "Tissue Pouch",
    svg: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M4 12h16v4H4v-4zm2-2h12v-1l-2-3H8l-2 3v1z" fill="#F59E0B"/>
      </svg>
    ),
  },
  {
    label: "Cookies",
    svg: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" fill="#A16207"/>
        <circle cx="10" cy="10" r="1" fill="#FFF"/>
        <circle cx="14" cy="13" r="1" fill="#FFF"/>
      </svg>
    ),
  },
  {
    label: "Writing Slip & Pen",
    svg: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm3 3h12v12H6V6z" fill="#6B7280"/>
        <path d="M9 15l6-6" stroke="#FFF" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "Ice Box (Based on request)",
    svg: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="6" width="16" height="12" rx="2" fill="#93C5FD"/>
        <path d="M4 10h16" stroke="#1D4ED8" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "Fire Extinguisher Kit",
    svg: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M10 4h4v2h1v12h-6V6h1V4z" fill="#EF4444"/>
        <circle cx="12" cy="16" r="1.5" fill="#FFF"/>
      </svg>
    ),
  },
  {
    label: "Perfume",
    svg: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <rect x="8" y="8" width="8" height="10" rx="1" fill="#D946EF"/>
        <path d="M10 6h4v2h-4V6z" fill="#A21CAF"/>
      </svg>
    ),
  },
  {
    label: "Hand-Phone Charger",
    svg: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <rect x="9" y="4" width="6" height="14" rx="2" fill="#10B981"/>
        <path d="M12 2v2M12 18v2" stroke="#065F46" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "GPS Tracking",
    svg: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="6" fill="#6366F1"/>
        <path d="M12 6V3M12 21v-3M6 12H3M21 12h-3" stroke="#4338CA" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "Umbrella",
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6 2 6s4.48 4 10 4 10-4 10-4-4.48-4-10-4zm0 4v12a2 2 0 1 0 4 0" fill="#0EA5E9"/>
      </svg>
    ),
  },
  {
    label: "Torch Light",
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="10" y="4" width="4" height="16" fill="#F97316"/>
        <path d="M10 4l-1-2h6l-1 2h-4z" fill="#FB923C"/>
      </svg>
    ),
  },
  {
    label: "First Aid Kit",
    svg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="2" fill="#DC2626"/>
        <path d="M12 9v6M9 12h6" stroke="#FFF" strokeWidth="2"/>
      </svg>
    ),
  },
];

const InCar = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col items-center gap-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">In-Car Provision</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Every ENTREX ride comes with thoughtful in-car provisions to ensure
            your comfort, safety, and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              {item.svg}
              <span className="mt-2 text-sm font-medium text-gray-700 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InCar;
