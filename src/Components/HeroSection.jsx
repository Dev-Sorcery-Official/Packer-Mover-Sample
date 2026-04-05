import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaTruckMoving,
  FaWarehouse,
  FaBoxes,
  FaHandsHelping,
} from "react-icons/fa";

// Images
import h1 from "../assets/images/hero/h3.jpg";
import h2 from "../assets/images/hero/h2.jpg";
import h4 from "../assets/images/hero/h1.jpg";

// ✅ New Premium Color Scheme
const COLORS = {
  primary: "#E50914",      // Red
  hover: "#FF2B2B",        // Hover Red
  white: "#FFFFFF",
  black: "#0A0A0A",
  charcoal: "#1F1F1F",
  lightGray: "#F5F5F5",
  textGray: "#555555",
};

const quotes = [
  "Swift. Smart. Secure.",
  "Moving Dreams, Not Just Boxes.",
  "Effortless Relocation Experts.",
  "Delivering Care with Every Move.",
];

const servicesHighlight = [
  { icon: <FaTruckMoving />, label: "Nationwide Relocation" },
  { icon: <FaBoxes />, label: "Packing & Unpacking" },
  { icon: <FaWarehouse />, label: "Secure Warehousing" },
  { icon: <FaHandsHelping />, label: "Door-to-Door Service" },
];

const images = [h1, h2, h4];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-28 relative w-full h-[90vh] md:h-[85vh] overflow-hidden font-sans">

      {/* Background Image */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 mt-12">

        {/* Heading */}
        <TypeAnimation
          sequence={quotes.flatMap((q) => [q, 2000])}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-[2rem] md:text-4xl font-semibold tracking-wide drop-shadow-xl text-white"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          <span className="font-semibold text-white">Sample Site</span> — Reliable,
          Transparent, and Fast Relocation Services.
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-16 md:mt-8 flex flex-wrap gap-4 justify-center">

          {/* Primary CTA */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E50914] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#FF2B2B] transition-all"
          >
            Get a Quote
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-[#0A0A0A] transition-all"
          >
            Explore More
          </motion.a>
        </div>

        {/* Services */}
        <div className="mt-16 hidden md:flex flex-wrap justify-center gap-10 text-white/90">
          {servicesHighlight.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl text-[#E50914]">
                {service.icon}
              </div>
              <p className="mt-2 text-sm md:text-base font-medium">
                {service.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-white" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;