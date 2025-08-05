import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative w-full bg-[url('/home.jpg')] bg-cover bg-center bg-fixed text-white px-6 lg:px-16 pt-12 h-auto pb-10">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative h-full flex flex-col justify-between text-right">
        
      
        <p className="text-lg font-bold leading-loose max-w-5xl ml-auto mr-0 mb-10">
          نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل والمبتكر.
          في مطعم فود كورنر، نقدم لكم لمسة من الحنين إلى الطعم الايطالي
          الاصلي، مع لمسة من الإبداع والتجديد في كل طبق
        </p>

      
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row-reverse items-center gap-2">
              <FaEnvelope className="text-blue-400 text-lg" />
              <h2 className="text-lg font-bold">admin@foodcorner.com</h2>
            </div>
            <div className="flex flex-row-reverse items-center gap-2">
              <FaEnvelope className="text-blue-400 text-lg" />
              <h2 className="text-lg font-bold">support@foodcorner.com</h2>
            </div>
          </div>

          <div className="flex flex-row-reverse items-start gap-2 max-w-md text-right">
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
            <p className="text-lg font-bold">
              حديقة الزهور، شارع المحمود، دخلة شيراتون من طريق القاهره الصحراوي، أمام
              موقف شبرا
            </p>
          </div>
        </div>

        
        <div className="text-lg text-right">
          <p>© 2025 جميع الحقوق محفوظة. سياسة الخصوصية</p>
        </div>
      </div>
    </div>
  );
}
