import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-center items-center w-full">
        {/* Nav Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex justify-center space-x-8 text-lg w-full`}
        >
          <a href="/" className="hover:text-orange-500">
            Home
          </a>
          <a href="/about" className="hover:text-orange-500">
            About
          </a>
          <a href="/projects" className="hover:text-orange-500">
            Projects
          </a>
          <a href="/contact" className="hover:text-orange-500">
            Contact
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
