import React from "react";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <div className="w-full flex justify-between items-center h-16 px-4 bg-black/50">

    
      <div className="flex gap-2 items-center">
        <button className="border border-pink-900 px-3 py-1 text-sm text-white rounded">
          تسجيل دخول
        </button>
        <button className="bg-pink-900 text-white px-3 py-1  rounded">
          انشاء حساب
        </button>
        <button className="text-white px-3 py-1 hover:underline">English</button>
      </div>

    
      <div className="flex items-center">
        <ul className="flex gap-5 items-center text-white font-bold p-4">
          <li className="nav-link"><Link to="home">الرئيسيه</Link></li>
          <li className="nav-link"><Link to="#">عن موقعنا</Link></li>
          <li className="nav-link"><Link to="#">تواصل معنا</Link></li>
          <li className="nav-link"><Link to="#">المنيو</Link></li>
          <li className="nav-link"><Link to="#">الحجز</Link></li>
        </ul>
      </div>

    </div>
  );
}
