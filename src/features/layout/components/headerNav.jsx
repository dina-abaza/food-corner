   import React from "react"
   import { FaFacebook, FaInstagram } from 'react-icons/fa';

   export default function HeaderNav(){
    
    return(
       <div className="w-full h-7 flex justify-between items-center bg-pink-900 text-white font-bold">

                <div style={{ fontSize: '15px' }} className="flex gap-7 justify-center items-center w-1/3">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook color="white" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram color="white" />
                    </a>
                </div>

                <h2 className="text-xs">حديقة المدفعية، شارع الصاعقة، دخلة شيراتون من طريق السويس، امام موقف ٤ ونص مساكن</h2>

            </div>
)
   }
   
   
   

