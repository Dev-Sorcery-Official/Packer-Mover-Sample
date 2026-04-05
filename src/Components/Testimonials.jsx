// src/components/Testimonials.jsx
import { Pagination } from "swiper/modules";

import "swiper/css/pagination";
import React from "react";
import {
  FaUserCircle,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Rahul Sharma",
    text:
      "Sample Site made my relocation completely stress-free. Their packing quality and timely delivery exceeded my expectations.",
  },
  {
    name: "Priya Verma",
    text:
      "Highly professional team with excellent coordination. Everything was handled smoothly from pickup to delivery.",
  },
  {
    name: "Amit Singh",
    text:
      "Safe transportation and clear communication at every step. Truly a reliable and trustworthy moving service.",
  },
  {
    name: "Neha Gupta",
    text:
      "All my belongings were delivered safely without any damage. I highly recommend Sample Site for relocation services.",
  },
  {
    name: "Rohit Kumar",
    text:
      "Quick service, proper packing, and professional staff. One of the best moving experiences I’ve had.",
  },
  {
    name: "Anjali Mishra",
    text:
      "Very responsive and supportive team. They handled everything carefully and delivered on time.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F5F5F5] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-[2px] bg-[#E50914]" />
            <p className="text-xs uppercase tracking-widest text-[#E50914] font-semibold">
              Client Testimonials
            </p>
            <span className="w-10 h-[2px] bg-[#E50914]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A]">
            What Clients Say About{" "}
            <span className="text-[#E50914]">Sample Site</span>
          </h2>

          <p className="text-[#555555] text-sm sm:text-base mt-3">
            Real experiences from customers who trusted us for safe and reliable relocation services.
          </p>
        </div>

        {/* ================= SWIPER ================= */}
        <Swiper
  modules={[Autoplay, Navigation, Pagination]}
  spaceBetween={20}
  slidesPerView={1}
  loop={true}
  speed={900}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{
    clickable: true, // ✅ dots clickable
    dynamicBullets: true, // ✅ smooth animated dots
  }}
  navigation={true}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= CTA ================= */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="px-9 py-3 rounded-full bg-[#E50914] text-white font-semibold hover:bg-[#FF2B2B] transition shadow-lg hover:scale-105">
              Get Free Quote
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */

const TestimonialCard = ({ item }) => (
  <div className="relative bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-[#E5E7EB] flex flex-col min-h-[210px] transition">

    {/* Accent Stripe */}
    <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#E50914] to-[#FF2B2B] rounded-l-xl" />

    {/* Stars */}
    <div className="flex gap-1 mb-2 text-[#E50914] text-xs">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>

    {/* Text */}
    <p className="text-sm text-[#555555] leading-relaxed mb-4">
      “{item.text}”
    </p>

    {/* User */}
    <div className="flex items-center gap-3 mt-auto">
      <div className="w-10 h-10 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center">
        <FaUserCircle />
      </div>

      <div>
        <h4 className="text-sm font-medium text-[#0A0A0A]">
          {item.name}
        </h4>
        <p className="flex items-center gap-1 text-xs text-[#E50914]">
          <FaCheckCircle />
          Verified Customer
        </p>
      </div>
    </div>
  </div>
);