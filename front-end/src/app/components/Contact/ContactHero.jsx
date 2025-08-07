// components/ContactHero.jsx
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactHero() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto relative">
        {/* Contact Content */}
        <div className="w-full">
          <div className="relative">
            {/* Heading Section */}
            <div className="mb-10 pr-12">
              <h2 className="text-sm text-gray-500 uppercase">Get Started</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-2 leading-snug sm:leading-tight">
                Get in touch with us. <br className="hidden sm:block" />
                We're here to assist you.
              </h1>
            </div>

            {/* Social Icons on large screens */}
            <div className="hidden lg:flex flex-col items-center space-y-6 absolute right-0 top-0">
              <FaFacebookF className="text-gray-600 hover:text-blue-500 text-xl cursor-pointer" />
              <FaInstagram className="text-gray-600 hover:text-pink-500 text-xl cursor-pointer" />
              <FaTwitter className="text-gray-600 hover:text-blue-400 text-xl cursor-pointer" />
            </div>
          </div>

          {/* Contact Form Section */}
          <ContactForm />
        </div>

        {/* Social Icons for small screens (below form) */}
        <div className="flex justify-center space-x-6 mt-10 lg:hidden">
          <FaFacebookF className="text-gray-600 hover:text-blue-500 text-xl cursor-pointer" />
          <FaInstagram className="text-gray-600 hover:text-pink-500 text-xl cursor-pointer" />
          <FaTwitter className="text-gray-600 hover:text-blue-400 text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
