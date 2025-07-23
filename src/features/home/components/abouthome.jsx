
import React from "react";

export default function AboutHome() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-12 px-4 md:px-6 py-10">

    
      <div className="w-full md:w-1/3 flex flex-col gap-y-6 text-center md:text-right">
        <h1 className="text-2xl md:text-3xl font-bold">عن مطعمنا</h1>
        <h3 className="text-lg md:text-xl font-semibold">مرحبا بك في فود كورنر</h3>
        <p className="text-gray-950 text-sm md:text-base leading-relaxed">
          نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل والمبتكر.
          في مطعم فود كورنر، نقدم لكم لمسة من الجمال والاصل لطعم الاكل الايطالي
          مع لمسة من الإبداع والتجديد في كل طبق
        </p>
      </div>

      
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center gap-3 md:ml-20">
        
    
        <div className="w-full md:w-1/2 h-64 md:h-[300px]">
          <img
            src="/rool.jpg"
            alt="rool"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

      
        <div className="flex flex-row md:flex-col w-full md:w-1/2 h-64 md:h-[300px] gap-3">
          <img
            src="/pasta.jpg"
            alt="pasta"
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/pizza.jpg"
            alt="pizza"
            className="w-1/2 md:w-full h-full md:h-1/2 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

    </div>
  );
}
