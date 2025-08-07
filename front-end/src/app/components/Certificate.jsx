import React from "react";

const certificates = [
  {
    title: "Affiliations: IATO - Indian Association of Tour Operators",
    description:
      "We offer GPS-enabled rides so you-and your loved ones-can track your journey with full transparency",
    img: "/ITTA-logo.png",
  },
  {
    img: "/certificate.png",
  },
  {
    title: "Affiliations: IATO - Indian Association of Tour Operators",
    description:
      "We offer GPS-enabled rides so you-and your loved ones-can track your journey with full transparency",
    img: "/IATO.png",
  },
];

const Certificate = () => {
  return (
    <div className="bg-[#f9fafb] py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={item.img}
                alt={item.title || `certificate-${idx}`}
                className="w-full max-w-[250px] h-auto object-contain mb-3"
              />
              {item.title && (
                <p className="text-sm font-medium text-gray-700 text-center">
                  <strong>{item.title}</strong>
                </p>
              )}
              {item.description && (
                <p className="text-xs font-medium text-gray-600 text-center">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
