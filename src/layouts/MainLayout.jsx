import { Suspense, lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));

const MainLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Suspense fallback={<div className="text-gray-600 dark:text-gray-400">Loading navbar...</div>}><Navbar /></Suspense>
    <main className="flex-1 container mx-auto p-4">{children}</main>
    <Suspense fallback={<div className="text-gray-600 dark:text-gray-400">Loading footer...</div>}><Footer /></Suspense>
  </div>
);

export default MainLayout;
