
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useUserAuthStore from "../../auth/authStore";

export default function MainNav() {
  const { user, clearAuth } = useUserAuthStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <div className="w-full flex justify-between items-center h-16 px-4 bg-black/50 relative">
      
      <div className="flex gap-2 items-center">
        {user && <span className="text-white text-sm md:text-lg">welcome {user.name}</span>}

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-pink-900 text-white px-3 py-1.5 rounded hover:bg-transparent transform duration-300 text-sm"
          >
            تسجيل خروج
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="border border-pink-900 px-3 py-1.5 text-sm text-white rounded">
                تسجيل دخول
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-pink-900 text-white px-3 py-1.5 rounded text-sm">
                إنشاء حساب
              </button>
            </Link>
          </>
        )}

        <Link to="/en">
          <button className="text-white px-3 py-1 hover:underline text-sm">
            English
          </button>
        </Link>
      </div>

      
      <div className="hidden md:flex items-center">
        <ul className="flex gap-5 items-center text-white font-bold p-4">
          <li className="nav-link"><Link to="/home">الرئيسية</Link></li>
          <li className="nav-link"><Link to="/about">عن موقعنا</Link></li>
          <li className="nav-link"><Link to="/contact">تواصل معنا</Link></li>
          <li className="nav-link"><Link to="/menu">المنيو</Link></li>
          <li className="nav-link"><Link to="/reservation">الحجز</Link></li>
        </ul>
      </div>

      
      <div className="md:hidden text-white text-2xl cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    
    {menuOpen && (
  <div className="absolute top-16 right-0 bg-transparent w-full text-white p-4 flex flex-col gap-4 font-bold z-40 md:hidden" dir="rtl">
    <Link to="/home" onClick={() => setMenuOpen(false)} className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded">الرئيسية</Link>
    <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded">عن موقعنا</Link>
    <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded">تواصل معنا</Link>
    <Link to="/menu" onClick={() => setMenuOpen(false)} className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded">المنيو</Link>
    <Link to="/reservation" onClick={() => setMenuOpen(false)} className="hover:bg-white/10 hover:scale-105 transition duration-300 px-2 py-1 rounded">الحجز</Link>
  </div>
)}

    </div>
  );
}
