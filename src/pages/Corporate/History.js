import React, { useState } from "react";
import Timeline from "../../components/sections/Timeline";
import HistorySection from "../../components/sections/HistorySection";
import img from "../../assets/home-page-assets/news/1674217132a952.jpg";

const History = () => {
  const [activeYear, setActiveYear] = useState(2006);

  const content = {
    2006: {
      title: "2006 Yılı Başlığı",
      description: "2006 yılına ait açıklamalar buraya gelecek.",
      image: img,
    },
    2008: {
      title: "2008 Yılı Başlığı",
      description: "2008 yılına ait açıklamalar buraya gelecek.",
      image: img,
    },
    2012: {
      title: "2012 Yılı Başlığı",
      description: "2012 yılına ait açıklamalar buraya gelecek.",
      image: img,
    },
    2013: {
      title: "2013 Yılı Başlığı",
      description: "2013 yılına ait açıklamalar buraya gelecek.",
      image: img,
    },
    2018: {
      title: "2018 Yılı Başlığı",
      description: "2018 yılına ait açıklamalar buraya gelecek.",
      image: img,
    },
    2020: {
      title: "2020 Yılı Başlığı",
      description: "2020 yılına ait açıklamalar buraya gelecek.",
      image: img,
    },
  };

  return (
    <>
      <div className="relative w-full flex flex-col items-center mt-12">
        <Timeline activeYear={activeYear} setActiveYear={setActiveYear} />
        <HistorySection activeYear={activeYear} content={content} />
      </div>
    </>
  );
};

export default History;
