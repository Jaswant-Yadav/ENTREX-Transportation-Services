import React from 'react';

const companies = [
  { name: 'Google', logo: '/logos/google.WEBP' },
  { name: 'Creative Market', logo: '/logos/creative-market.png' },
  { name: 'Airbnb', logo: '/logos/airbnb.png' },
  { name: 'Shopify', logo: '/logos/shopify.png' },
  { name: 'Amazon', logo: '/logos/amazon.webp' },
  { name: 'Dropbox', logo: '/logos/dropbox.png' },
  { name: 'Spotify', logo: '/logos/spotify.png' },
  { name: 'Asana', logo: '/logos/asana.webp' },
  { name: 'Deliveroo', logo: '/logos/deliveroo.png' },
  { name: 'Nissan', logo: '/logos/NISAAN.png' },
];

const ClientTrust = () => {
  return (
    <section className="py-16 bg-white text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
        Trusted by 1500+ popular <br className="hidden sm:block" /> companies
      </h2>

      <p className="text-gray-600 mt-3 mb-10 text-sm md:text-base max-w-2xl mx-auto">
        Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
        {companies.map((company, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={company.logo}
              alt={company.name}
              className="h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTrust;
