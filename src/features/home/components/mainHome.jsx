
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import MealCard from "../../../reusableComponents/mealCard";

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
        setMeals(selectedCategory ? res.data.meals || [] : res.data.data || []);
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
          <p className="text-center w-full text-gray-500">
            لا يوجد تصنيفات متاحة
          </p>
        )}
      </div>

      {/* عرض الوجبات */}
      <div className="flex flex-wrap justify-center px-4 bg-white">
        <AnimatePresence>
          {meals.length > 0 ? (
            meals.map((meal) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="w-[160px] sm:w-[200px] mx-2 mb-6"
              >
                <MealCard meal={meal} /> {/* ✅ استخدام الكمبوننت */}
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
