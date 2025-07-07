import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function MainHome() {
  const { selectedCategory } = useParams();

  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    async function fetchCategories() {
      try {
        const cached = localStorage.getItem("categories");
        if (cached) {
          setCategories(JSON.parse(cached));
          return;
        }

        const res = await axios.get("https://your-backend-link.com/api/categories");
        setCategories(res.data);
        localStorage.setItem("categories", JSON.stringify(res.data));
      } catch (err) {
        console.error("خطأ في تحميل التصنيفات", err);
        setError("خطأ أثناء تحميل التصنيفات");
      }
    }

    fetchCategories();
  }, []);

  
  useEffect(() => {
    async function fetchMeals() {
      try {
        const res = await axios.get("http://localhost:3000/meals", {
          params: selectedCategory ? { category: selectedCategory } : {},
        });
        setMeals(res.data);
      } catch (err) {
        console.error("خطأ في تحميل الوجبات", err);
        setError("خطأ أثناء تحميل الوجبات");
      }
    }

    fetchMeals();
  }, [selectedCategory]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">استطعم بأفضل الأسعار</h1>

      {error && <div className="text-center text-red-800">{error}</div>}

    
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <Link
          to="/"
          className="px-3 py-1 rounded text-pink-800 font-bold text-2xl hover:text-gray-800 transition duration-300 "
        >
          الكل
        </Link>

        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.name}`}
            className="px-3 py-1 rounded text-gray-800 font-bold text-2xl hover:text-pink-800 transition duration-300"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="border rounded-lg shadow-2xl p-4 flex flex-col justify-between h-40 hover:bg-[url('/home.jpg')] hover:bg-cover hover:bg-center transition duration-200"
          >
            <h3 className="text-lg font-semibold">{meal.name}</h3>
            <p className="text-pink-800">{meal.price} جنيه</p>
          </div>
        ))}
      </div>
    </div>
  );
}
