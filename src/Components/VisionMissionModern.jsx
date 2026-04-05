// src/components/VisionMissionModern.jsx
import React from "react";
import { FaTruckMoving, FaMapMarkedAlt } from "react-icons/fa";
import bgImage from "../assets/images/hero/bg11.jpg";

const VisionMissionModern = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center text-[#0A0A0A] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-white/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-16 text-center">

        {/* Mission */}
        <div className="space-y-5">
          
          <div className="flex items-center justify-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#E50914] rounded-full animate-pulse"></span>
            <div className="w-16 h-[2px] bg-[#E50914]"></div>
          </div>

          <div className="flex justify-center">
            <FaTruckMoving className="text-[#E50914] text-3xl md:text-4xl" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Our Mission
          </h2>

          <p className="text-[#202020] font-semibold text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            At <span className="text-[#E50914] font-semibold"> Sample Site </span>, our mission is to provide safe, fast, and professional packing and moving services across India, ensuring every item is handled with care and delivered securely with complete customer satisfaction.
          </p>
        </div>

        {/* Divider */}

        {/* Vision */}
        <div className="space-y-5">
          
          <div className="flex items-center justify-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#E50914] rounded-full animate-pulse"></span>
            <div className="w-16 h-[2px] bg-[#E50914]"></div>
          </div>

          <div className="flex justify-center">
            <FaMapMarkedAlt className="text-[#E50914] text-3xl md:text-4xl" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Our Vision
          </h2>

          <p className="text-[#202020] font-semibold text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
Our vision is to become a trusted packers and movers brand in India, known for reliability and quality service, while delivering smooth, stress-free relocation experiences for individuals, families, and businesses.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisionMissionModern;