import { FaUserTie, FaPlaneDeparture, FaBusAlt, FaGlobeAsia, FaFileInvoice, FaMobileAlt } from "react-icons/fa";

const offers = [
  {
    title: "Executive Chauffeur Services",
    desc: "Discreet, professional chauffeurs for directors, VIP, and senior leadership.",
    icon: <FaUserTie className="text-2xl text-blue-600" />
  },
  {
    title: "Airport Transfers",
    desc: "Punctual pickups and drop-offs with live flight tracking and zero waiting time.",
    icon: <FaPlaneDeparture className="text-2xl text-yellow-600" />
  },
  {
    title: "Employee Commute Programs",
    desc: "Safe, app-tracked transportation for staff with route optimization and rostering.",
    icon: <FaBusAlt className="text-2xl text-orange-600" />
  },
  {
    title: "Expat & Guest Handling",
    desc: "Hospitality-trained chauffeurs and multilingual support for global visitors and delegations.",
    icon: <FaGlobeAsia className="text-2xl text-purple-600" />
  },
  {
    title: "Centralized Billing & MIS Reports",
    desc: "Transparent invoicing with detailed ride history, analytics, and corporate summaries.",
    icon: <FaFileInvoice className="text-2xl text-cyan-600" />
  },
  {
    title: "App-Based Booking & Trip Management",
    desc: "Real-time tracking, instant booking, and secure ride monitoring via our digital platform.",
    icon: <FaMobileAlt className="text-2xl text-orange-600" />
  },
];

export default function ContactOffer() {
  return (
    <section className="p-8 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2">What We Offer</h2>
      <p className="text-sm text-gray-500 mb-8 font-semibold">
        Our services are designed to simplify business mobility while delivering consistent, comfortable, and compliant ground transportation.
      </p>
      <div className="grid sm:grid-cols-3 gap-6">
        {offers.map((item, i) => (
          <div key={i} className="text-left flex flex-col items-left gap-2 px-4">
            <div className="w-12 h-12 flex items-center justify-center rounded bg-gray-100 shadow-md">
              {item.icon}
            </div>
            <h3 className="font-bold text-sm mt-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
