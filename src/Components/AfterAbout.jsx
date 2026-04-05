import React from "react";
import {
  Truck,
  Users,
  Star,
  Clock,
  Package,
  MapPin,
  Headphones,
} from "lucide-react";
import bgImg from "../assets/images/hero/whybg.jpg";
import profileImg from "../assets/images/hero/owner.jpg";
import logoImg from "../assets/images/hero/sample.png";
import img1 from "../assets/images/hero/h1.jpg";
import img2 from "../assets/images/hero/h2.jpg";
import img3 from "../assets/images/hero/h3.jpg";
import img4 from "../assets/images/hero/h3.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const AfterAbout = () => {
  return (
    <section
      className="bg-[#FFFFFF] min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 text-[#0A0A0A]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl w-full" id="about">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          
          {/* Left Side */}
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={profileImg}
                alt="Owner"
                className="w-16 h-16 rounded-full object-cover shadow-xl border-2 border-[#E50914]"
              />
              <p className="text-[#0A0A0A] text-lg">
                <span className="font-semibold text-[#E50914]">
                  John Doe
                </span>
                <br />
                <span className="text-sm text-[#555555]">
                  Owner & Founder
                </span>
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A0A0A] mb-6">
              Fast, Reliable, Safe, Affordable, Nationwide, Hassle-Free Moving
            </h1>

            <p className="text-[#555555] text-lg leading-relaxed">
              We provide safe, fast, and reliable shifting solutions for homes,
              offices, and businesses. From packing to final delivery, we ensure
              a stress-free moving experience.
            </p>
          </div>

          {/* Right Side */}
          <div className="max-w-md space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start gap-4 w-full">
              <img
                src={logoImg}
                alt="Sample Site Logo"
                className="w-56 md:w-72 object-contain"
              />
              <h2 className="text-2xl font-bold text-[#0A0A0A]">
                Sample Site
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-[#555555] leading-relaxed">
  With years of experience and thousands of happy customers,{" "}
  <span className="font-semibold text-[#E50914]">
    Sample Site
  </span>{" "}
  stands for{" "}
  <span className="text-[#0A0A0A] font-semibold">
    reliability
  </span>
  ,{" "}
  <span className="text-[#E50914] font-semibold">
    safety
  </span>
  , and customer satisfaction across India. We are dedicated to providing
  seamless relocation services with professional handling, timely delivery,
  and a customer-first approach that ensures trust, transparency, and a
  completely stress-free moving experience.
</p>

            {/* CTA Button */}
            

<div className="flex flex-wrap gap-4 mt-4">
  
  {/* Primary Button */}
  <Link to="/contact">
    <button className="flex items-center gap-2 cursor-pointer px-6 py-3 bg-[#E50914] text-white text-sm rounded-full shadow-lg hover:bg-[#FF2B2B] transition font-semibold">
      <FaArrowRight />
      Get Quote
    </button>
  </Link>

  {/* Secondary Button */}
  <a href="tel:+919000000000">
    <button className="flex items-center gap-2 cursor-pointer px-6 py-3 border-2 border-[#E50914] text-[#E50914] text-sm rounded-full shadow-md hover:bg-[#E50914] hover:text-white transition font-semibold">
      <FaPhoneAlt />
      Call Now
    </button>
  </a>

</div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full">
  
  {/* Moves */}
  <div className="flex flex-col items-center">
    <div className="p-4 rounded-full bg-[#E50914] shadow-lg mb-2">
      <Truck className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-bold text-[#0A0A0A]">5000+</h3>
    <p className="text-sm text-[#555555]">Moves</p>
  </div>

  {/* Clients */}
  <div className="flex flex-col items-center">
    <div className="p-4 rounded-full bg-[#1F1F1F] shadow-lg mb-2">
      <Users className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-bold text-[#0A0A0A]">4024+</h3>
    <p className="text-sm text-[#555555]">Clients</p>
  </div>

  {/* Ratings */}
  <div className="flex flex-col items-center">
    <div className="p-4 rounded-full bg-[#E50914] shadow-lg mb-2">
      <Star className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-bold text-[#0A0A0A]">4.8★</h3>
    <p className="text-sm text-[#555555]">Ratings</p>
  </div>

  {/* NEW: Experience */}
  <div className="flex flex-col items-center">
    <div className="p-4 rounded-full bg-[#1F1F1F] shadow-lg mb-2">
      <Clock className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-bold text-[#0A0A0A]">10+</h3>
    <p className="text-sm text-[#555555]">Years</p>
  </div>

</div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="hidden mt-20 md:grid grid-cols-2 md:grid-cols-4 gap-8 auto-rows-[600px]">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group">
              <img src={img1} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-2xl bg-[#F5F5F5] shadow-md flex flex-col items-center justify-center text-center p-6 h-[200px]">
              <Clock className="w-8 h-8 text-[#E50914] mb-3" />
              <h3 className="text-3xl font-bold text-[#E50914]">10+</h3>
              <p className="text-[#0A0A0A] mt-2 font-medium">Years Experience</p>
              <p className="text-sm mt-1 text-[#555555]">
                Trusted relocation services across India.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-[#F5F5F5] shadow-md flex flex-col items-center justify-center text-center p-6 h-[200px]">
              <Package className="w-8 h-8 text-[#1F1F1F] mb-3" />
              <h3 className="text-3xl font-bold text-[#0A0A0A]">5000+</h3>
              <p className="text-[#0A0A0A] mt-2 font-medium">Successful Shifts</p>
              <p className="text-sm mt-1 text-[#555555]">Safe packing & reliable transport for every moveSafe & reliable moves.</p>
              <p className="text-sm text-[#555555]"></p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group">
              <img src={img2} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group">
              <img src={img3} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-2xl bg-[#F5F5F5] shadow-md flex flex-col items-center justify-center text-center p-6 h-[200px]">
              <MapPin className="w-8 h-8 text-[#E50914] mb-3" />
              <h3 className="text-3xl font-bold text-[#E50914]">50+</h3>
              <p className="text-[#0A0A0A] mt-2 font-medium">Cities Covered</p>
              <p className="mt-1 text-sm text-[#555555]">Delivering relocation services across urban & rural India.</p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-[#F5F5F5] shadow-md flex flex-col items-center justify-center text-center p-6 h-[200px]">
              <Headphones className="w-8 h-8 text-[#1F1F1F] mb-3" />
              <h3 className="text-3xl font-bold text-[#0A0A0A]">24/7</h3>
              <p className="text-[#0A0A0A] mt-2 font-medium">Support</p>
              <p className="mt-1 text-sm text-[#555555]">Always here to assist you with smooth moving solutions.</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group">
              <img src={img4} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AfterAbout;