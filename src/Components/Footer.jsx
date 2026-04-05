// src/components/Footer.jsx

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaArrowRight,
  FaPhoneAlt,
  FaPeopleCarry,
  FaExchangeAlt,
  FaBoxOpen,
  FaTruckMoving,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaLinkedinIn,
  FaHome,
  FaWarehouse,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Translator from "./Translator";
import VisitorCounter from "./VIsitorCounter";

/* ================= ANIMATION ================= */
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= SERVICES ================= */
const servicesData = [
  { name: "Packers & Movers", path: "/services/packers-and-movers", icon: FaPeopleCarry },
  { name: "Home Shifting", path: "/services/home-shifting", icon: FaHome },
  { name: "Office Relocation", path: "/services/office-relocation", icon: FaExchangeAlt },
  { name: "Household Shifting", path: "/services/household-shifting", icon: FaBoxOpen },
  { name: "Intercity Moving", path: "/services/intercity-relocation", icon: FaTruckMoving },
  { name: "Car Transport", path: "/services/car-transport", icon: FaCarSide },
  { name: "Bike Transport", path: "/services/bike-transport", icon: FaMotorcycle },
  { name: "Pet Relocation", path: "/services/pet-relocation", icon: FaDog },
  { name: "Loading & Unloading", path: "/services/loading-unloading", icon: FaDolly },
  { name: "Warehouse Storage", path: "/services/warehouse-storage", icon: FaWarehouse },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-[#0A0A0A] text-[#FFFFFF] pt-16 pb-8 px-6 md:px-16"
    >
      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* ABOUT */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">
            Sample Site
          </h4>

          <p className="text-[#dddddd] text-sm leading-relaxed">
            Sample Site is a trusted name in packing and moving services across India. 
            We provide safe, fast, and professional relocation solutions with a strong 
            focus on customer satisfaction, reliability, and secure transportation.
          </p>

          <a
            href="#"
            className="inline-block bg-[#E50914] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#FF2B2B] transition"
          >
            Access Webmail
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([text, link], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-[#dddddd] hover:text-[#E50914] transition"
                >
                  <FaArrowRight className="text-[#E50914]" /> {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* EMAIL */}
          <h4 className="mt-6 text-lg font-semibold text-white">
            Email
          </h4>

          <ul className="mt-2 space-y-2 text-sm">
            {[
              "info@samplesite.com",
              "support@samplesite.com",
            ].map((email, idx) => (
              <li key={idx}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-[#dddddd] hover:text-[#E50914] transition"
                >
                  <FaEnvelope className="text-[#E50914]" />
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            Our Services
          </h4>

          <ul className="space-y-2 text-sm">
            {servicesData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="flex items-center gap-2 text-[#dddddd] hover:text-[#E50914] transition"
                >
                  <Icon className="text-[#E50914]" /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            Contact Info
          </h4>

          <address className="not-italic text-sm text-[#dddddd] leading-relaxed mb-4">
            123 Business Street,<br />
            New Delhi,<br />
            India - 110001
          </address>

          <a
            href="tel:+919876543210"
            className="block mb-2 text-sm hover:text-[#E50914] transition"
          >
            <FaPhoneAlt className="inline mr-2 text-[#E50914]" />
            +91 98765 43210
          </a>

          <a
            href="tel:+919876543211"
            className="block text-sm hover:text-[#E50914] transition"
          >
            <FaPhoneAlt className="inline mr-2 text-[#E50914]" />
            +91 98765 43211
          </a>

          {/* TRANSLATOR */}
          <div className="mt-4 flex">
            <Translator />
            <div className="w-32"></div>
          </div>

          {/* SOCIAL */}
          <div className="mt-5 flex gap-4 text-lg">
            <FaYoutube className="hover:text-[#E50914] cursor-pointer transition" />
            <FaFacebookF className="hover:text-[#E50914] cursor-pointer transition" />
            <FaInstagram className="hover:text-[#E50914] cursor-pointer transition" />
            <FaXTwitter className="hover:text-[#E50914] cursor-pointer transition" />
            <FaLinkedinIn className="hover:text-[#E50914] cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-10 border-t border-[#1F1F1F] pt-6 text-center text-xs text-[#e0e0e0] space-y-2">
        <VisitorCounter />

        <p>
          © {new Date().getFullYear()} Sample Site. All rights reserved.
        </p>

        <p>
          Designed with lots of love and code by{" "}
          <span className="text-[#ff1723] font-medium">
            <a href="http://devsorcery.com">Dev Sorcery</a>
          </span>
        </p>
      </div>
    </motion.footer>
  );
}