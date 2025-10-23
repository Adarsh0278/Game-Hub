import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/gameSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.games.search);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={e => dispatch(setSearch(e.target.value))}
        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
      />
    </div>
  );
};

export default SearchBar;
