
import React, { useEffect, useState } from "react";
import axios from "axios";

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
    ? (res.data.meals) ? res.data.meals : []
    : (res.data.data) ? res.data.data : []
);

      } catch (err) {
        setError(`حدث خطأ أثناء تحميل الوجبات: ${err.message || ""}`);
      }
    }
    fetchMeals();
  }, [selectedCategory]); 

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-800">
        استطعم بأفضل الأسعار
      </h1>

      {error && <div className="text-center text-red-800 mb-4">{error}</div>}

    
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded font-bold text-2xl transition duration-300 ${
            !selectedCategory ? "text-pink-800" : "text-gray-800 hover:text-pink-800"
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
              className={`px-4 py-2 rounded font-bold text-2xl transition duration-300 ${
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

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.id}
              className="group relative rounded-lg p-4 flex flex-col justify-around mx-auto h-30 w-40 cursor-pointer bg-white text-pink-800 overflow-hidden shadow hover:shadow-lg transition-shadow duration-400"
            >
              <div className="absolute inset-0 bg-[url('/menu.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              <h3 className="text-lg font-semibold relative z-10 mb-1">{meal.name}</h3>
              <p className="relative text-lg font-bold z-10">{meal.price} جنيه</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">لا توجد وجبات لعرضها</p>
        )}
      </div>
    </div>
  );
}
