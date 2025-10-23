import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Categories = lazy(() => import("../pages/Categories"));
const GameDetail = lazy(() => import("../pages/GameDetail"));
const About = lazy(() => import("../pages/About"));
const CategorieLists = lazy(() => import("../pages/CategorieLists"));

const AppRoutes = () => (
  <Suspense fallback={<div className="text-center mt-10 text-gray-600 dark:text-gray-400">Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:slug" element={<CategorieLists />} />
      <Route path="/game/:slug" element={<GameDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
