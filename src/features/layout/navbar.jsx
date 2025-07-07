import React from "react";
import HeaderNav from "./components/headerNav";
import MainNav from "./components/mainNav";

export default function Navbar(){
    return(
        <div className=" flex flex-col gap-y-0 justify-items-start w-full h-72 ">
            <HeaderNav/>
            <MainNav/>
        </div>
    )
}