import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import logo from "../assets/logo.png";

// 🎥 Intro videos
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

/**
 * Dynamically load gallery images
 * gallery1.jpg → gallery30.jpg
 */
const galleryImages = Array.from({ length: 30 }, (_, i) => ({
  src: new URL(`../assets/gallery${i + 1}.jpg`, import.meta.url).href,
}));

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-rose-50 via-purple-50 to-indigo-50">

      {/* 🌸 Soft background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,192,203,0.15),_transparent_60%)]" />

      {/* 🧭 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-center">
          <ul className="flex items-center space-x-10 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-pink-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-pink-500 transition">
                About
              </Link>
            </li>

            <li>
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto drop-shadow-md"
              />
            </li>

            <li>
              <Link to="/gallery" className="hover:text-pink-500 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/messages" className="hover:text-pink-500 transition">
                Messages
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* 🎥 Hero Video Slider */}
      <section className="pt-32 pb-24 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            {[video1, video2, video3].map((vid, i) => (
              <SwiperSlide key={i}>
                <video
                  src={vid}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[70vh] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-4">
              LoveOs Gallery
            </h1>
            <p className="text-lg text-gray-500 italic">
              Moments held softly — like memories you revisit.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 🖼️ Masonry Gallery */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white/40 backdrop-blur-md break-inside-avoid"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={() => setActiveImage(img.src)}
            >
              <img
                src={img.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌙 Memory Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              className="max-w-[90%] max-h-[85vh] rounded-3xl shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
