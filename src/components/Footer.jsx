import { FaTwitter, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches || false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
  try { localStorage.setItem('theme', 'dark'); } catch { /* ignore storage errors */ }
    } else {
      root.classList.remove('dark');
  try { localStorage.setItem('theme', 'light'); } catch { /* ignore storage errors */ }
    }
  }, [dark]);

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-10 border-t border-gray-800">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      {/* Brand / About Section */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-3">🎮 GameHub</h2>
        <p className="text-sm text-gray-400">
          Your ultimate gaming zone — explore, connect, and play with the best
          from the gaming world.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition">Home</a></li>
          <li><a href="#" className="hover:text-white transition">Games</a></li>
          <li><a href="#" className="hover:text-white transition">Community</a></li>
          <li><a href="#" className="hover:text-white transition">Support</a></li>
        </ul>
      </div>

      {/* Socials */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
        <div className="flex justify-center md:justify-start gap-5 text-2xl">
          <a href="#" className="hover:text-white transition"><FaTwitter /></a>
          <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          <a href="#" className="hover:text-white transition"><FaGithub /></a>
          <a href="#" className="hover:text-white transition"><FaDiscord /></a>
        </div>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        &copy; {new Date().getFullYear()} GameHub. All rights reserved.
      </div>

      <div className="flex items-center gap-3 justify-center">
        <button
          onClick={() => setDark(d => !d)}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-800/60 hover:bg-gray-800/80 text-gray-200 transition"
          aria-label="Toggle theme"
        >
          {dark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-200" />}
          <span className="text-sm">{dark ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
