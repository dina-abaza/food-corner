import React from "react";
import { Link } from "react-router-dom";

export default function HeaderHome(){
    return(
        <div className="relative  w-full min-h-screen bg-[url('/home.jpg')] bg-cover bg-center bg-fixed ">
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 "/>

            <div className="absolute top-1/3 right-1/4 flex flex-col justify-center items-center gap-y-14">
                <h1 className="text-white font-bold text-7xl">اصل المطعم الايطالي</h1>

                <div className=" flex justify-center items-center gap-14 ">

                   <Link to="/register">
                   <button className="text-white bg-pink-800 font-bold text-xl rounded-full ">قائمةالطعام</button>
                   </Link> 

                   <Link to="/login">
                     <button className="text-pink-800 bg-white font-bold text-xl rounded-full">احجز الان</button>
                     </Link>

                </div>
            </div>

        </div>
    )
}