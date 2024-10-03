import React from "react";

const HistorySection = ({ activeYear, content }) => {
  const currentContent = content[activeYear];

  // Eğer currentContent yoksa bir uyarı mesajı göster
  if (!currentContent) {
    return <div>Bu yıl için herhangi bir bilgi mevcut değil.</div>;
  }

  return (
    <div className="flex max-w-4xl mx-auto mt-12">
      {currentContent.image && ( // Görselin varlığını kontrol et
        <img
          src={currentContent.image}
          alt={activeYear}
          className="w-1/2 h-auto object-cover"
        />
      )}

      <div className="p-8 w-1/2">
        <h3 className="text-3xl font-bold mb-4">{activeYear}</h3>
        <h4 className="text-xl text-red-600 font-semibold mb-2">
          {currentContent.title}
        </h4>
        <p className="text-lg text-gray-700">{currentContent.description}</p>
      </div>
    </div>
  );
};

export default HistorySection;
