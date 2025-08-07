import { FaMapMarkerAlt } from 'react-icons/fa';

const steps = [
  { year: '2017', description: 'ENTREX founded with a mission to redefine corporate transport services.' },
  { year: '2018', description: 'Recognized as one of the fastest-growing mobility startups in South India.' },
  { year: '2019', description: 'Registered as Entrex Logistics Pvt. Ltd. to scale nationwide operations.' },
  { year: '2020-21', description: 'Successfully navigated the COVID-19 pandemic, increasing client servicing amidst crisis.' },
  { year: '2022', description: 'Expanded to become a PAN India corporate transport solutions provider.' },
  { year: '2024', description: 'Established as a prime partner for enterprise clients, expanding to Tier 2 cities across India.' },
];

export default function OurJourney() {
  return (
    <section id="journey" className="bg-white py-16 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">ENTREX – Our Journey</h2>

      <div className="relative overflow-x-auto">
        <div className="min-w-[1000px] relative">
          {/* Zigzag SVG line */}
          <svg
            className="w-full h-64 md:h-80 lg:h-96 xl:h-[30rem]"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 0 150 
                 L 200 50 
                 L 350 150 
                 L 450 150 
                 L 600 50 
                 L 700 100 
                 L 850 50 
                 L 1000 80"
              fill="none"
              stroke="#f97316"
              strokeWidth="4"
            />
          </svg>

          {/* Stop points with labels */}
          <div className="absolute inset-0 flex justify-between items-center px-2 md:px-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center w-1/6">
                {/* Orange dot */}
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-500 mx-auto z-10 relative shadow-md"></div>

                {/* Year & Description */}
                <div
                  className={`absolute w-44 text-xs sm:text-sm bg-white shadow-lg p-3 rounded leading-relaxed ${
                    idx % 2 === 0 ? 'bottom-24' : 'top-24'
                  } left-1/2 -translate-x-1/2`}
                >
                  <div className="font-bold text-orange-500">{step.year}</div>
                  <div className="text-gray-600">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
