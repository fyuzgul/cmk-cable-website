import React from "react";
import CategoryCard from "../../components/cards/CategoryCard";
import useFetchCategoriesWithProducts from "../../hooks/useFetchCategoriesWithProducts";
import { useLoading } from "../../contexts/LoadingContext";

export default function CategoriesGrid() {
  const { categories, categoryProducts, error } =
    useFetchCategoriesWithProducts();
  const { loading } = useLoading();

  if (loading) {
    return null;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-30">Error: {error}</div>;
  }

  return (
    <div className="mt-28">
      {" "}
      {/* Navbar yüksekliğine göre ayarlanmıştır */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 max-w-screen-xl mx-auto">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            products={categoryProducts[category.id] || []}
          />
        ))}
      </div>
    </div>
  );
}
