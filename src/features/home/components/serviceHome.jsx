
import React, { useRef } from "react";
import {
  FaCalendarAlt,
  FaUtensils,
  FaCreditCard,
  FaGlassCheers,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function ServiceHome() {
  
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, threshold: 0.3 });


  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const services = [
    {
      icon: <FaCalendarAlt className="text-4xl text-orange-500" />,
      title: "اختر الأيام المتاحة",
      text: "تحقق من التواريخ المتاحة للحجز",
    },
    {
      icon: <FaUtensils className="text-4xl text-green-500" />,
      title: "أضف عناصر القائمة",
      text: "أضف العناصر المفضلة لديك، بما في ذلك الأطباق الخاصة والمشروبات",
    },
    {
      icon: <FaCreditCard className="text-4xl text-blue-500" />,
      title: "ادفع عبر الإنترنت",
      text: "انتقل إلى الخروج وادفع المبلغ الكامل لتأمين حجزك",
    },
    {
      icon: <FaGlassCheers className="text-4xl text-purple-500" />,
      title: "استمتع بتجربة فريدة",
      text: "استمتع بتجربة تناول الطعام المميزة مع عائلتك وأصدقائك",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center bg-fixed w-full py-16"
      style={{ backgroundImage: "url('/lap.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center gap-12 px-4 text-white text-center">
        <h1 className="text-2xl md:text-3xl font-bold">أفضل خدمات مطعمنا</h1>

        <div className="flex flex-wrap justify-center items-start gap-6 max-w-6xl w-full">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col justify-center items-center gap-y-2 w-[200px]"
            >
              <div className="border-2 border-dotted border-gray-300 rounded-full p-4 mb-5">
                {service.icon}
              </div>
              <h2 className="font-semibold text-white text-xl">{service.title}</h2>
              <p className="text-sm">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
