import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
// 1️⃣ Import the background image
import backgroundImg from "../assets/background1.jpg";

export default function AboutPage() {
  const navigate = useNavigate();
  const [closing, setClosing] = useState(false);

  const handleCloseExperience = () => {
    setClosing(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div
      className={`relative min-h-screen transition-opacity duration-[2000ms] ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* =======================
          Background Layers
      ======================= */}

      {/* 2️⃣ Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />



      {/* =======================
          Navbar (FIXED)
      ======================= */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <ul className="flex items-center justify-center gap-10 text-gray-200 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <img
                src={logo}
                alt="LoveOS Logo"
                className="h-14 w-auto drop-shadow-md"
              />
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/messages"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Messages
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* =======================
          Main Content
      ======================= */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-32 pb-20">
        <div className="max-w-3xl text-center text-gray-200 space-y-16">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-wide animate-fadeInUp"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            LoveOS is not a website.
            <br />
            It’s a feeling, preserved.
          </h1>

          <div className="space-y-6 text-lg leading-relaxed animate-fadeInUp delay-200">
            <p>
              This space was created to hold moments that words alone cannot.
            </p>
            <p>
              To slow time, even briefly. To give emotions somewhere safe to land.
            </p>
            <p>All I ask through the experience is to be present.</p>
          </div>

          <div className="px-8 py-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg animate-fadeInUp delay-400">
            <p className="italic text-base leading-relaxed">
              To Ray : <br />
              I built this space for you with care, patience, and love.
              <br />
              Every interaction here is intentional. In a world that rushes by,
              <br />
              I wanted to create a moment of pause.
            </p>
            <p className="mt-4 text-sm opacity-80">— Lolo</p>
          </div>

          <div className="pt-12 animate-fadeInUp delay-600">
            <button
              onClick={handleCloseExperience}
              className="px-10 py-4 rounded-full border border-pink-300 text-pink-200
                         hover:bg-pink-300/10 transition-all duration-300 tracking-wide"
            >
              Carry this with you
            </button>
            <p className="mt-6 text-sm opacity-70">Thank you for being here.</p>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}
