import useFetchCategories from "../../hooks/useFetchAllCategories";
import AddCategoryForm from "../../components/forms/AddCategoryForm";
import ListTemplate from "../../components/tables/ListTemplate";
import CategoryTableRow from "../../components/tables/category-table/CategoryTableRow";
import ListHeader from "../../components/headers/ListHeader";

export default function CategoryManagerContext() {
  const { categories, loading, error } = useFetchCategories();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <ListHeader text={"Add Category"} form={<AddCategoryForm />} />
      <div className="overflow-x-auto">
        {categories.map((category) => (
          <ListTemplate key={category.id}>
            <CategoryTableRow category={category} />
          </ListTemplate>
        ))}
      </div>
    </>
  );
}
