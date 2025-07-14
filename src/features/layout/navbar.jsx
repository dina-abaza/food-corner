import React from "react";
import HeaderNav from "./components/headerNav";
import MainNav from "./components/mainNav";

export default function Navbar(){
    return(
        <div className="fixed top-0 left-0 w-full z-30">
            <HeaderNav/>
            <MainNav/>
        </div>
    )
}