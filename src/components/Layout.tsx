import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileSection from "./ProfileSection";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  const isArticlesPage = location.pathname === "/articles";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Mandy Chew
          </Link>
          <nav className="flex space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium ${isHomePage ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Home
            </Link>
            <Link
              to="/articles"
              className={`text-sm font-medium ${isArticlesPage ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Articles
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Mandy Chew. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/in/mandy-chew/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
