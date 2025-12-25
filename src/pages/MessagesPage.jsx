import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";
import EnvelopeCard from "../components/EnvelopeCard";
import logo from "../assets/logo.png";
import bgVideo from "../assets/background.mp4";

import envelope1 from "../assets/envelope1.jpg";
import envelope2 from "../assets/envelope2.jpg";
import envelope3 from "../assets/envelope3.jpg";
import envelope4 from "../assets/envelope4.jpg";
import envelope5 from "../assets/envelope5.jpg";
import envelope6 from "../assets/envelope6.jpg";

/**
 * Emotion → Envelope mapping
 */
const EMOTIONS = [
  {
    key: "Self-Doubt",
    image: envelope1,
    message:
      "All things \"Say it with me , - God made a mistake - Yeah sounds crazy right , all things are working for your good. It's intentional , never failing 💖\" are working for your good. Even this moment is intentional.",
  },
  {
    key: "Uncertain",
    image: envelope2,
    message:
      "It's okay to feel lost, you've never been this version of yourself before. I am here if you need to talk things through. Be gentle with yourself.",
  },
  {
    key: "Hope",
    image: envelope3,
    message:
      "I plant hope in the soil of my struggle, waiting for it to bloom🌅. GET THEM RAY , GET THEM RAY",
  },
  {
    key: "Love",
    image: envelope4,
    message:
      "I have found whom my soul loves, I held him and will not let him go 💞. You make me happy and I am always grateful for you",
  },
  {
    key: "Joy",
    image: envelope5,
    message:
      "May this day remind you how far you've come, may you laugh because your body cannot contain the joy. I'm proud of you baby🌙",
  },
  {
    key: "Frustration",
    image: envelope6,
    message:
      "Maybe everything doesn't have to be solved, maybe it's okay to wallow in the mystery✨,let's try again tomorrow , it will meet you gently. I am here for you always",
  },
];

export default function MessagesPage() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(false);

  const emotionData = EMOTIONS.find(
    (e) => e.key === selectedEmotion
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent">
        <ul className="flex justify-center gap-10 py-4 text-gray-200">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <img src={logo} className="h-16" alt="LoveOS Logo" />
          <Link to="/gallery">Gallery</Link>
          <Link to="/messages">Messages</Link>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 px-6 text-center">
        <FloatingHearts slowDown={showEnvelope || sessionEnded} />

        {/* 🧠 Conversation Step */}
        {!selectedEmotion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl md:text-4xl text-white font-semibold mb-6">
              Hey Ray, how are we feeling today?
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {EMOTIONS.map((emotion) => (
                <button
                  key={emotion.key}
                  onClick={() => setSelectedEmotion(emotion.key)}
                  className="px-4 py-3 rounded-xl bg-white/20 backdrop-blur text-white hover:bg-white/30 transition"
                >
                  {emotion.key}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* 💌 Envelope Step */}
        <AnimatePresence>
          {selectedEmotion && !sessionEnded && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-20"
            >
              <p className="text-white mb-8 text-lg">
                Here is a special message from Lolo.
              </p>

              <EnvelopeCard
                image={emotionData.image}
                emotion={emotionData.key}
                message={emotionData.message}
                onClose={() => {
                  setShowEnvelope(false);
                  setTimeout(() => setSessionEnded(true), 600);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🌙 Session Ending */}
        <AnimatePresence>
          {sessionEnded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-32 text-white"
            >
              <h2 className="text-2xl mb-4">
                There is time for everything under the sun.
              </h2>

              <p className="mb-8 opacity-80">
                Hope to see you tomorrow.
              </p>

              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-2 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition"
              >
                Rest for now
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="absolute bottom-4 text-sm text-gray-200 opacity-70">
          Crafted with ❤️ by Lauryne
        </footer>
      </div>
    </div>
  );
}
