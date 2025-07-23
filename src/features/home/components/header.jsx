import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useUserAuthStore from "../../auth/authStore";

export default function HeaderHome() {
  const { token } = useUserAuthStore();
  const navigate = useNavigate();

  function handleBookingClick() {
    if (token) {
      navigate("/reservation");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[url('/home.jpg')] bg-cover bg-center bg-fixed">
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      
    <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-10 z-10 mt-40 md:mt-0 px-4">
      <h1 className="text-white font-bold text-2xl md:text-5xl text-center">
    اصل المطعم الايطالي</h1>

  <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14">
    <Link to="/menu.pdf" target="_blank" rel="noopener noreferrer">
      <button className="text-white bg-pink-800 font-bold text-base md:text-xl rounded-full px-5 py-2 md:px-6 md:py-2 hover:bg-pink-700 transition">
        قائمة الطعام
      </button>
    </Link>

    <button
      onClick={handleBookingClick}
      className="text-pink-800 bg-white font-bold text-base md:text-xl rounded-full px-5 py-2 md:px-6 md:py-2 hover:bg-pink-100 transition"
    >
      احجز الآن
    </button>
  </div>
</div>

    </div>
  );
}
