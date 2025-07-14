import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import BackToTop from "./backToTop";
import Footer from "./footer";
import EmailHome from "../home/components/emailHome";


export default function LayOut(){
    return(
        
          <div className="min-h-screen w-full flex flex-col gap-y-10">
              <Navbar/>
              <Outlet />
              <EmailHome/>
              <Footer/>
              <BackToTop/>
          </div>
        
    )
}
