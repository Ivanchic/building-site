"use client"

import Image from "next/image";
import Link from "next/link";
import phoneCall from "@/public/Images/phone-call.svg";
import { useEffect, useState } from "react";



type NavLink = {
  label: string;
  href: string;
};


const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Faqs', href: '#faqs' },
  { label: 'Contact Us', href: '#contact' },
];


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    }, []);

  
  return (
    <div
      className={`w-full transition-all py-5 duration-500 fixed top-0 lefty-0 z-50 fixed-nav ${
        isFixed ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div
        className={`w-full flex items-center justify-between transition-all duration-500 ${
          isFixed ? 'px-[8%] lg:px-[5%] py-3' : 'px-[8%] lg:px-[5%]'
        }`}
      >
        {/* Logo Section */}
        <Link
          href="/"
          className={'text-4xl lg:text-5xl font-bold Audiowide text-white'}
        >
          Petr<span className="text-(--prim-dark)">lding</span>
        </Link>
        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-5 menu-links relative z-40">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-lg Rethink text-gray-200 hover:text-(--prim-dark)">
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Contact Button */}
        <div className="flex items-center gap-5">
          <Link href="#" className="hidden md:flex gap-2 text-gray-200 group">
            <Image src={phoneCall} 
            alt="Phone Call" 
            width={20}
            height={20}
            className="invert" />
            <span className="Rethink font-semibold group-hover:text-white">+1 (234) 567-8901</span>
          </Link>
          <Link href='#contact' className="Rethink font-semibold px-4 py-2 bg-white text-black hover:bg-(--prim) hover:text-white rounded-full transition-all duration-300 cursor-pointer">Get in Touch</Link>
        </div>
      {/* Mobile Menu - To be implemented */}
      <div className="lg:hidden flex items-center justify-between gap-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-2xl focus:outline-none" 
          >
          <i className="ri-menu-line"></i>
        </button>
          </div>
      </div>
      {/* Mobile Menu Overlay - To be implemented */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700 mt-3 transition-all duration-300">
          <div className="flex flex-col px-[8%] py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="clock px-2 py-2 font-medium rounded-md text-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                {link.label}
                </Link>
            ))}
          </div>
        </div>
      )}

    </div>
    )}
