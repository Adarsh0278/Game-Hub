import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

const CATEGORIES = [
  { id: 1, name: "Action", icon: "⚔", count: 45, description: "Fast-paced combat and reflex games", color: "from-red-500 to-orange-500" },
  { id: 2, name: "Adventure", icon: "🗺", count: 32, description: "Exploration and story-driven experiences", color: "from-green-500 to-teal-500" },
  { id: 3, name: "Puzzle", icon: "🧩", count: 56, description: "Logic and brain-teasing challenges", color: "from-purple-500 to-pink-500" },
  { id: 4, name: "Racing", icon: "🏎", count: 28, description: "High-speed racing and time trials", color: "from-blue-500 to-cyan-500" },
  { id: 5, name: "Casual", icon: "🎲", count: 52, description: "Easy-to-play pick-up-and-play games", color: "from-lime-500 to-green-500" },
];

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredCategories = CATEGORIES
    .filter((cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "count") return b.count - a.count;
      return 0;
    });

  const totalGames = CATEGORIES.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Game Categories
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Browse by genre and discover new games. Click any category to see games in that genre.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700">
              <strong className="text-cyan-500">{CATEGORIES.length}</strong> categories
            </div>
            <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700">
              <strong className="text-cyan-500">{totalGames}+</strong> total games
            </div>
          </div>
        </header>

        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-2 relative">
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-10 border rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white hover:rotate-90 transition-all duration-300 text-xl font-bold bg-slate-700/50 hover:bg-slate-600 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <label className="text-sm text-gray-600 dark:text-slate-300">Sort</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border rounded-xl border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
              >
                <option value="name">Name (A-Z)</option>
                <option value="count">Most Popular</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 text-gray-600 dark:text-slate-400">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-2">No categories found</h3>
              <p className="mb-4">
                We couldn't find any categories matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${slugify(category.name)}`}
                  className="group"
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative bg-white dark:bg-gradient-to-br dark:from-[#1a2332] dark:to-[#1e2a3d] rounded-3xl shadow-xl hover:shadow-2xl border border-gray-200 dark:border-slate-700/50 transition-all duration-700 overflow-hidden transform hover:-translate-y-2 hover:scale-105">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700`}></div>

                    {/* Category Icon/Header */}
                    <div className={`relative bg-gradient-to-r ${category.color} p-8 flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40 group-hover:to-black/50 transition-all duration-700"></div>
                      
                      {/* Icon Animation */}
                      <span className="text-6xl relative z-10 transform group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-1000 filter drop-shadow-2xl">
                        {category.icon}
                      </span>
                    </div>

                    {/* Category Content */}
                    <div className="relative p-6 space-y-4 bg-white dark:bg-gradient-to-b dark:from-[#1a2332] dark:to-[#1e2a3d]">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-105 transform origin-left">
                          {category.name}
                        </h3>
                        <div className="relative">
                          <span className={`px-3 py-1.5 bg-gradient-to-r ${category.color} bg-opacity-12 text-gray-900 dark:text-white rounded-full text-xs font-bold border-2 border-gray-200/20 dark:border-white/10 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110 inline-block shadow-sm`}>
                            {category.count}
                          </span>
                          <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                        {category.description}
                      </p>

                      {/* Play Button */}
                      <div className="pt-3">
                        <div className={`flex items-center justify-between px-4 py-3 bg-gradient-to-r ${category.color} bg-opacity-10 hover:bg-opacity-20 rounded-xl transition-all duration-300 group-hover:shadow-lg border border-gray-200/10 dark:border-white/10 group-hover:border-white/30`}>
                          <span className="text-gray-900 dark:text-white font-bold text-sm">Explore Games</span>
                          <span className="text-gray-900 dark:text-white text-xl transform group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300">→</span>
                        </div>
                      </div>

                      {/* Game Count Indicator */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 pt-2">
                        <div className="flex -space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-white dark:border-[#1e2a3d] flex items-center justify-center text-[10px]">
                              🎮
                            </div>
                          ))}
                        </div>
                        <span className="group-hover:text-cyan-400 transition-colors">+{category.count} games available</span>
                      </div>
                    </div>

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <div className="mt-20 relative overflow-hidden rounded-3xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
          
          <div className="relative px-8 py-20 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6 animate-bounce">🚀</div>
              <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-2xl text-cyan-100 mb-10 leading-relaxed max-w-3xl mx-auto">
                Browse all our games or use the search feature to discover something <span className="font-bold text-white">amazing</span>!
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/games"
                  className="group relative px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold hover:bg-slate-100 transition-all duration-500 shadow-2xl hover:shadow-white/30 transform hover:-translate-y-2 hover:scale-110 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    <span>Browse All Games</span>
                    <span className="text-2xl group-hover:rotate-90 transition-transform duration-500">🎮</span>
                  </span>
                </Link>
                
                <Link
                  to="/"
                  className="group relative px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-500 shadow-2xl transform hover:-translate-y-2 hover:scale-110 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    <span className="text-2xl group-hover:-rotate-45 transition-transform duration-500">🏠</span>
                    <span>Back to Home</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
