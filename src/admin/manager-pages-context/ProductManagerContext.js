import ListTemplate from "../../components/tables/ListTemplate";
import productService from "../../services/ProductsService";
import categoryService from "../../services/CategoriesService";
import { useState, useEffect } from "react";
import AddProductForm from "../../components/forms/AddProductForm";
import ProductsTableRow from "../../components/tables/products-table/ProductsTableRow";
import ListHeader from "../../components/headers/ListHeader";

export default function ProductManagerContext() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        setLoading(true);

        const productData = await productService.getAllProducts();
        setProducts(productData);

        const categoryIds = [
          ...new Set(productData.map((product) => product.categoryId)),
        ];

        const categoriesData = await Promise.all(
          categoryIds.map((id) => categoryService.getCategoryById(id))
        );
        setCategories(categoriesData);
      } catch (err) {
        setError("Failed to fetch products or categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <ListHeader text="Add Product" form={<AddProductForm />} />
      <div className="overflow-x-auto">
        <ListTemplate>
          {products.map((product) => {
            const category = categories.find(
              (cat) => cat.id === product.categoryId
            );

            if (!category) {
              console.warn("Category not found for product ID");
            }

            return (
              <ProductsTableRow
                key={product.id}
                product={product}
                category={category || { name: "Unknown" }}
              />
            );
          })}
        </ListTemplate>
      </div>
    </>
  );
}
