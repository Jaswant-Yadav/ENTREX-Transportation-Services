export default function AboutJoinTeam() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
        
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Join our team
          </h2>
        </div>

        <div>
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
            We believe it takes great people to make a great product. That's why we hire
            not only the perfect professional fits, but people who embody our company values.
          </p>
          <a
            href="#"
            className="inline-block text-sky-500 hover:text-sky-600 font-semibold transition duration-300"
          >
            Explore integrations →
          </a>
        </div>
      </div>
    </section>
  );
}
