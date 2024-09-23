import StandartsTableRow from "../../components/tables/standart-table/StandartsTableRow";
import ListTemplate from "../../components/tables/ListTemplate";
import standartService from "../../services/StandartsService";
import { useState, useEffect } from "react";
import ListHeader from "../../components/headers/ListHeader";
import AddStanadrtForm from "../../components/forms/AddStandartForm";

export default function StandartManagerContext() {
  const [standarts, setStandarts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandarts = async () => {
      try {
        const standarts = await standartService.getAllStandards();
        setStandarts(standarts);
      } catch (err) {
        setError("Failed to fetch certificates.");
      } finally {
        setLoading(false);
      }
    };
    fetchStandarts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <ListHeader text="Add Standart" form={<AddStanadrtForm />} />
      <div className="overflow-x-auto">
        <ListTemplate>
          {standarts.map((standart) => (
            <StandartsTableRow key={standart.id} standart={standart} />
          ))}
        </ListTemplate>
      </div>
    </>
  );
}
