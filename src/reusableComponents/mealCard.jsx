import React from "react";

const mealImages = {
  "بيتزا مارجريتا": "/pizza.jpg",
  "بيتزا بيبروني": "/pizza2.jpg",
  "بيتزا خضار": "/pizza3.jpg",
  "سباجيتي بولونيز": "/pasta.jpg",
  "لازانيا": "/pasta2.jpg",
  "فيتوتشيني ألفريدو": "/pasta3.jpg",
  "بطاطس ويدجز": "/potato.jpg",
  "موتزاريلا ستكس": "/cheese.jpg",
  "حلقات بصل": "/onion2.jpg",
  "تيراميسو": "/sweet4.jpeg",
  "كيك شوكولاتة": "/sweet5.jpeg",
  "تشيز كيك": "/sweet6.jpg",
  "بيبسي": "/pepsi2.jpg",
  "عصير برتقال فريش": "/juce.jpg",
  "مياه معدنية": "/water.jpg",
};

export default function MealCard({ meal }) {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden hover:scale-105 duration-300">
      <img
        src={mealImages[meal.name]}
        alt={meal.name}
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{meal.name}</h3>
        <p className="text-gray-600">{meal.price} جنيه</p>
      </div>
    </div>
  );
}
