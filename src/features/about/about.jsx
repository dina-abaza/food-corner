import React from "react";
import PageHeader from "../../reusableComponents/pageHeader";

export default function About() {
  return (
    <div>
      <PageHeader
        title="عن فودكورنر"
        subtitle="استمتع بأجود الاطعمه الايطاليه "
      />

      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-10 p-5">

        
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center gap-4">

          <div className="w-full md:w-1/2 h-[250px]">
            <img
              src="/rool.jpg"
              alt="rool"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2 gap-4 h-[250px]">
            <img
              src="/pasta.jpg"
              alt="pasta"
              className="w-full h-1/2 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/pizza.jpg"
              alt="pizza"
              className="w-full h-1/2 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

    
        <div className="w-full md:w-1/2 flex flex-col gap-y-4 p-2 text-right" dir="rtl">
          <h3 className="text-pink-800 text-center text-xl font-bold">
            مرحبا بكم في فودكورنر
          </h3>
          <h1 className="font-extrabold text-center text-lg">عن فودكورنر</h1>
          <p>
            نحن هنا لنأخذكم في رحله الي ايطاليا لتذوق اصل المطعم الايطالي بمذاق مختلف
            ومتنوع. أطباقنا شهيه وتتمتع بالاصناف الصحيه الطبيعيه الخاليه من أي مواد
            مصنعه نباتيه، حفاظًا على سلامة ضيوفنا. نتمنى لكم تجربه ممتعه مع أطباقنا
            لدوام زيارتكم.
          </p>
          <h2 className="font-bold">احجز مكانك في حجوجه الآن</h2>
          <h3>الطريقة للحجز عبر البريد الإلكتروني؟</h3>
          <ul className="list-disc pl-5">
            <li>اختر الأيام المتاحة: تحقق من التواريخ المتاحة للحجز.</li>
            <li>
              أضف عناصر القائمة: أضف العناصر المفضلة لديك، بما في ذلك الأطباق الخاصة
              والمشروبات.
            </li>
            <li>ادفع عبر الإنترنت: انتقل إلى الخروج وادفع المبلغ الكامل لتأمين حجزك.</li>
            <li>
              استمتع بتجربة فريدة: استمتع بتجربة تناول الطعام المميزة مع عائلتك
              وأصدقائك.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
