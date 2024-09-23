import React from "react";

const HistorySection = ({ activeYear, content }) => {
  return (
    <>
      <div className="flex max-w-4xl mx-auto mt-12">
        <img
          src={content[activeYear].image}
          alt={activeYear}
          className="w-1/2 h-auto object-cover"
        />

        <div className="p-8 w-1/2">
          <h3 className="text-3xl font-bold mb-4">{activeYear}</h3>
          <h4 className="text-xl text-red-600 font-semibold mb-2">
            {content[activeYear].title}
          </h4>
          <p className="text-lg text-gray-700">
            {content[activeYear].description}
          </p>
        </div>
      </div>
    </>
  );
};

export default HistorySection;
