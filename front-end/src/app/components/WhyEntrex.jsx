import React from 'react';

const WhyEntrex = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col items-center gap-10">
        {/* Text Section */}
        <div className="text-center pl-40 pr-40">
          <h2 className="text-4xl font-bold mb-6">
            Why ENTREX Is the Preferred Partner for Premium Tourist Travel in India
          </h2>
          <p className="text-gray-600 mb-6 text-xs">
            Whether you're an international traveler, a corporate guest, or an expert exploring india, ENTREX delivers
            a seamless journey with professional chauffers, luxury vehicles, and end-to-end travel solutions.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[60%]">
          <img
            src="image.png"
            alt="Why Entrex"
            className="w-full rounded-xl shadow-lg mb-6"
          />
        </div>

        {/* List Section */}
        <ul className="flex flex-wrap justify-center space-x-4 text-gray-700 text-xs mb-1">
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            <span className="text-orange-500">Multilingual</span> Chauffeurs
          </li>
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            Entrex <span className="text-red-500">Client kit</span> for every trip
          </li>
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            <span className="text-orange-500">100%</span> Statutory <span className="text-orange-500">Compliance ensured</span>
          </li>
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            <span className="text-red-500">Luxury</span> and Well maintained vehicles
          </li>
        </ul>

        <ul className="flex flex-wrap justify-center space-x-4 text-gray-700 text-xs">
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            Vehicles with average age of <span className="text-orange-500">less than 3 years</span>
          </li>
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            <span className="text-red-500">Best Pricing</span> among the <span className="text-red-500">Premium segment</span> service providers
          </li>
        </ul>

        <ul className="flex flex-wrap justify-center space-x-4 text-gray-700 text-xs">
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            <span className="text-red-500">Zero Payment</span> commitment in case of any flaw in the trip service
          </li>
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            <span className="text-red-500">Safety & Security</span> ensured through high-end GPS based solutions and
            Remote vehicle control
          </li>
        </ul>

        <ul className="flex flex-wrap justify-center space-x-4 text-gray-700 text-xs">
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            Packaged Solutioning covering Accommodation, Food, Sight-seeing. Tourist Guide for
            <span className="text-orange-500">Expat/Executive Tourism</span>
          </li>
        </ul>

        <ul className="flex flex-wrap justify-center space-x-4 text-gray-700 text-xs">
          <li className="border-2 border-dotted rounded-lg p-2 text-center">
            For long stay Clients, <span className="text-orange-500">dedicated Chauffer & Vehicle</span> for undisturbed service
          </li>
        </ul>

      </div>
    </section>
  );
};

export default WhyEntrex;
