export default function AboutStory() {
  return (
    <section id="story" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="firelogo.png"
            alt="Entrex Logo"
            className="w-64 sm:w-80 md:w-96 h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 text-sm sm:text-base font-semibold leading-relaxed">
            Founded in 2015 with a mission to transform business travel in India, ENTREX started 
            as a small operation in Chennai focused on consistent, premium chauffer service. 
            Over the years, we've evolved into a pan-India enterprise mobility partner, serving MNCs,
            diplomats, international consultants, and expats with personalized care and operational excellence.
            <br /><br />
            We don't just move people. We manage experiences — using technology,
            compliance, and hospitality to create journeys across cities and states.
          </p>
        </div>
      </div>
    </section>
  );
}
