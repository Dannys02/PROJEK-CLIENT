import React from "react";

function Navbar() {
  return (
    <header className="header fixed w-full shadow-sm px-4 z-50">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600">
          Portfolio
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          {["home", "about", "projects", "services", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="navbar-a relative inline-block capitalize text-black hover:text-indigo-500 transition-colors duration-300 after:bg-indigo-600"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Tombol menu mobile (tidak aktif untuk sekarang) */}
        <button className="md:hidden text-gray-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
