import React, { useEffect, useState } from "react";
import ProductService from "../../services/ProductsService";
import CategoriesService from "../../services/CategoriesService";
import CategoryCard from "../../components/cards/CategoryCard";

export default function CategoriesGrid() {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});

  useEffect(() => {
    CategoriesService.getAllCategories()
      .then((data) => {
        console.log("Categories loaded:", data);
        setCategories(data);

        data.forEach((category) => {
          ProductService.getProductsByCategory(category.id)
            .then((products) => {
              console.log(
                `Products for category ${category.id} (${category.name}):`,
                products
              );
              setCategoryProducts((prevState) => ({
                ...prevState,
                [category.id]: products,
              }));
            })
            .catch((error) =>
              console.error(
                `Error loading products for category ${category.id}:`,
                error
              )
            );
        });
      })
      .catch((error) => console.error("Error loading categories:", error));
  }, []);

  return (
    <div className="mt-24">
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
