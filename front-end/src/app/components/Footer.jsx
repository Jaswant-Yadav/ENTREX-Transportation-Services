import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-16 pb-6 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="logo" className="h-10 mb-4" />
            <p className="text-sm text-gray-600">
              We are one of the leading Travel operators in South India with our registered office
              at Madipakkam, Chennai. We serve leading corporate clients in Chennai and Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Compliance Control</Link></li>
              <li><Link href="#">Security Control</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tours</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="#">Sales Software</Link></li>
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Privacy and Security</Link></li>
              <li><Link href="#">Marketplace</Link></li>
              <li><Link href="#">Status</Link></li>
              <li><Link href="#">API</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-600 mb-4">
              ASK Tower 1st floor, 183-184, 3rd Main Rd, Sri Sai Nagar, Thoraipakkam, Tamil Nadu 600096
            </p>
            <div className="flex items-center text-sm text-gray-700 mb-2">
              <Mail className="w-4 h-4 mr-2" />
              bookings@entrex.in
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Phone className="w-4 h-4 mr-2" />
              +91 44 4953 0055
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Entrex. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="hover:underline">Terms of Service</Link>
              <Link href="#" className="hover:underline">Privacy Policy</Link>
              <Link href="#" className="hover:underline">Cookies</Link>
            </div>

            <div className="flex gap-4 justify-center">
              {/* Facebook */}
              <Link href="#" aria-label="Facebook">
                <svg className="w-5 h-5 text-blue-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V11h2.2l-.4 3h-1.8v7A10 10 0 0022 12z" />
                </svg>
              </Link>

              {/* Twitter */}
              <Link href="#" aria-label="Twitter">
                <svg className="w-5 h-5 text-sky-500 hover:text-sky-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.53 8.53 0 01-2.7 1.03 4.28 4.28 0 00-7.3 3.9 12.15 12.15 0 01-8.8-4.46 4.28 4.28 0 001.32 5.72A4.25 4.25 0 012 9.54v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.12.15 4.36 4.36 0 01-.81-.08 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.15 12.15 0 006.57 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.7 8.7 0 0024 5.1a8.42 8.42 0 01-2.42.66 4.2 4.2 0 001.88-2.32" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link href="#" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-blue-800 hover:text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.98 2.98 2.98s2.98-1.35 2.98-2.98A2.99 2.99 0 004.98 3.5zM2.4 21h5.2V9H2.4v12zM9.34 9h4.98v1.62h.07c.69-1.3 2.38-2.67 4.9-2.67 5.24 0 6.2 3.45 6.2 7.93V21h-5.2v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-5.2V9z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
