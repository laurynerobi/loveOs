// Framer Motion handles animations and transitions
import { motion, AnimatePresence } from "framer-motion";

// React hook for component state
import { useState } from "react";

/**
 * EnvelopeCard Component
 * ----------------------
 * Displays:
 *  - a floating envelope image
 *  - an emotion label
 *  - a message that slides out when the envelope is clicked
 *
 * Props:
 *  - image: envelope image file
 *  - emotion: emotion label shown under the envelope
 *  - message: text that appears inside the message card
 *  - onClose (optional): callback when envelope closes
 */
const EnvelopeCard = ({ image, emotion, message, onClose }) => {
  // Tracks whether the envelope is opened or closed
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Handles click on the envelope.
   * - Toggles open/close state
   * - Optionally notifies parent component when closing
   */
  const handleClick = () => {
    if (isOpen && onClose) {
      onClose(); // notify parent if provided
    }
    setIsOpen(!isOpen);
  };

  return (
    // Main container for the envelope + message
    <motion.div
      className="relative flex flex-col items-center cursor-pointer"
      onClick={handleClick}
      // Slight scale-up on hover for interactivity
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 220 }}
    >
      {/* 📩 Floating Envelope Image */}
      <motion.img
        src={image}
        alt={emotion}
        // Larger size so envelope feels important
        className="w-56 h-44 md:w-72 md:h-52 drop-shadow-2xl"
        // Continuous floating animation
        animate={{
          y: [0, -10, 0], // up and down movement
          boxShadow: isOpen
            ? "0px 0px 30px rgba(255,182,193,0.7)" // glow when open
            : "none",
        }}
        transition={{
          duration: 3,
          repeat: Infinity, // loops forever
          ease: "easeInOut",
        }}
      />

      {/* Emotion label below the envelope */}
      <p className="mt-4 text-xl font-semibold text-white drop-shadow">
        {emotion}
      </p>

      {/* 💌 Message Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Initial state when message appears
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            // Animation when message is fully visible
            animate={{ opacity: 1, y: -100, scale: 1 }}
            // Exit animation when message disappears
            exit={{ opacity: 0, y: 80, scale: 0.85 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 90,
            }}
            // Styling for the message card
            className="
              absolute
              mt-6
              w-80 md:w-96
              bg-white/85
              backdrop-blur-xl
              rounded-3xl
              shadow-2xl
              px-8 py-6
              border border-pink-200
            "
          >
            {/* Message text */}
            <p className="text-center text-gray-800 text-lg leading-relaxed italic">
              💌 {message}
            </p>

            {/* Small helper text for the user */}
            <p className="mt-4 text-sm text-gray-500 text-center">
              Tap again to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EnvelopeCard;
