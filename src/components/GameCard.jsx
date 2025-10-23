import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const GameCard = ({ game }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
    >
    
      
      {/* Card Container */}
      <div className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 group-hover:border-transparent">
        
        {/* Image Container */}
        <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-slate-800">
          {inView && (
            <>
              <img
                src={game.thumbnail}
                alt={game.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setLoaded(true)}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-slate-900 via-gray-100/50 dark:via-slate-900/50 to-transparent"></div>
              
              {/* Animated Glow Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
            </>
          )}
          
          {/* Category Badge with Neon Effect */}
          <div className="absolute top-3 left-3">
            <span className="relative px-3 py-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-lg border border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-300">
              {game.category}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-4">
          
          {/* Title with Neon Glow on Hover */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300 drop-shadow-[0_0_8px_rgba(6,182,212,0)] group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
            {game.title}
          </h2>

          {/* Stats/Info Bar */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.8</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <span>2.5k</span>
            </div>
          </div>

          {/* Play Button with Reduced Shadow */}
          <Link
            to={`/game/${game.slug}`}
            className="relative block w-full"
          >
            <button className="relative flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform group-hover:scale-[1.02]">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Play Now
            </button>
          </Link>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default GameCard;
