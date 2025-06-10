import React from "react";

export default function Categories() {
  const categories = [
    {
      name: "Seeds",
      img: "/image/seed.jpg",
    },
    {
      name: "Fertilizers",
      img: "/image/fert.avif",
    },
    {
      name: "Pesticides",
      img: "/image/pest.avif",
    },
    {
      name: "Farming Tools",
      img: "/image/farm.jpg",
    },
  ];

  return (
    <section className="categories py-12 bg-gray-50 dark:bg-[#0b1120] text-center">
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-8">
        Popular Categories
      </h2>
      <div className="h-1 bg-green-400 dark:bg-green-600 mx-auto mb-8 rounded w-[130px]"></div>
      <div className="category-list grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-item flex flex-col items-center bg-white dark:bg-[#1a1a2e] p-4 rounded-lg shadow hover:scale-105 transition"
          >
            <div className="bg-yellow-300 p-4 rounded-full mb-2">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <p className="font-medium text-green-700 dark:text-green-300">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
