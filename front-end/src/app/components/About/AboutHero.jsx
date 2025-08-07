export default function AboutHero() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-16 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          India's Premier <br className="hidden sm:block" /> Chauffeur Partner for <br className="hidden sm:block" /> Corporates & Expats
        </h1>
        
        <p className="text-gray-700 font-medium text-sm sm:text-base">
          ENTREX delivers reliable, professional, and tech-enabled ground transportation services across India.
          Backed by premium vehicles, multilingual chauffeurs, and 24×7 operational support, we're the preferred
          choice for corporates, expats, and high-value travelers seeking more than just a ride.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-gradient-to-r from-red-400 to-orange-400 px-6 py-2 text-white rounded-full text-sm">
            Explore Our Services
          </button>
          <button className="border border-orange-500 text-white px-6 py-2 rounded-full bg-black text-sm">
            Talk to Our Team
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2">
        <img
          src="news.jpg"
          alt="Team"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
