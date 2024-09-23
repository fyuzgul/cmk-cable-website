import React from "react";

const Timeline = ({ activeYear, setActiveYear }) => {
  const years = [
    { year: 2006, position: "left-[15%]" },
    { year: 2008, position: "left-[25%]" },
    { year: 2012, position: "left-[45%]" },
    { year: 2013, position: "left-[50%]" },
    { year: 2018, position: "left-[75%]" },
    { year: 2020, position: "left-[85%]" },
  ];

  return (
    <>
      <div className="absolute w-full h-1 bg-gray-300 top-6"></div>

      <div className="relative w-full max-w-4xl h-16 flex flex-wrap justify-center md:justify-between">
        {years.map((item) => (
          <div
            key={item.year}
            className={`flex justify-center items-center ${item.position} md:absolute transform md:-translate-x-1/2 mb-4 md:mb-0`}
          >
            <button
              onClick={() => setActiveYear(item.year)}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${
                activeYear === item.year
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {item.year}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
