import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

// Auto-advance interval in milliseconds
const AUTO_ADVANCE_INTERVAL = 5000;

const slides = [
  {
    id: 1,
    videoSrc: "https://video-previews.elements.envatousercontent.com/68a75462-b871-455c-85b6-09a3719290b6/watermarked_preview/watermarked_preview.mp4",
    gameSlug: "stunt-paradise",
    title: "Sky High Dreams",
    subtitle: "Rise above limits and chase your passion.",
    buttonText: "Play Now!",
  },
  {
    id: 2,
    videoSrc: "https://assets.mixkit.co/videos/5384/5384-720.mp4",
    gameSlug: "ovo-adventure",
    title: "Explore Nature",
    subtitle: "Discover the untamed beauty of the wild world.",
    buttonText: "Play Now!",
  },
  {
    id: 3,
    videoSrc: "https://video-previews.elements.envatousercontent.com/597b6260-f948-45e5-bafb-d849e0ffdb5c/watermarked_preview/watermarked_preview.mp4",
    gameSlug: "super-racing",
    title: "Adventure Awaits",
    subtitle: "Get ready for your next thrilling journey.",
    buttonText: "Play Now!",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsPlaying(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(true);
  };

  const handlePlayClick = () => {
    const gameSlug = slides[current].gameSlug;
    navigate(`/game/${gameSlug}`);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_ADVANCE_INTERVAL);

    return () => clearInterval(timer);
  }, [current, isPlaying]);

  const currentSlide = slides[current];

  return (
    <div className="relative w-full h-[50vh] overflow-hidden text-white">
      {/* Background Video */}
      <video
        key={currentSlide.videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-700"
        src={currentSlide.videoSrc}
        autoPlay
        loop
        muted
        onError={(e) => {
          console.error("Video loading error:", e);
          nextSlide();
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-2xl shadow-lg max-w-xl backdrop-blur-md bg-white/10"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
              {currentSlide.title}
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-6">
              {currentSlide.subtitle}
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayClick}
              className="bg-white text-black dark:bg-slate-900 dark:text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-slate-800 transition"
            >
              {currentSlide.buttonText}
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex gap-3 mt-8 items-center">
          <button
            onClick={prevSlide}
            className="px-3 py-1 rounded-lg text-2xl hover:bg-white/20 backdrop-blur-sm transition"
          >
            <FaCaretLeft />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-white scale-110" : "bg-white/40"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="px-3 py-1 rounded-lg text-2xl hover:bg-white/20 backdrop-blur-sm transition"
          >
            <FaCaretRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
