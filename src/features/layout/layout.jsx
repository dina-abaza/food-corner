import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function LayOut(){
    return(
        <div className=" min-h-screen w-full  ">
            <Navbar/>
            <Outlet />
        </div>

    )
}