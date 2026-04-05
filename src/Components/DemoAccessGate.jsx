import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLock,
  FaCrown,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const DemoAccessGate = () => {
  return (
    <section className="mt-20 min-h-screen flex items-center justify-center bg-[#FFFFFF] px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#E50914] flex items-center justify-center shadow-lg">
            <FaLock className="text-white text-3xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#0A0A0A]">
          Premium Access Required
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-[#555555] text-sm md:text-base leading-relaxed">
          You're currently viewing a demo version of the website.  
          Full access to all pages, features, and premium sections is available 
          after purchasing our complete website service.
        </p>

        {/* Features */}
        <div className="mt-8 space-y-3 text-sm text-[#555555]">
          <div className="flex items-center justify-center gap-2">
            <FaCrown className="text-[#E50914]" />
            Full Website Access
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaRocket className="text-[#E50914]" />
            Custom Design & Branding
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaArrowRight className="text-[#E50914]" />
            SEO Optimized & High Performance
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          {/* Contact */}
          <a
  href="tel:+919260967254"
  className="
    px-7 py-3
    rounded-full
    bg-[#E50914]
    text-white
    font-semibold
    hover:bg-[#FF2B2B]
    transition
    shadow-md
  "
>
  Contact Us
</a>

          {/* Back Home */}
          <Link
            to="/"
            className="
              px-7 py-3
              rounded-full
              border-2 border-[#E50914]
              text-[#E50914]
              font-semibold
              hover:bg-[#E50914]
              hover:text-white
              transition
            "
          >
            Back to Home
          </Link>
        </div>

        {/* Bottom Note */}
        <p className="mt-6 text-xs text-[#555555]">
          Want a website like this? Let’s build something amazing together 🚀
        </p>
      </motion.div>
    </section>
  );
};

export default DemoAccessGate;