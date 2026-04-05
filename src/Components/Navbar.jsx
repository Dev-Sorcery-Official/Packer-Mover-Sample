import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaBoxOpen,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaTruckMoving,
  FaChevronDown,
  FaChevronUp,
  FaPeopleCarry,
  FaExchangeAlt,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaCodeBranch,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/images/hero/sample.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Branches", path: "/locations", icon: <FaCodeBranch /> },
    { name: "Gallery", path: "/gallery", icon: <FaBoxOpen /> },
    { name: "Contact us", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  const services = [
    { name: "Packers And Movers Service", path: "/services/packers-and-movers", icon: <FaPeopleCarry /> },
    { name: "Movers And Packers Service", path: "/services/movers-and-packers", icon: <FaTruckMoving /> },
    { name: "Relocation Service", path: "/services/relocation", icon: <FaExchangeAlt /> },
    { name: "Household Shifting Service", path: "/services/household-shifting", icon: <FaBoxOpen /> },
    { name: "Transport Service", path: "/services/transport", icon: <FaTruckMoving /> },
    { name: "Car Transport Service", path: "/services/car-transport", icon: <FaCarSide /> },
    { name: "Bike Transport Service", path: "/services/bike-transport", icon: <FaMotorcycle /> },
    { name: "Pet Transport Service", path: "/services/pet-transport", icon: <FaDog /> },
    { name: "Loading Unloading Service", path: "/services/loading-unloading", icon: <FaDolly /> },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowTop(false);
      } else {
        setShowTop(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">

      {/* 🔴 Top Header */}
      <div
        className={`bg-[#0A0A0A] text-white text-sm md:text-base overflow-hidden transition-all duration-500 ${
          showTop ? "h-10 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="relative w-full overflow-hidden h-10 flex items-center">
          <div className="marquee-track flex whitespace-nowrap">

            <p className="flex items-center gap-6 px-10">
              <FaTruckMoving className="text-[#E50914]" />
              Welcome to{" "}
              <span className="text-[#E50914] font-semibold">
                Sample Site
              </span>
              <span>|</span>
              <FaBoxOpen className="text-[#E50914]" />
              Reliable, Safe, and Fast Relocation Services Across India
              <span>|</span>
              <FaPhone className="text-[#E50914]" />
              Call Us: +91 90000 00000 | Email: info@samplesite.com
            </p>

            <p className="flex items-center gap-6 px-10">
              <FaTruckMoving className="text-[#E50914]" />
              Welcome to{" "}
              <span className="text-[#E50914] font-semibold">
                Sample Site
              </span>
              <span>|</span>
              <FaBoxOpen className="text-[#E50914]" />
              Professional Packers & Movers Services
              <span>|</span>
              <FaPhone className="text-[#E50914]" />
              Get Free Quote Today!
            </p>

          </div>
        </div>
      </div>

      {/* ⚪ Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 border-b border-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-8 py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Sample Site" className="h-14" />
            
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 font-medium text-[#0A0A0A]">
            {navLinks.map((link, index) => (
              <li key={index} className="group relative text-md">

                {link.name === "Services" ? (
                  <div className="relative group">
                    <button className="flex items-center gap-1 hover:text-[#E50914] transition">
                      {link.icon}
                      {link.name}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>

                    {/* Dropdown */}
                    <ul className="absolute left-0 mt-2 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-[#F5F5F5]">
                      {services.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            to={service.path}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-[#0A0A0A] hover:bg-[#F5F5F5] hover:text-[#E50914] transition"
                          >
                            {service.icon}
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 hover:text-[#E50914] transition"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                )}

              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex gap-5 text-lg">
            <a href="#" className="hover:text-[#E50914] transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#E50914] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#E50914] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#E50914] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#E50914] transition">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-[#0A0A0A]" size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 rounded-l-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >

        <div className="flex justify-between items-center px-4 py-4 border-b border-[#F5F5F5]">
          <h2 className="text-[#0A0A0A] text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-[#0A0A0A]" size={22} />
          </button>
        </div>

        <div className="px-4 mt-4">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.name === "Services" ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between w-full py-3 border-b text-[#0A0A0A] hover:text-[#E50914]"
                  >
                    <span className="flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </span>
                    {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  <div className={`${servicesOpen ? "block" : "hidden"} pl-6`}>
                    {services.map((service, idx) => (
                      <Link
                        key={idx}
                        to={service.path}
                        className="flex items-center gap-3 py-3 text-sm text-[#0A0A0A] hover:text-[#E50914]"
                        onClick={() => setMenuOpen(false)}
                      >
                        {service.icon}
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="flex items-center gap-2 py-3 border-b text-[#0A0A0A] hover:text-[#E50914]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          .marquee-track {
            display: flex;
            animation: marquee 25s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </header>
  );
}