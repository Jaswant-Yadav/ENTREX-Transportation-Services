import React from "react";

const services = [
  {
    id: 1,
    image: "news.jpg",
    logo: "graph.webp",
    title: "Employee Commute Solutions",
    description:
      "Daily transportation for corporate staff with fixed routes, real-time tracking, and punctual pickups.",
    large: true,
  },
  {
    id: 2,
    image: "chief.jpg",
    logo: "graph.webp",
    title: "Executive chauffeur Service",
    description:
      "Suited, trained chauffeur with luxury vehicles for directors, clients, and VIP executives.",
  },
  {
    id: 3,
    image: "event.webp",
    logo: "graph.webp",
    title: "Event & Conference Travel",
    description:
      "Coordinated fleet for business meetings, offsites, seminars, and corporate gatherings-managed end-to-end",
  },
  {
    id: 4,
    image: "airport.webp",
    logo: "graph.webp",
    title: "Airport Transfer",
    description:
      "Timely drop-offs and pickups for your team and guests from all major airports with live flight monitoring",
  },
  {
    id: 5,
    image: "desk.jpg",
    logo: "graph.webp",
    title: "Transport Desk Management",
    description:
      "On-demand ride management with 24*7 support, live dashboards, and centralized control from our app or portal",
  },
];

const OurServices = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Premium travel solutions tailored for businesses and individuals across India.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-12 text-xs sm:text-sm">
        <div className="rounded-2xl bg-orange-400 text-orange-800 px-6 py-2 font-semibold shadow text-center w-fit">
          Corporate Solutions
        </div>
        <div className="rounded-2xl bg-gray-100 text-gray-800 px-6 py-2 font-semibold shadow text-center w-fit">
          Personal/Retail Rides
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-white shadow-lg rounded-xl overflow-hidden relative ${
              service.large ? "lg:col-span-8 sm:col-span-2 col-span-1" : "lg:col-span-4 sm:col-span-1"
            }`}
          >
            <div className="relative h-64 sm:h-72 lg:h-80">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
              />
              <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black via-transparent to-transparent rounded-b-xl">
                <div className="flex flex-col items-start gap-2 text-white">
                  <img
                    src={service.logo}
                    alt="logo"
                    className="w-6 h-6 mb-1"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-tight">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
