"use client";
import { useState } from "react";
import Link from "next/link";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="hidden md:flex space-x-4 items-center">
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <Link
                href="#projects"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Skills
              </Link>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#home"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="#projects"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
