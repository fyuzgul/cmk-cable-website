import CategoriesGrid from "../components/grids/CategoriesGrid";
import Header from "../components/sections/VideoThumbnail";
import img from "../assets/header-images/kategori.png";
export default function Products() {
  return (
    <>
      {" "}
      <Header img={img} title="Kategorilerimiz" />
      <CategoriesGrid />
    </>
  );
}
