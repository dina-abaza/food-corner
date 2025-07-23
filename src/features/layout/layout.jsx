import React from "react";
import Navbar from "./navbar";
import BackToTop from "./backToTop";
import Footer from "./footer";
import EmailHome from "../home/components/emailHome";
import WrapperAnimation from "../../reusableComponents/wrapperAnimation";
import { Outlet, useLocation } from "react-router-dom";


export default function LayOut() { 

 const location = useLocation(); 


  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10">
      <Navbar />
      
      <WrapperAnimation key={location.pathname}>
        <Outlet />
      </WrapperAnimation>

      <EmailHome />
      <Footer />
      <BackToTop />
    </div>
  );
}
