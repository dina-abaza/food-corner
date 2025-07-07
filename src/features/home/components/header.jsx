import React from "react";

export default function HeaderHome(){
    return(
        <div className="relative -mt-72 w-full min-h-screen bg-[url('/home.jpg')] bg-cover bg-center bg-fixed -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 "/>
            <div className="absolute top-1/3 right-1/4 flex flex-col justify-center items-center gap-y-14">
                <h1 className="text-white font-bold text-7xl">اصل لمطعم الايطالي</h1>
                <div className=" flex justify-center items-center gap-14 ">
                    <button className="text-white bg-pink-800 font-bold text-xl rounded-full ">قائمةالطعام</button>
                    <button className="text-pink-800 bg-white font-bold text-xl rounded-full">احجز لان</button>
                </div>
            </div>

        </div>
    )
}