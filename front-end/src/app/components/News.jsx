import React from "react";

const News = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-24 bg-[#F9F8F6]">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold text-darkGray">News & Update</h2> {/* Smaller text size for header */}
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "/news.jpg",
              title: "Entrex expands across 5 new cities",
              description:
                "With our continued growth, we're bringing our employee transport solutions to 5 more Indian cities.",
              tags: "BUSINESS",
            },
            {
              image: "/news1.jpg",
              title: "Awarded 'Best Workplace Mobility Solution'",
              description:
                "Entrex is recognized by IndiaTech Awards for its reliable and scalable transport infrastructure.",
              tags: "MARKETING",
            },
            {
              image: "/news2.jpg",
              title: "How Entrex ensures 24x7 safe rides",
              description:
                "Explore how our system guarantees on-time, secure, and seamless rides for enterprises round the clock.",
              tags: "ANALYTICS",
            },
          ].map((news, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition"
            >
              {/* Render the image here */}
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover rounded-t-lg" // Smaller image size
              />
              <h3 className="text-lg font-semibold text-darkGray">{news.title}</h3> {/* Smaller text for title */}
              <p className="text-gray-700 text-sm">{news.description}</p> {/* Smaller text for description */}

              {/* Tags and Date Section */}
              <div className="flex justify-between items-center mt-auto">
                {/* Tags */}
                <div
                  className={`px-2 py-1 rounded-full text-white ${
                    news.tags === "BUSINESS"
                      ? "bg-blue-500"
                      : news.tags === "MARKETING"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {news.tags}
                </div>

                {/* Date */}
                <span className="text-gray-400 text-xs">Oct 3 - 7 min read</span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Link */}
        <div className="flex justify-center mt-2">
          <a
            href="#"
            className="text-blue-500 font-semibold text-sm hover:underline px-4 py-2"
          >
            View More articles →
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
