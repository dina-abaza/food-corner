import React from "react";
import PageHeader from "../../reusableComponents/pageHeader";

export default function About(){
    return(
        <div >
            <PageHeader
            title="عن فودكورنر"
            subtitle="استمتع بأجود الاطعمه الايطاليه "
            />


            <div className="w-full flex justify-center items-center gap-20 mx-auto mt-20 p-5">
        
            <div className="w-1/2 flex justify-center items-center h-[300px] gap-3 ml-20">

                
                <div className="h-full w-1/2">
                    <img 
                      src="/rool.jpg"
                      alt="rool"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

            
                <div className="flex flex-col h-full w-1/2 gap-2">
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

            <div className="flex flex-col gap-y-3 w-1/2 p-5 " dir="rtl">
                <h3 className="text-pink-800 text-center text-xl font-bold">مرحبا بكم في فودكورنر</h3>
                <h1 className="font-extrabold text-center text-lg ">عن فودكورنر</h1>
                <p>نحن هنا لنأخذكم في رحله الي ايطاليا لتذوق اصل المطعم الايطالي بمذاق مختلف ومتنوع ز اطباقنا شهيه وتتمتع بالاصناف الصحيه الطبيعيه خاليه من اي مواد مصنعه نباتيه حفاظا علي سلامة ضيوفنا ز نتمني لكم تجربه ممتعه مع اطباقنا لدوام زيارتنا.</p>
                <h2 className="font-bold">احجز مكانك في حجوجه الان</h2>
                <h3>الطريقه للحجز عبر البريد لالكتروني؟</h3>
                <ul className="list-disc pl-5">
                    <li>اختر الأيام المتاحة: تحقق من التواريخ المتاحة للحجز.</li>
                    <li> أضف عناصر القائمة: أضف العناصر المفضلة لديك، بما في ذلك الأطباق الخاصة والمشروبات.</li>
                    <li> ادفع عبر الإنترنت: انتقل إلى الخروج وادفع المبلغ الكامل لتأمين حجزك.</li>
                    <li>استمتع بتجربة فريدة: استمتع بتجربة تناول الطعام المميزة مع عائلتك وأصدقائك.</li>
                </ul>
            </div>

            </div>
        </div>
    )
}