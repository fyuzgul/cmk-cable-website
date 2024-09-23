import React from "react";

const NewsCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden mb-10">
      <img src={imageSrc} alt="deneme" className="w-full" />
      <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
        <h3>
          <div className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
            {title}
          </div>
        </h3>
        <p className="text-base text-body-color leading-relaxed mb-7">
          {description}
        </p>
        <button className="relative rounded px-4 py-2 inline cursor-pointer text-lg font-bold before:bg-red-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
          Haberin Devamı
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
