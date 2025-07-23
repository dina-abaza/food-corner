
   
   
   

import React from "react"
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function HeaderNav() {
  return (
    <div className="w-full h-7 flex justify-between items-center bg-pink-900 text-white font-bold px-2">
      <div className="flex gap-4 justify-center items-center w-1/3 text-xs sm:text-sm">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="text-white" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="text-white" />
        </a>
      </div>

      <h2 className="text-[10px] sm:text-xs text-end w-2/3">
        حديقة المدفعية، شارع الصاعقة، دخلة شيراتون من طريق السويس، امام موقف ٤ ونص مساكن
      </h2>
    </div>
  )
}
