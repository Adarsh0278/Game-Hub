import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

// Helper function to safely interact with localStorage
const safeStorage = {
  get: (key, fallback) => {
    try {
      const item = localStorage.getItem(key);
      return item ? item : fallback;
    } catch {
      return fallback;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }
};

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const stored = safeStorage.get("theme", null);
    if (stored) return stored === "dark";
    
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches || false;
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      safeStorage.set("theme", "dark");
    } else {
      root.classList.remove("dark");
      safeStorage.set("theme", "light");
    }
  }, [dark]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/categories", label: "Categories" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-gray-200/20 dark:border-gray-700/40 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wide"
            >
              GameHub
            </motion.span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-[16px] font-medium transition duration-300 ${
                  location.pathname === link.to
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
                  />
                )}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              {dark ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/40"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={toggleMenu}
                  className={`text-lg font-medium ${
                    location.pathname === link.to
                      ? "text-blue-600 dark:text-cyan-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setDark((d) => !d)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200/60 dark:bg-slate-800/70 hover:bg-gray-300/70 dark:hover:bg-slate-700 transition"
              >
                {dark ? (
                  <>
                    <Sun className="h-5 w-5 text-yellow-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-gray-400" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
  