import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Hero from "../components/Hero";
import { useState, Suspense, lazy } from "react";
import Pagination from "../components/Pagination";

const GameCard = lazy(() => import("../components/GameCard"));

const GAMES_PER_PAGE = 12;

const Home = () => {
  const allGames = useSelector((state) => state.games.filteredGames);
  const [currentPage, setCurrentPage] = useState(1);
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll to games section smoothly
    document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Add margin-bottom for space below Hero */}
      <div className="mb-6">
        <Hero />
      </div>

      <SearchBar className="py-6" />
      <CategoryFilter />

      <div
        id="games"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {allGames
          .slice((currentPage - 1) * GAMES_PER_PAGE, currentPage * GAMES_PER_PAGE)
          .map((game) => (
            <Suspense
              key={game.id}
              fallback={
                <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 animate-pulse h-48">
                  <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              }
            >
              <GameCard game={game} />
            </Suspense>
          ))}
      </div>

      {allGames.length > 0 ? (
        <Pagination
          total={allGames.length}
          perPage={GAMES_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      ) : (
        <p className="text-center my-6 text-gray-500 dark:text-gray-400">
          No games found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default Home;
