// components/Header.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-lightgreen shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-green text-2xl">
          <Link href="/">
            <p className="flex items-center">
              <span className="">X-</span>
              <span className="">Flair</span>
            </p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about">
            <p className="text-green hover:text-blue-500 transition">About</p>
          </Link>
          <Link href="/shop">
            <p className="text-green hover:text-blue-500 transition">Shop</p>
          </Link>
          <Link href="/contact">
            <p className="text-green hover:text-blue-500 transition">Contact</p>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-lightgreen shadow-md">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <Link href="/about">
                <p className="block text-green hover:text-blue-500 transition">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p className="block text-green hover:text-blue-500 transition">
                  Shop
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="block text-green hover:text-blue-500 transition">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
