"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install `lucide-react` or use your own icons

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="font-bold text-xl">
          <img src="/logo.png" alt="logo" className="h-10" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm">
          <Link href="/about">About us</Link>
          <Link href='/services' 
            className="relative list-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
          
            <span className="cursor-pointer">Services</span>
            {isHovering && (
              <div className="absolute top-full left-0 bg-white text-black border p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 w-[90vw] sm:w-[600px] shadow-xl z-10">
                <div>Employee Shuttle</div>
                <div>Women Safety</div>
                <div>Route Optimization</div>
              </div>
            )}
          </Link>
          <Link href="#">Tour Packages</Link>
          <Link href="#">Luxury Car Rentals</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/contact">Contact us</Link>
        </nav>

        {/* Mobile Icon */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2 text-sm">
          <Link href="/about">About us</Link>
          <Link href="#">Tour Packages</Link>
          <Link href="#">Luxury Car Rentals</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/contact">Contact us</Link>
        </div>
      )}
    </header>
  );
}
