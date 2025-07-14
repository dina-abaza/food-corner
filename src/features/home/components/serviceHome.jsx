
import React from "react";
import {
  FaCalendarAlt,
  FaUtensils,
  FaCreditCard,
  FaGlassCheers,
} from "react-icons/fa";

export default function ServiceHome() {
  return (
    <div
      className="relative bg-cover bg-center bg-fixed w-full h-[500px]"
      style={{ backgroundImage: "url('/lap.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <h1 className="absolute top-8 left-1/2 -translate-x-1/2 text-white text-3xl font-bold ">
        أفضل خدمات مطعمنا
      </h1>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap gap-6 justify-center items-start w-full px-6 text-center text-white  max-w-7xl">
        <div className="flex flex-col justify-center items-center gap-y-2 w-[200px]">
          <div className="border-2 border-dotted border-gray-300 rounded-full p-4 mb-5">
            <FaCalendarAlt className="text-4xl text-orange-500" />
          </div>
          <h1 className="font-semibold text-pink-800 text-3xl">اختر الأيام المتاحة</h1>
          <p className="text-xl">تحقق من التواريخ المتاحة للحجز</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-2 w-[200px]">
          <div className="border-2 border-dotted border-gray-300 rounded-full p-4 mb-5">
            <FaUtensils className="text-4xl text-green-500" />
          </div>
          <h1 className="font-semibold text-pink-800 text-3xl">أضف عناصر القائمة</h1>
          <p className="text-xl">
            أضف العناصر المفضلة لديك، بما في ذلك الأطباق الخاصة والمشروبات
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-2 w-[200px]">
          <div className="border-2 border-dotted border-gray-300 rounded-full p-4 mb-5">
            <FaCreditCard className="text-4xl text-blue-500" />
          </div>
          <h1 className="font-semibold text-pink-800 text-3xl">ادفع عبر الإنترنت</h1>
          <p className="text-xl">
            انتقل إلى الخروج وادفع المبلغ الكامل لتأمين حجزك
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-2 w-[200px]">
          <div className="border-2 border-dotted border-gray-300 rounded-full p-4 mb-5">
            <FaGlassCheers className="text-4xl text-purple-500" />
          </div>
          <h1 className="font-semibold text-pink-800 text-3xl">استمتع بتجربة فريدة</h1>
          <p className="text-xl">
            استمتع بتجربة تناول الطعام المميزة مع عائلتك وأصدقائك
          </p>
        </div>
      </div>
    </div>
  );
}
