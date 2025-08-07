import React from "react";

const features = [
  {
    id: 1,
    title: "🥇 Premium Chauffeurs",
    description:
      "All our drivers are handpicked, background-verified, professionally dressed, and trained for top-tier customer service.",
  },
  {
    id: 2,
    title: "💲 Transparent Pricing",
    description:
      "No hidden charges. Transparent fare structure with real-time billing through our app.",
  },
  {
    id: 3,
    title: "📍 Real-Time Tracking",
    description:
      "We offer GPS-enabled rides so you and your loved ones can track your journey with full transparency.",
  },
  {
    id: 4,
    title: "⏰ 24/7 Dedicated Support",
    description:
      "Our operations team is available around the clock to assist with bookings, changes, or emergencies.",
  },
  {
    id: 5,
    title: "⭐ Well-Maintained Vehicles",
    description:
      "Our fleet is serviced regularly, sanitized daily, and equipped with modern amenities for a smooth and safe ride.",
  },
  {
    id: 6,
    title: "🏅 Punctual & Reliable",
    description:
      "Time is valuable. Our chauffeurs arrive ahead of schedule and follow optimized routes for timely arrivals.",
  },
];

const ServiceDetails = () => {
  return (
    <div className="w-full px-4 py-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Why ENTREX?
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm">
          Trusted by hundreds of travelers and corporates across India for a premium ride experience.
        </p>
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 relative max-w-6xl mx-auto">
        {/* Left Features */}
        <div className="flex flex-col gap-6 lg:absolute left-0 top-1/2 -translate-y-1/2 z-10">
          {features.slice(0, 3).map((feature) => (
            <div key={feature.id} className="max-w-[260px] text-left">
              <h4 className="text-sm font-semibold mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative z-20 my-8 lg:my-0">
          <img
            src="car.avif"
            alt="Car"
            className="w-[250px] h-[180px] sm:w-[300px] sm:h-[220px] object-contain mx-auto"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-6 lg:absolute right-0 top-1/2 -translate-y-1/2 z-10 text-right">
          {features.slice(3, 6).map((feature) => (
            <div key={feature.id} className="max-w-[260px] ml-auto">
              <h4 className="text-sm font-semibold mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack layout on small screens */}
      <div className="block lg:hidden mt-10 space-y-6">
        {features.map((feature) => (
          <div key={feature.id} className="text-center max-w-md mx-auto">
            <h4 className="text-sm font-semibold mb-1">{feature.title}</h4>
            <p className="text-xs text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
