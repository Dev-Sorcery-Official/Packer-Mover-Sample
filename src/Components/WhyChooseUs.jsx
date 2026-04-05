import React from "react";
import {
  FaShieldAlt,
  FaTruckMoving,
  FaUserCheck,
  FaClock,
  FaBoxOpen,
  FaMapMarkedAlt,
} from "react-icons/fa";

const whyChooseData = [
  {
    title: "Trusted & Verified",
    desc: "Professional, transparent, and reliable moving services you can depend on every time.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Safe Transportation",
    desc: "Well-maintained vehicles ensuring secure and damage-free transit of your goods.",
    icon: <FaTruckMoving />,
  },
  {
    title: "Skilled Professionals",
    desc: "Experienced team handling packing, loading, and unloading with complete care.",
    icon: <FaUserCheck />,
  },
  {
    title: "On-Time Delivery",
    desc: "We ensure timely pickup and delivery so your move stays on schedule.",
    icon: <FaClock />,
  },
  {
    title: "Premium Packing",
    desc: "High-quality packing materials for maximum protection of your valuables.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Pan India Service",
    desc: "Reliable relocation services across cities and states all over India.",
    icon: <FaMapMarkedAlt />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-20 overflow-hidden">

      {/* 🔴 Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#E50914]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FF2B2B]/10 rounded-full blur-3xl"></div>
      </div>

      {/* 🔤 Heading */}
      <div className="relative text-center mb-14 z-10">

        <p className="text-xs tracking-[0.35em] uppercase text-[#555555]">
          Why Choose Us
        </p>

        <div className="flex items-center justify-center gap-4 mt-3">
          <div className="hidden sm:block w-16 h-[2px] bg-gradient-to-r from-transparent to-[#E50914]" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A]">
            Why Choose Sample Site?
          </h2>

          <div className="hidden sm:block w-16 h-[2px] bg-gradient-to-l from-transparent to-[#E50914]" />
        </div>

        <div className="w-24 h-[3px] bg-[#E50914] mx-auto mt-4 rounded-full"></div>

        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-[#555555] leading-relaxed">
          Experience hassle-free relocation with professional service, safe handling, and timely delivery. 
          Trusted by hundreds of customers for reliable and stress-free moving solutions across India.
        </p>
      </div>

      {/* 🧩 Cards */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 z-10">

        {whyChooseData.map((item, index) => (
          <div
            key={index}
            className="
              group relative rounded-2xl
              p-[1px]
              bg-gradient-to-br from-transparent to-transparent
              hover:from-[#E50914]/40 hover:to-[#FF2B2B]/40
              transition-all duration-500
            "
          >
            {/* Card */}
            <div
              className="
                bg-[#FFFFFF] rounded-2xl
                px-4 py-6 sm:px-6 sm:py-8
                border border-[#F5F5F5]
                shadow-md
                group-hover:shadow-xl
                group-hover:-translate-y-1
                transition-all duration-500
              "
            >
              {/* Icon */}
              <div
                className="
                  w-12 h-12 sm:w-14 sm:h-14
                  mx-auto rounded-full
                  bg-[#E50914]
                  flex items-center justify-center
                  text-white text-lg sm:text-xl
                  shadow-md
                  group-hover:scale-110
                  group-hover:bg-[#FF2B2B]
                  group-hover:shadow-[0_0_25px_rgba(229,9,20,0.6)]
                  transition-all duration-500
                "
              >
                {item.icon}
              </div>

              {/* Content */}
              <h4 className="mt-4 text-sm sm:text-base font-semibold text-[#0A0A0A] text-center">
                {item.title}
              </h4>

              <p className="mt-2 text-xs sm:text-sm text-[#555555] text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default WhyChooseUs;