import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './style.css';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const navbarRef = useRef(null);


  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        mobileOpen
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  // Close on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile dropdown toggle
  const toggleMobileDropdown = (id) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <nav
      ref={navbarRef}
      id="navbar"
      className={`fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "navbar-scrolled shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SoftPro9 Academy
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <Link to="/" className="nav-link px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="nav-link px-3 py-2 text-sm font-medium">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative dropdown-parent">
              <button className="nav-link flex items-center px-3 py-2 text-sm font-medium">
                Services
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="dropdown absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/10 border border-gray-100 hidden group-hover:block">
                <div className="py-2">
                  <Link
                    to="/service"
                    className="dropdown-item block px-6 py-3 text-sm"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/service"
                    className="dropdown-item block px-6 py-3 text-sm"
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/service"
                    className="dropdown-item block px-6 py-3 text-sm"
                  >
                    Software Solutions
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/academy"
              className="nav-link px-3 py-2 text-sm font-medium"
            >
              Softpro9 Academy
            </Link>

            {/* Our Company Dropdown */}
            <div className="relative dropdown-parent">
              <button className="nav-link flex items-center px-3 py-2 text-sm font-medium">
                Our Company
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="dropdown absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/10 border border-gray-100 hidden group-hover:block">
                <div className="py-2">
                  <Link className="dropdown-item block px-6 py-3 text-sm">
                    Our Team
                  </Link>
                  <Link className="dropdown-item block px-6 py-3 text-sm">
                    Our Clients
                  </Link>
                  <Link className="dropdown-item block px-6 py-3 text-sm">
                    Client Reviews
                  </Link>
                  <Link className="dropdown-item block px-6 py-3 text-sm">
                    How We Work
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/carrer"
              className="nav-link px-3 py-2 text-sm font-medium"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="nav-link px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Login */}
          <div className="hidden lg:block ml-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
              Login
            </button>
          </div>

          {/* Mobile menu btn */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg max-h-screen overflow-y-auto"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium"
            >
              About
            </Link>

            {/* Mobile Services */}
            <div className="py-1">
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="mobile-dropdown-btn w-full flex justify-between items-center px-3 py-2 text-base font-medium"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    mobileDropdowns["services"] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {mobileDropdowns["services"] && (
                <div className="pl-6 space-y-1 mt-1">
                  <Link className="block px-3 py-2 text-sm">Web Development</Link>
                  <Link className="block px-3 py-2 text-sm">Digital Marketing</Link>
                  <Link className="block px-3 py-2 text-sm">Software Solutions</Link>
                </div>
              )}
            </div>

            {/* Mobile Company */}
            <div className="py-1">
              <button
                onClick={() => toggleMobileDropdown("company")}
                className="mobile-dropdown-btn w-full flex justify-between items-center px-3 py-2 text-base font-medium"
              >
                Our Company
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    mobileDropdowns["company"] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {mobileDropdowns["company"] && (
                <div className="pl-6 space-y-1 mt-1">
                  <Link className="block px-3 py-2 text-sm">Our Team</Link>
                  <Link className="block px-3 py-2 text-sm">Our Clients</Link>
                  <Link className="block px-3 py-2 text-sm">Client Reviews</Link>
                  <Link className="block px-3 py-2 text-sm">How We Work</Link>
                </div>
              )}
            </div>

            <Link
              to="/carrer"
              className="block px-3 py-2 text-base font-medium"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium"
            >
              Contact
            </Link>

            <button className="w-full text-left bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-2 text-base font-medium rounded-lg mt-4">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
