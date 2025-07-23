import React from "react";

export default function PageHeader({ title, subtitle }) {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url('/registeer.jpg')` }}
    >
      
      <div className="absolute inset-0 bg-black/60" />

      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-2xl md:text-4xl font-bold mt-32 sm:mt-16">
          
          <span className="animate-typewriter hide-caret block sm:hidden">{title}</span>

        </h1>

        {subtitle && (
          <p className="text-lg mt-10 md:mt-5 hidden sm:block">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

