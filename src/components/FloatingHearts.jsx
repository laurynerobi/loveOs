import { useEffect, useState } from "react";
import heart from "../assets/heart.png"; // heart image

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate hearts continuously
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // random horizontal position
        size: 20 + Math.random() * 40, // random size
        duration: 4 + Math.random() * 4, // random speed
        rotation: Math.random() * 360, // starting rotation
      };

      setHearts((prev) => [...prev, newHeart]);

      // Remove heart after animation ends
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    }, 300); // spawn a new heart every 0.3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((h) => (
        <img
          key={h.id}
          src={heart}
          alt="floating heart"
          className="absolute animate-heart-float opacity-80"
          style={{
            left: `${h.left}%`,
            bottom: "-50px", // start slightly below screen
            width: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            transform: `rotate(${h.rotation}deg)`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes heart-float {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50vh) scale(1.2) rotate(15deg);
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-110vh) scale(0.8) rotate(-15deg);
            opacity: 0;
          }
        }

        .animate-heart-float {
          animation-name: heart-float;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
