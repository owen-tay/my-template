import { Link } from "react-router-dom";
import NavImage from "./images/NavImage.svg";
import React, { useState, useRef, useLayoutEffect } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useLayoutEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.height = isMobileMenuOpen
        ? `${menuRef.current.scrollHeight}px`
        : "0";
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-100 dark:bg-slate-800 mb-3 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto md:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center px-4 md:px-0">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={NavImage} className="h-8" alt="Logo" />
            </Link>
            <Link to="/" onClick={closeMobileMenu}>
              <h1 className="ml-2 transition-colors text-black dark:text-white duration-300 hover:text-pink-400">
                Title
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/"
              className="block transition-colors duration-300 dark:text-white hover:text-pink-400"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              to="/map"
              className="block transition-colors duration-300 dark:text-white hover:text-pink-400"
              onClick={closeMobileMenu}
            >
              Maps
            </Link>
            <Link
              to="/listings"
              className="block transition-colors duration-300 dark:text-white hover:text-pink-400"
              onClick={closeMobileMenu}
            >
              Listings
            </Link>
            <Link
              to="/profile"
              className="block transition-colors duration-300 dark:text-white hover:text-pink-400"
              onClick={closeMobileMenu}
            >
              Profile
            </Link>
          </div>
          <div className="flex md:hidden items-center px-4 ">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700  hover:bg-gray-200  stroke-black dark:stroke-white dark:hover:bg-slate-600 focus:outline-none focus:ring-3 focus:ring-inset "
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "h-screen" : "h-0"
          }`}
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
        >
          <div
            id="thisone"
            className="bg-white dark:bg-slate-800 px-4 md:px-0 text-3xl"
            ref={menuRef}
            style={{
              transition: "height 0.5s, opacity 0.5s",
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? "max-content" : 0,
              display: isMobileMenuOpen ? "block" : "none",
            }}
          >
            <div className="flex flex-col items-end">
              <Link
                to="/blog"
                className="block transition-colors duration-200 text-black dark:text-white hover:text-pink-400 "
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link
                to="/map"
                className="block transition-colors duration-200 text-black dark:text-white hover:text-pink-400 "
                onClick={closeMobileMenu}
              >
                Maps
              </Link>
              <Link
                to="/listings"
                className="block transition-colors duration-200 text-black dark:text-white hover:text-pink-400 "
                onClick={closeMobileMenu}
              >
                Listings
              </Link>
              <Link
                to="/profile"
                className="block transition-colors duration-200 text-black dark:text-white hover:text-pink-400 "
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
