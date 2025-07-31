
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import useUserAuthStore from "../../auth/authStore";

export default function MainNav() {
  const { user, clearAuth } = useUserAuthStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <div className="w-full flex justify-between items-center h-16 px-4 bg-black/50 relative">

      <div className="flex gap-4 items-center">
        {user && (
          <span className="text-white text-sm md:text-lg">
            {t("welcome", { name: user.name })}
          </span>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-pink-900 text-white px-3 py-1.5 rounded hover:bg-transparent transform duration-300 text-sm"
          >
            {t("logout")}
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="border border-pink-900 px-3 py-1.5 text-sm text-white rounded">
                {t("login")}
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-pink-900 text-white px-3 py-1.5 rounded text-sm">
                {t("register")}
              </button>
            </Link>
          </>
        )}

        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language}
          className="bg-transparent  border-b  border-white text-pink-500 px-2 py-1 text-sm rounded outline-none"
        >
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex gap-5 items-center text-white font-bold p-4">
          <li className="nav-link">
            <Link to="/home">{t("home")}</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">{t("about")}</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">{t("contact")}</Link>
          </li>
          <li className="nav-link">
            <Link to="/menu">{t("menu")}</Link>
          </li>
          <li className="nav-link">
            <Link to="/reservation">{t("reservation")}</Link>
          </li>
        </ul>
      </div>

      <div
        className="md:hidden text-white text-2xl cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {menuOpen && (
        <div
          className="absolute top-16 right-0 bg-transparent w-full text-white p-4 flex flex-col gap-4 font-bold z-40 md:hidden"
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded"
          >
            {t("home")}
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded"
          >
            {t("about")}
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded"
          >
            {t("contact")}
          </Link>
          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded"
          >
            {t("menu")}
          </Link>
          <Link
            to="/reservation"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded"
          >
            {t("reservation")}
          </Link>
        </div>
      )}
    </div>
  );
}
