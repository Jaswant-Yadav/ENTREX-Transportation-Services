"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Vitae congue eu consequet ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet amet justo donec enim diam porttitot lacus accumsan tortor posuere.",
  },
  {
    question: "What is your favorite Template from BRIX Templates?",
    answer: "", // No answer for this question
  },
  {
    question: "How do you clone a template from the Showcase?",
    answer: "", // No answer for this question
  },
  {
    question: "Why is BRIX Templates the best Webflow agency?",
    answer: "", // No answer for this question
  },
  {
    question: "When was Webflow officially launched?",
    answer: "", // No answer for this question
  },
  {
    question: "How do you integrate Jetboost with Webflow?",
    answer: "", // No answer for this question
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default to the first question open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the active index
  };

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkGray">Frequently Asked Questions (FAQs)</h2>
          <p className="text-gray-600 mt-2 text-xs">
            Got questions? We've got answers! Find solutions to common queries about our services, processes, and technology.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-wrap gap-8 justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-[48%]">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl p-5 cursor-pointer transition hover:shadow-sm"
                  onClick={() => toggleFAQ(idx)}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`text-md font-semibold text-left ${
                        idx === 0 ? "text-blue-500" : "text-darkGray"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-cyan">
                      {openIndex === idx || idx === 0 ? "−" : "+"}
                    </span>
                  </div>
                  {(idx === 0 || openIndex === idx) && faq.answer && (
                    <p className="text-gray-700 mt-3 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[48%]">
            <div className="space-y-6">
              {/* First two questions */}
              {faqs.slice(1, 3).map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl p-5 cursor-pointer transition hover:shadow-sm"
                  onClick={() => toggleFAQ(idx + 1)} // Adjust index for correct FAQ
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`text-md font-semibold text-right ${
                        openIndex === idx + 1 ? "text-blue-500" : "text-darkGray"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-cyan">
                      {openIndex === idx + 1 ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex === idx + 1 && faq.answer && (
                    <p className="text-gray-700 mt-3 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}

              {/* First question in the 3rd position with answer visible by default */}
              <div
                key="first-question-right"
                className="border border-gray-200 rounded-xl p-5 cursor-pointer transition hover:shadow-sm"
                onClick={() => toggleFAQ(0)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-semibold text-right text-blue-500">
                    {faqs[0].question}
                  </h3>
                  <span className="text-2xl text-cyan">
                    {openIndex === 0 ? "−" : "+"}
                  </span>
                </div>
                {openIndex === 0 && faqs[0].answer && (
                  <p className="text-gray-700 mt-3 text-sm">{faqs[0].answer}</p>
                )}
              </div>

              {/* Remaining questions */}
              {faqs.slice(3).map((faq, idx) => (
                <div
                  key={idx + 4} // Make the key unique to avoid clashes
                  className="border border-gray-200 rounded-xl p-5 cursor-pointer transition hover:shadow-sm"
                  onClick={() => toggleFAQ(idx + 3)} // Skip the first three questions
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`text-md font-semibold text-right ${
                        openIndex === idx + 3 ? "text-blue-500" : "text-darkGray"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-cyan">
                      {openIndex === idx + 3 ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex === idx + 3 && faq.answer && (
                    <p className="text-gray-700 mt-3 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
