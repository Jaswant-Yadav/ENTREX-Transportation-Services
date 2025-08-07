import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Ramesh Iyer',
    position: 'Cricket Enthusiast, Mumbai',
    image: 'client1.avif',
    review:
      '"Reliable, courteous, and always on time. ENTREX is more than a transport provider--they are our mobility partner."',
  },
  {
    id: 2,
    name: 'Sneha Pillai',
    position: 'Fitness Coach, Bangalore',
    image: 'client2.avif',
    review:
      '"As an expat, I felt completely at ease with ENTREX. Every ride was smooth, safe , and incredibly professional."',
  },
  {
    id: 3,
    name: 'Ayaan Khan',
    position: 'School Football Coach, Delhi',
    image: 'client3.jpeg',
    review:
      '"Best football I have used in a while. My entire team now orders from here -- reliable and affordable."',
  },
];

const ClientSay = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="bg-gradient-to-r from-red-400 to-orange-400 text-xs text-white rounded-full text-center px-4 py-1 w-fit mx-auto mb-4">
          TESTIMONIALS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col relative"
            >
              {/* Star Ratings */}
              <div className="flex mb-4 text-orange-500">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={16} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-20 leading-relaxed text-sm sm:text-base">
                {review.review}
              </p>

              {/* Client Info */}
              <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
