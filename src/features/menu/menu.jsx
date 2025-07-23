import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../../reusableComponents/pageHeader";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categoryImages = {
    "حلويات": "/حلويات.jpg",
    "سناكس": "/سناكس.jpg",
    "بيتزا": "/بيتزا.jpg",
    "باستا": "/باستا.jpg",
    "مشروبات": "/مشروبات.jpg",
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "https://restaurantapi-production-f574.up.railway.app/api/categories"
        );
        setCategories(response.data.data);
        setError("");
      } catch (err) {
        console.error("خطأ في جلب التصنيفات", err);
        setError("حدث خطأ أثناء تحميل التصنيفات.");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;

    async function fetchMeals() {
      try {
        const categoryId = categories[activeIndex]?.id;
        const response = await axios.get(
          `https://restaurantapi-production-f574.up.railway.app/api/categories/${categoryId}/meals`
        );
        setMeals(response.data.meals || []);
        setError("");
      } catch (error) {
        console.error("خطأ في جلب الأصناف", error);
        setMeals([]);
        setError("حدث خطأ أثناء تحميل الأصناف.");
      }
    }

    fetchMeals();
  }, [activeIndex, categories]);

  function prev() {
    if (categories.length === 0) return;
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  }

  function next() {
    if (categories.length === 0) return;
    setActiveIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  }

  if (loading) {
    return <p className="text-center mt-10">جاري تحميل التصنيفات...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 mt-10">{error}</p>;
  }

  const prevIndex = (activeIndex - 1 + categories.length) % categories.length;
  const nextIndex = (activeIndex + 1) % categories.length;

  return (
    <div className="overflow-x-hidden">
      <PageHeader title="المنيو" subtitle="تمتع بافضل الاصناف " />

      {/* التصنيفات */}
      <div className="flex items-center justify-center gap-0.5 sm:gap-40 my-16">
        <button
          onClick={prev}
          className="text-lg font-bold p-1 md:p-2 rounded-full md:bg-pink-100 md:hover:bg-pink-200"
          aria-label="السابق"
        >
          &lt;
        </button>

        <div className="flex gap-6 md:gap-20">
          {[prevIndex, activeIndex, nextIndex].map((index, i) => {
            const category = categories[index];
            if (!category) return null;
            return (
              <div
                key={index}
                className={`w-20 h-16 rounded-full flex items-center justify-center font-bold text-black select-none border overflow-hidden ${
                  i === 1 ? "scale-110 text-pink-800" : "opacity-50"
                }`}
              >
                <img
                  src={categoryImages[category.name] || "/images/default.jpg"}
                  alt={category.name}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="text-lg font-bold p-1 md:p-2 rounded-full md:bg-pink-100 md:hover:bg-pink-200"
          aria-label="التالي"
        >
          &gt;
        </button>
      </div>

    
      <div className="flex flex-wrap justify-center gap-4 px-4 pb-8 bg-white mt-20 min-h-[150px]">
        
        {meals.length > 0 ? (
          <AnimatePresence >
            {meals.map((meal) => (
              <motion.div
              key={meal.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-lg p-2 flex flex-col justify-around w-[160px] h-[120px] bg-white text-pink-800 overflow-hidden shadow hover:shadow-lg"

              >
            <div className="absolute inset-0 bg-[url('/menu.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
              <h3 className="text-base font-semibold relative z-10 text-center">
                {meal.name}
              </h3>
              <p className="text-sm font-bold relative z-10 text-center">
                  {meal.price} جنيه
              </p>
              </motion.div>
          ))}
          </AnimatePresence>
        ) : (
        <p className="text-center text-gray-500 w-full">لا توجد وجبات لعرضها</p>
        )}
        </div>

    </div>
  );
}
