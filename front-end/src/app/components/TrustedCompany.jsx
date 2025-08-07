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

const TrustedCompanies = () => {
  const topRow = companies.slice(0, 5);
  const bottomRow = companies.slice(5);

  return (
    <section className="py-16 bg-white text-center px-4 sm:px-6 lg:px-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
        Trusted by 1500+ popular companies
      </h2>
      <p className="text-gray-600 mb-10 text-sm sm:text-base pt-3 max-w-2xl mx-auto">
        Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
      </p>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.name}
            className="h-10 sm:h-12 grayscale hover:grayscale-0 transition duration-300 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
