// src/components/WhoWeAre.jsx
import React from "react";
import {
  FaTruckMoving,
  FaClock,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
import chooseImg from "../assets/images/hero/h12.jpg";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 px-4 md:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:h-[480px] w-full gap-6">
        
        {/* Left Column */}
        <div className="flex flex-col lg:w-1/4 gap-6">
          
          {/* Card 1 */}
          <div className="flex-1 bg-[#1F1F1F] text-white flex flex-col items-center justify-center p-5 rounded-lg shadow-md hover:shadow-xl transition">
            <FaTruckMoving size={36} className="mb-3 text-[#E50914]" />
            <h3 className="text-base md:text-lg font-bold uppercase tracking-wide">
              Reliable Moves
            </h3>
            <p className="text-sm mt-2 text-center text-gray-300 leading-relaxed">
              Safe and secure relocation handled with care and professionalism.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-[#E50914] text-white flex flex-col items-center justify-center p-5 rounded-lg shadow-md hover:shadow-xl transition">
            <FaClock size={36} className="mb-3 text-white" />
            <h3 className="text-base md:text-lg font-bold uppercase tracking-wide">
              On-Time Service
            </h3>
            <p className="text-sm mt-2 text-center text-white/90 leading-relaxed">
              Timely pickup and delivery for a smooth moving experience.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="lg:w-[40%] w-full">
          <img
            src={chooseImg}
            alt="Who We Are - Sample Site"
            className="h-[260px] lg:h-full w-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col lg:w-[35%] gap-6">
          
          {/* Heading + Content */}
          <div className="flex-1 bg-[#F5F5F5] flex flex-col justify-center p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0A0A0A]">
              WHO <span className="text-[#E50914]">WE ARE?</span>
            </h2>

            <p className="mt-3 text-[#555555] text-sm md:text-base leading-relaxed">
              At{" "}
              <span className="font-semibold text-[#E50914]">
                Sample Site
              </span>
              , we provide reliable and professional packing and moving services
              across India. We focus on safety, efficiency, and customer
              satisfaction to deliver smooth and stress-free relocation
              experiences.
            </p>
          </div>

          {/* Bottom Cards */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            
            {/* Card 3 */}
            <div className="sm:w-1/2 bg-[#1F1F1F] text-white flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-xl transition">
              <FaCalendarAlt size={32} className="text-[#E50914]" />
              <h3 className="text-base md:text-lg font-bold mt-3 uppercase text-center">
                Flexible
              </h3>
              <p className="text-sm text-center text-gray-300 mt-1">
                Moving schedules as per your convenience.
              </p>
            </div>

            {/* Card 4 */}
            <div className="sm:w-1/2 bg-[#E50914] text-white flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-xl transition">
              <FaShieldAlt size={32} className="text-white" />
              <h3 className="text-base md:text-lg font-bold mt-3 uppercase text-center">
                Safe & Secure
              </h3>
              <p className="text-sm text-center text-white/90 mt-1">
                Complete protection for your valuable goods.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}