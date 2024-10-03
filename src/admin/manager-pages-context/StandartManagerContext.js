import StandartsTableRow from "../../components/tables/standart-table/StandartsTableRow";
import ListTemplate from "../../components/tables/ListTemplate";

import ListHeader from "../../components/headers/ListHeader";
import AddStanadrtForm from "../../components/forms/AddStandartForm";
import useFetchAllStandarts from "../../hooks/useFetchAllStandarts";

export default function StandartManagerContext() {
  const { standarts, error } = useFetchAllStandarts();

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
