import React from "react";

const colors = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500",
  violet: "bg-violet-500",
  orange: "bg-orange-500",
  black: "bg-black",
  cyan: "bg-cyan-500",
  indigo: "bg-indigo-500",
  rose: "bg-rose-500",
  purple: "bg-purple-500",
  emerald: "bg-emerald-500",
};

function CategoryCard({ category, color, handleClick }) {
  const colorClass = colors[color] || "bg-white";
  return (
    <button onClick={handleClick} className="border relative rounded-2xl overflow-hidden bg-white hover:bg-slate-100 text-slate-900 text-4xl lg:tracking-wider w-full h-32 md:h-48 uppercase">
      <h1 className="text-lg w-full h-full absolute top-0 left-0 flex items-center justify-center md:text-2xl font-bold py-10 px-10 md:py-16 md:px-20 text-gray-800 hover:scale-110 transition-transform duration-300">
        {category}
      </h1>
      <div className={`absolute -top-1 -left-1 w-8 h-8 ${colorClass}`}></div>
    </button>
  );
}

export default CategoryCard;
