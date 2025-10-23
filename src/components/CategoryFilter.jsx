import { useDispatch } from "react-redux";
import { filterByCategory } from "../redux/gameSlice";

const categories = [
  "All",
  "Action",
  "Adventure",
  "Puzzle",
  "Arcade",
  "Racing",
  "Strategy",
  "Sports",
];

const CategoryFilter = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="
        flex space-x-2 mb-6
        overflow-x-auto overflow-y-hidden
        scrollbar-hide
        justify-start
        px-2
        snap-x snap-mandatory
      "
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => dispatch(filterByCategory(cat))}
          className="
            flex-shrink-0
            px-3 py-1
            bg-gray-200 dark:bg-gray-700
            text-gray-800 dark:text-gray-200
            rounded-lg
            hover:bg-blue-500 dark:hover:bg-blue-600
            hover:text-white
            transition-colors
            snap-start
          "
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
