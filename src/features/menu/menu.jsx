
import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../../reusableComponents/pageHeader";

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
        console.log("Fetched categories:", response.data);
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
        console.log("Fetching meals for category ID:", categoryId);

        const response = await axios.get(
          `https://restaurantapi-production-f574.up.railway.app/api/categories/${categoryId}/meals`
        );

        console.log("Fetched meals:", response.data);
        setMeals(response.data.meals|| []);
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

  const prevIndex =
    (activeIndex - 1 + categories.length) % categories.length;
  const nextIndex = (activeIndex + 1) % categories.length;

  return (
    <div>
      <PageHeader title="المنيو" subtitle="تمتع بافضل الاصناف " />

      <div className="flex items-center justify-center gap-0.5 sm:gap-40 mb-6 mt-16">
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

      <div className="flex justify-center items-center p-4 bg-white mt-20 flex-wrap gap-6">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.id}
              className="group relative rounded-lg p-4 flex flex-col justify-around mx-auto h-30 w-40 cursor-pointer bg-white text-pink-800 overflow-hidden shadow hover:shadow-lg transition-shadow duration-400"
            >
              <div className="absolute inset-0 bg-[url('/menu.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              <h3 className="text-lg font-semibold relative z-10 mb-1">
                {meal.name}
              </h3>
              <p className="relative text-lg font-bold z-10">
                {meal.price} جنيه
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            لا توجد وجبات لعرضها
          </p>
        )}
      </div>
    </div>
  );
}
