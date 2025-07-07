import React from "react";
import HeaderHome from "../components/header";
import AboutHome from "../components/abouthome";
import MainHome from "../components/mainHome";

export default function Home(){
    return(
        <div className="flex flex-col gap-y-20 mb-10">
            <HeaderHome/>
            <AboutHome/>
            <MainHome/>
        </div>
    )
}