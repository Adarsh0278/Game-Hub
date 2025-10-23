import { useParams, Link } from "react-router-dom";
import games from "../data/games";
import { slugify } from "../utils/slugify";

const CategorieLists = () => {
  const { slug } = useParams();

  // filter based on category
  const filteredGames = (() => {
    if (!slug) return games;
    const normalized = slug.toLowerCase();
    if (normalized === "all") return games;
    return games.filter((game) => slugify(game.category) === normalized);
  })();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1120] via-[#0f1729] to-[#0b1120] text-white py-16 px-6">
      {/* title */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold mb-3 tracking-wide bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
          {slug === "all" ? "All Games" : `${slug} Games`}
        </h1>
        <p className="text-slate-400 text-lg">
          Explore the best {slug} games — dive in and play now!
        </p>
      </div>

      {/* grid */}
      {filteredGames.length === 0 ? (
        <p className="text-center text-slate-400">
          No games found in this category 😢
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group relative bg-[#141b2d] rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              <div className="absolute top-3 left-3 bg-cyan-600/80 px-3 py-1 rounded-md text-xs uppercase font-bold tracking-wider">
                {game.category}
              </div>

              <div className="relative z-10 p-5">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {game.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Play and experience fun in the {game.category} world!
                </p>

                <Link
                  to={`/game/${game.slug}`}
                  className="block w-full mt-auto"
                >
                  <button className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    Play Now
                  </button>
                </Link>
              </div>

              {/* Glow ring on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorieLists;
