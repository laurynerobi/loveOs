import { useState, useEffect } from "react";
import "flowbite";
import logo from "./assets/logo.png";
import FloatingHearts from "./components/FloatingHearts";
import letter from "./assets/letter.png";
import { Link, useNavigate } from "react-router-dom";

export default function App() {
  const fullText = "Love Letter From Lolo";
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);

  // Alert visibility
  const [showAlert, setShowAlert] = useState(false);

  // Auto-hide alert after Jan 1
  useEffect(() => {
    const today = new Date();
    const hideAfter = new Date("2026-01-01T00:00:00");

    if (today < hideAfter) {
      setShowAlert(true);
    }
  }, []);

  // Handle letter click
  const handleLetterClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      navigate("/messages");
    }, 500);
  };

  return (
    <>
      {/* Alert Banner */}
      {showAlert && (
        <div className="fixed top-0 left-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-sm">
          <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between text-sm text-gray-800">
            <p>
              📦 <span className="font-medium">LoveOS Notice:</span> A package has
              been sent and is scheduled for delivery on{" "}
              <span className="font-semibold">December 26th in Montreal</span>.
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="ml-4 text-gray-500 hover:text-pink-500 transition"
              aria-label="Dismiss alert"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`fixed left-0 w-full z-50 bg-transparent backdrop-blur-md ${
          showAlert ? "top-10" : "top-0"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center">
          <ul className="flex items-center space-x-10 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-pink-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <img
                src={logo}
                alt="LoveOS Logo"
                className="h-25 w-auto mx-16 drop-shadow-md"
              />
            </li>
            <li>
              <Link to="/gallery" className="hover:text-pink-500 transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/messages" className="hover:text-pink-500 transition-colors">
                Messages
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
        <FloatingHearts />

        <div className="flex flex-col md:flex-row items-center justify-between w-11/12 md:w-9/12 mt-28 relative z-10">
          {/* Left */}
                <div className="flex-1 text-left">
                <h1
                  className="text-5xl font-bold tracking-wide text-gray-800 mb-6 flex flex-wrap"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {fullText.split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                  ))}
                  <span className="animate-pulse text-pink-400">|</span>
                </h1>

                <p className="text-lg text-gray-700 max-w-md">
                  A little digital love letter — built from scratch, just for Ray.
                </p>
                </div>

                {/* Right */}
          <div className="flex-1 flex justify-center mt-10 md:mt-0">
            <img
              src={letter}
              alt="3D Letter"
              className={`w-[150px] md:w-[650px] drop-shadow-2xl cursor-pointer animate-float
                ${isOpening ? "animate-openLetter" : ""}
                transition-transform duration-300 hover:rotate-6 hover:scale-105`}
              onClick={handleLetterClick}
            />
          </div>
        </div>

        <footer className="absolute bottom-4 text-sm text-gray-600">
          Built with ❤️ using React & Tailwind by Lauryne
        </footer>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes openLetter {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1) rotate(-10deg);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-openLetter {
          animation: openLetter 0.5s forwards;
        }
      `}</style>
    </>
  );
}
