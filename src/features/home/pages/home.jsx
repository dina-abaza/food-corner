import React from "react";
import HeaderHome from "../components/header";
import AboutHome from "../components/abouthome";
import MainHome from "../components/mainHome";
import ServiceHome from "../components/serviceHome";


export default function Home(){
    return(
        <div className="flex flex-col gap-y-20 ">
            <HeaderHome/>
            <AboutHome/>
            <ServiceHome/>
            <MainHome/>
            
        </div>
    )
}