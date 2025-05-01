import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/about", label: t("about") },
    { path: "/roadmap", label: t("roadmap") },
    { path: "/contact", label: t("contact") },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="Lynx Logo" className="h-10 mr-3" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">LYNX</span>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 ${
                location.pathname === path
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {label}
            </Link>
          ))}
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
}

export default Header;
