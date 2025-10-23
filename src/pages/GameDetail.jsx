import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import games from "../data/games";

const GameDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.slug === slug);
  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(true);
  const iframeContainerRef = useRef(null);

  // Auto fullscreen when game loads on mobile
  const autoFullscreenOnMobile = async () => {
    try {
      const container = iframeContainerRef.current;
      if (!container) return;

      // Check if device is mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 768;

      if (isMobile) {
        // Request fullscreen with cross-browser support
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          await container.webkitRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
          await container.mozRequestFullScreen();
        } else if (container.msRequestFullscreen) {
          await container.msRequestFullscreen();
        }
      }
    } catch (error) {
      console.log("Fullscreen not available:", error);
    }
  };

  // Handle Load Game button click
  const handleLoadGame = () => {
    setPlay(true);
    // Wait a moment for iframe container to render, then go fullscreen
    setTimeout(() => {
      autoFullscreenOnMobile();
    }, 100);
  };

  if (!game)
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <p className="text-center text-lg dark:text-gray-300">
          Game not found 😢
        </p>
      </div>
    );

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 min-h-screen">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-4 flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 active:scale-95 transition-all min-h-[44px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>

      {/* Game Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 dark:text-white text-center">
        {game.title}
      </h1>

      {/* Category */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
        {game.category}
      </p>

      {/* Game Area */}
      <div className="w-full max-w-5xl">
        {!play ? (
          <div className="flex flex-col items-center justify-center py-12">
            <button
              onClick={handleLoadGame}
              className="bg-blue-500 dark:bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 active:scale-95 transition-all shadow-lg text-lg min-h-[44px]"
            >
              🎮 Load Game
            </button>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Game will open in fullscreen on mobile
            </p>
          </div>
        ) : (
          <div className="w-full">
            {/* Responsive iframe container - optimized for ads and controls */}
            <div
              ref={iframeContainerRef}
              className="relative w-full bg-black"
              style={{
                paddingTop: "56.25%", // 16:9 aspect ratio
                minHeight: "300px", // Ensure minimum height for mobile
              }}
            >
              {/* Loading overlay */}
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/90 to-black/80 text-white z-50">
                  <div className="animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full mb-4"></div>
                  <p className="text-base animate-pulse font-medium">
                    🎮 Loading {game.title}...
                  </p>
                </div>
              )}

              {loading && (
  <div className="absolute inset-0 bg-black/90 flex items-center justify-center text-white z-10">
    Loading game...
  </div>
)}
<iframe
  src={game.embedUrl}
  title={game.title}
  onLoad={() => setLoading(false)}
  className="absolute top-0 left-0 w-full h-full border-0"
  allowFullScreen
/>
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 text-center">
                💡 <strong>Tip:</strong> Press ESC to exit fullscreen • Rotate
                phone for better view
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Game Description */}
      <p className="mt-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 text-center max-w-3xl px-4">
        {game.description}
      </p>

      {/* Controls Guide */}
      <div className="mt-8 w-full max-w-3xl px-4">
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-3 dark:text-white">
            📋 Controls
          </h2>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▸</span>
              <span>
                <strong>Desktop:</strong> Use arrow keys or WASD to move
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▸</span>
              <span>
                <strong>Mobile:</strong> Use on-screen touch controls
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▸</span>
              <span>
                <strong>Fullscreen:</strong> Automatically enabled on mobile
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">▸</span>
              <span>
                <strong>Exit:</strong> Press ESC key or back button
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
