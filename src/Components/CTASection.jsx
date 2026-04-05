// src/components/CTASection.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaTruckMoving,
  FaHome,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative bg-[#FFFFFF] py-12 overflow-hidden">

      {/* 🔴 Soft Red Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E50914]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#FF2B2B]/10 blur-[100px] rounded-full" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <IconBubble icon={<FaTruckMoving />} className="top-16 left-[10%]" />
        <IconBubble icon={<FaHome />} className="top-24 right-[12%]" />
        <IconBubble icon={<FaBuilding />} className="bottom-20 left-[12%]" />
        <IconBubble icon={<FaShieldAlt />} className="bottom-24 right-[10%]" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#0A0A0A] leading-tight">
          Move Smart. Move Safe.{" "}
          <span className="text-[#E50914]">Move with Sample Site</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-[#555555] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          From local shifting to long-distance relocations, Sample Site
          ensures secure packing, timely delivery, and a completely
          stress-free moving experience across India.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex items-center justify-center gap-3 w-full max-w-md mx-auto">

  {/* Call Now */}
  <a
    href="tel:+919000000000"
    className="
      flex-1 flex items-center justify-center gap-2
      px-3 sm:px-5 py-3 sm:py-4
      rounded-full
      bg-[#E50914]
      text-white
      text-xs sm:text-sm
      font-semibold
      shadow-md
      hover:bg-[#FF2B2B]
      transition-all duration-300
      whitespace-nowrap
    "
  >
    <FaPhoneAlt className="text-xs sm:text-sm" />
    Call Now
  </a>

  {/* Get Quote */}
  <Link
    to="/contact"
    className="
      flex-1 flex items-center justify-center gap-2
      px-3 sm:px-5 py-3 sm:py-4
      rounded-full
      border-2 border-[#E50914]
      text-[#E50914]
      text-xs sm:text-sm
      font-semibold
      hover:bg-[#E50914]
      hover:text-white
      transition-all duration-300
      whitespace-nowrap
    "
  >
    <FaEnvelopeOpenText className="text-xs sm:text-sm" />
    Get a Quote
  </Link>

</div>

        {/* Trust Line */}
        <p className="mt-6 text-sm text-[#555555]">
          Trusted by families & businesses for{" "}
          <span className="font-semibold text-[#E50914]">
            safe & reliable relocations
          </span>
          .
        </p>
      </div>
    </section>
  );
};

/* Floating Icon Bubble */
const IconBubble = ({ icon, className }) => (
  <div
    className={`
      absolute ${className}
      w-10 h-10
      rounded-full
      bg-[#FFFFFF]
      border border-[#F5F5F5]
      shadow-sm
      flex items-center justify-center
      text-[#E50914]
      text-base
    `}
  >
    {icon}
  </div>
);

export default CTASection;