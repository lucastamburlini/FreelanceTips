import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-16">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center flex-shrink-0 bg-white">
            <span className="text-2xl font-bold text-gray-800">Freelance</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-300 via-blue-700 to-purple-600 bg-clip-text text-transparent">
              Tips
            </span>
          </div>
          <div className="hidden sm:block text-gray-800">
            <div className="flex space-x-4">
              <Link
                to={"/"}
                className="hover:bg-blue-700 bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Inicio
              </Link>
              <Link
                to={"/blog"}
                className="hover:bg-blue-700 bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                to={"/contact"}
                className="hover:bg-blue-700 bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-white`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to={"/"}
            className="block hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            onClick={toggleMenu}
          >
            Inicio
          </Link>
          <Link
            to={"/blog"}
            className="block hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            to={"/contact"}
            className="block hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            onClick={toggleMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
