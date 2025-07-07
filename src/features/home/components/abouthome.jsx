
import React from "react";

export default function AboutHome(){
    return(
        <div className="w-full flex justify-center items-center gap-12 px-6 ">

        
            <div className="w-1/3 flex flex-col gap-y-8">
                <h1 className="text-3xl font-bold">عن مطعمنا</h1>
                <h3 className="text-xl font-semibold">مرحبا بك في فود كورنر</h3>
                <p className="text-gray-950">
                  نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل والمبتكر. في مطعم فود كورنر، نقدم لكم لمسة من الجمال والاصل لطعم الاكل الايطالي مع لمسة من الإبداع والتجديد في كل طبق
                </p>
            </div>

            
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

        </div>
    )
}
