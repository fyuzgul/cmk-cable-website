import CategoriesService from "../../services/CategoriesService";
import { useState, useEffect } from "react";
import AddCategoryForm from "../../components/forms/AddCategoryForm";
import ListTemplate from "../../components/tables/ListTemplate";
import CategoryTableRow from "../../components/tables/category-table/CategoryTableRow";
import ListHeader from "../../components/headers/ListHeader";
export default function CategoryManagerContext() {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);

        const data = await CategoriesService.getAllCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to fetch products or categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

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
