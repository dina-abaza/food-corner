
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaEnvelope, FaUtensils, FaCalendarAlt } from "react-icons/fa";
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
    <div className="w-full flex justify-between items-center h-16 px-4 bg-black/50 relative z-50">
      {/* Left: Welcome and Buttons */}
      <div className="flex gap-3 items-center">
        {user && (
          <span className="text-white text-sm md:text-base">
            {t("welcome", { name: user.name })}
          </span>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-pink-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-transparent border border-pink-900 transition duration-300 text-sm md:text-base"
          >
            {t("logout")}
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="border border-pink-900 px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base text-white rounded hover:bg-pink-800 transition duration-300">
                {t("login")}
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-pink-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded text-sm md:text-base hover:bg-pink-800 transition duration-300">
                {t("register")}
              </button>
            </Link>
          </>
        )}

        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language}
          className="bg-transparent border-b border-white text-pink-500 px-2 py-1 text-sm rounded outline-none"
        >
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Middle: Main links (desktop only) */}
      <div className="hidden md:flex items-center">
        <ul className="flex gap-5 items-center text-white font-bold p-4">
          <li><Link to="/home">{t("home")}</Link></li>
          <li><Link to="/about">{t("about")}</Link></li>
          <li><Link to="/contact">{t("contact")}</Link></li>
          <li><Link to="/menu">{t("menu")}</Link></li>
          <li><Link to="/reservation">{t("reservation")}</Link></li>
        </ul>
      </div>

      {/* Right: Hamburger icon (mobile only) */}
      <div
        className="md:hidden text-white text-xl md:text2xl cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes className="mb-14"/> : <FaBars/>}
      </div>

      {/* Mobile menu with icons */}
      {menuOpen && (
        <div
          className="fixed inset-0 p-10 bg-black/70 text-white flex flex-col gap-6 font-bold z-40 md:hidden"
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 px-4 py-2 rounded transition duration-300 flex items-center gap-2"
          >
            <FaHome /> {t("home")}
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 px-4 py-2 rounded transition duration-300 flex items-center gap-2"
          >
            <FaInfoCircle /> {t("about")}
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 px-4 py-2 rounded transition duration-300 flex items-center gap-2"
          >
            <FaEnvelope /> {t("contact")}
          </Link>
          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 px-4 py-2 rounded transition duration-300 flex items-center gap-2"
          >
            <FaUtensils /> {t("menu")}
          </Link>
          <Link
            to="/reservation"
            onClick={() => setMenuOpen(false)}
            className="hover:bg-white/10 px-4 py-2 rounded transition duration-300 flex items-center gap-2"
          >
            <FaCalendarAlt /> {t("reservation")}
          </Link>
        </div>
      )}
    </div>
  );
}
