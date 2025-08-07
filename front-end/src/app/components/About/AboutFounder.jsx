// components/Founders.jsx
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Founders() {
  return (
    <section id="founders" className="bg-white py-16 px-4 sm:px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Meet the Founders</h2>
      <p className="text-sm sm:text-base mb-10 font-semibold text-gray-600">
        Vision-Driven. Execution-Focused.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Founder 1 */}
        <div className="flex flex-col items-center text-center px-4">
          <div className="bg-yellow-400 w-32 h-32 rounded-full mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src="client3.jpeg" 
              alt="Mugundhan Sankar" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">Mugundhan Sankar</h3>
          <p className="text-gray-600 text-sm sm:text-base">Founder & Managing Director</p>
          <p className="mt-3 text-gray-700 text-sm sm:text-base max-w-md">
            With 15+ years in logistics and operations, Mugundhan built ENTREX to redefine Indian ground transport with global standards and Indian values. His vision continues to guide the company's expansion and operational discipline.
          </p>
          <div className="mt-4 flex space-x-6">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-blue-700 text-xl hover:text-blue-500 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-blue-500 text-xl hover:text-blue-300 transition" />
            </a>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="flex flex-col items-center text-center px-4">
          <div className="bg-red-400 w-32 h-32 rounded-full mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src="client1.avif" 
              alt="Balaji A" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">Balaji A</h3>
          <p className="text-gray-600 text-sm sm:text-base">Director - Strategy & Partnerships</p>
          <p className="mt-3 text-gray-700 text-sm sm:text-base max-w-md">
            Focused on client growth and digital transformation, Balaji leads ENTREX's enterprise engagements, tech roadmap, and innovation-driven service model.
          </p>
          <div className="mt-4 flex space-x-6">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-blue-700 text-xl hover:text-blue-500 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-blue-500 text-xl hover:text-blue-300 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
