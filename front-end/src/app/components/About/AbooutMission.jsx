
export default function AboutMission() {
  return (
    <section id="vision" className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Vision */}
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">Our Vision</h3>
          <p className="text-gray-600 text-sm">
            To become the most trusted and technologically advanced ground mobility partner for corporates and expats.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="border border-gray-300 text-sm px-3 py-1 rounded-lg text-gray-600">
              Setting new standards in service
            </span>
            <span className="border border-gray-300 text-sm px-3 py-1 rounded-lg text-gray-600">
              Expanding with smart, scalable systems
            </span>
            <span className="border border-gray-300 text-sm px-3 py-1 rounded-lg text-gray-600">
              Earning trust through consistency
            </span>
          </div>
        </div>

        {/* Mission */}
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">Our Mission</h3>
          <p className="text-gray-600 text-sm">
            To deliver consistent, secure, and high-quality chauffeur-driven experiences through:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="border border-gray-300 text-sm px-3 py-1 rounded-lg text-gray-600">
              Verified professionals
            </span>
            <span className="border border-gray-300 text-sm px-3 py-1 rounded-lg text-gray-600">
              A modern, compliant fleet
            </span>
            <span className="border border-gray-300 text-sm px-3 py-1 rounded-lg text-gray-600">
              A technology-first approach to mobility, safety, and support
            </span>
          </div>
        </div>

        {/* Core Values */}
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2 text-orange-500">Our Core Values</h3>
          <p className="text-gray-600 text-sm">
            We operate with principles that drive excellence in every journey.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="border border-gray-300 text-sm px-3 py-1 rounded-lg text-gray-600">
              Lead with integrity and professionalism
            </span>
            <span className="border border-gray-300 text-sm px-3 py-1 rounded-lg text-gray-600">
              Prioritize safety, transparency, and reliability
            </span>
            <span className="border border-gray-300 text-sm px-3 py-1 rounded-lg text-gray-600">
              Embrace innovation to improve every ride
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
