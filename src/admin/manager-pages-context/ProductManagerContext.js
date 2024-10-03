import ListTemplate from "../../components/tables/ListTemplate";
import AddProductForm from "../../components/forms/AddProductForm";
import ProductsTableRow from "../../components/tables/products-table/ProductsTableRow";
import ListHeader from "../../components/headers/ListHeader";
import useFetchProductsAndCategories from "../../hooks/useFetchProductsAndCategories";

export default function ProductManagerContext() {
  const { products, categories, error } = useFetchProductsAndCategories();

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
