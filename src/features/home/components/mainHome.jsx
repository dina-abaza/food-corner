
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion"; // ⬅️ أضفنا دول

export default function MainHome() {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get(
          "https://restaurantapi-production-f574.up.railway.app/api/categories"
        );
        setCategories(res.data.data);
        localStorage.setItem("categories", JSON.stringify(res.data));
      } catch (err) {
        setError(`حدث خطأ أثناء تحميل التصنيفات: ${err.message || ""}`);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchMeals() {
      try {
        let url =
          "https://restaurantapi-production-f574.up.railway.app/api/meals";

        if (selectedCategory) {
          url = `https://restaurantapi-production-f574.up.railway.app/api/categories/${selectedCategory}/meals`;
        }

        const res = await axios.get(url);
        setMeals(
          selectedCategory
            ? res.data.meals || []
            : res.data.data || []
        );
      } catch (err) {
        setError(`حدث خطأ أثناء تحميل الوجبات: ${err.message || ""}`);
      }
    }
    fetchMeals();
  }, [selectedCategory]);

  return (
    <div className="p-4 sm:p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-800">
        استطعم بأفضل الأسعار
      </h1>

      {error && <div className="text-center text-red-800 mb-4">{error}</div>}

      {/* التصنيفات */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded font-bold text-lg sm:text-2xl transition duration-300 ${
            !selectedCategory
              ? "text-pink-800"
              : "text-gray-800 hover:text-pink-800"
          } bg-white`}
          style={{ boxShadow: "0 0 8px rgba(131, 24, 67, 0.5)" }}
        >
          الكل
        </button>

        {categories.length > 0 ? (
          categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded font-bold text-lg sm:text-2xl transition duration-300 ${
                selectedCategory === cat.id
                  ? "text-pink-800"
                  : "text-gray-800 hover:text-pink-800"
              } bg-white`}
              style={{ boxShadow: "0 0 8px rgba(131, 24, 67, 0.5)" }}
            >
              {cat.name}
            </button>
          ))
        ) : (
          <p className="text-center w-full text-gray-500">لا يوجد تصنيفات متاحة</p>
        )}
      </div>

      
      <div className="flex flex-wrap justify-center px-4 bg-white">

        <AnimatePresence>
          {meals.length > 0 ? (
            meals.map((meal) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-lg p-3 sm:p-4 flex flex-col justify-around mx-auto w-[150px] sm:w-[160px] h-[120px] sm:h-[140px] cursor-pointer bg-white text-pink-800 overflow-hidden shadow hover:shadow-lg transition-shadow duration-400"
              >
                <div className="absolute inset-0 bg-[url('/menu.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

                <h3 className="text-base sm:text-lg font-semibold relative z-10 mb-1 text-center">
                  {meal.name}
                </h3>
                <p className="text-sm sm:text-base font-bold relative z-10 text-center">
                  {meal.price} جنيه
                </p>
              </motion.div>
            ))
          ) : (
            <motion.p
              key="no-meals"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center text-gray-500"
            >
              لا توجد وجبات لعرضها
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
