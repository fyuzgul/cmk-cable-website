import CategoryCard from "../../components/cards/CategoryCard";
import useFetchCategoriesWithProducts from "../../hooks/useFetchCategoriesWithProducts";

export default function CategoriesGrid() {
  const { categories, categoryProducts, loading, error } =
    useFetchCategoriesWithProducts();

  if (loading) {
    return <div className="text-center mt-24">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-24">Error: {error}</div>;
  }

  return (
    <div className="mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 max-w-screen-xl mx-auto">
        {categories.length > 0 ? (
          categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              products={categoryProducts[category.id] || []}
            />
          ))
        ) : (
          <div className="text-center w-full col-span-3">
            No categories found.
          </div>
        )}
      </div>
    </div>
  );
}
