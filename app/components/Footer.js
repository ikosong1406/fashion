// components/Footer.js
"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">X-Flair</h4>
            <p className="text-gray-400 text-sm">
              X-Flair is your go-to fashion hub, offering trendy and
              high-quality apparel for every occasion. Stay stylish, stay
              unique!
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/returns" className="hover:underline">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Sign up to receive the latest updates and special offers.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-lightgreen hover:bg-blue-600 rounded-md text-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} X-Flair. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V10.41h3.129V7.797c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.794.144v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.59l-.467 3.295h-3.123V24h6.127c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M24 4.557a9.829 9.829 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.95.564-2.005.974-3.127 1.195a4.924 4.924 0 00-8.389 4.482A13.978 13.978 0 011.671 3.149a4.922 4.922 0 001.524 6.573 4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.869 9.869 0 010 21.543a13.93 13.93 0 007.548 2.213c9.055 0 14.001-7.5 14.001-14.001 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.332.014 7.053.072 5.774.13 4.682.39 3.757 1.314 2.833 2.239 2.573 3.33 2.515 4.609c-.058 1.279-.072 1.703-.072 4.391s.014 3.112.072 4.391c.058 1.279.318 2.37 1.242 3.295.925.925 2.016 1.184 3.295 1.242 1.279.058 1.703.072 4.391.072s3.112-.014 4.391-.072c1.279-.058 2.37-.318 3.295-1.242.925-.925 1.184-2.016 1.242-3.295.058-1.279.072-1.703.072-4.391s-.014-3.112-.072-4.391c-.058-1.279-.318-2.37-1.242-3.295-.925-.925-2.016-1.184-3.295-1.242C15.112.014 14.688 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
