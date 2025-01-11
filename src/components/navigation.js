import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "border-b bg-gray-50" : "bg-gray-800"
      } transition-all`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="text-white text-xl outline-none font-bold">
              <img src="/img/votefave-tp.png" alt="Logo" className="h-8 w-full" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/home#categories"
                className={` hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled ? "text-gray-700 " : "text-gray-300"
                }`}
              >
                Categories
              </Link>
              <Link
                to="/results"
                className={` hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    isScrolled ? "text-gray-700 " : "text-gray-300"
                  }`}
                >
                Live Results
              </Link>
              <Link
                to="/"
                className={` hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    isScrolled ? "text-gray-700 " : "text-gray-300"
                  }`}
                >
                Logout
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/home#categories"
              className={` hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                    isScrolled ? "text-gray-700 " : "text-gray-300"
                  }`}
                >
              Categories
            </Link>
            <Link
              to="/results"
              className={` hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled ? "text-gray-700 " : "text-gray-300"
              }`}
            >
              Live Results
            </Link>
            <Link
              to="/"
              className={` hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled ? "text-gray-700 " : "text-gray-300"
              }`}
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
