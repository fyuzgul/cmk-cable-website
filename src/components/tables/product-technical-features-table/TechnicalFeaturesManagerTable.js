import { useState } from "react";
import TechnicalFeatureTableRow from "./TechnicalFeaturesTableRow";
import CreateTechnicalFeature from "../../forms/CreateTechnicalFeature";
import TechnicalFeaturesTableFooter from "./TechnicalFeaturesTableFooter";
import useFetchProductFeatures from "../../../hooks/useFetchProductFeatures";

const TechnicalFeaturesManagerTable = ({ id }) => {
  const [editedFeatures, setEditedFeatures] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const { features, loading, error } = useFetchProductFeatures(id);

  // Define setFeatures function to manage state
  const [featuresList, setFeaturesList] = useState(features);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Technical Features</h2>
      {loading && <div>Loading features...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-2 px-4 border-b">MaxTemp</th>
              <th className="py-2 px-4 border-b">RatedVoltage</th>
              <th className="py-2 px-4 border-b">Section</th>
              <th className="py-2 px-4 border-b">IsolationWallThickness</th>
              <th className="py-2 px-4 border-b">OuterSheathWallThickness</th>
              <th className="py-2 px-4 border-b">AverageExternalDiameter</th>
              <th className="py-2 px-4 border-b">Resistance</th>
              <th className="py-2 px-4 border-b">ApproximateWeight</th>
              <th className="py-2 px-4 border-b">Aksiyon</th>
            </tr>
          </thead>
          <TechnicalFeatureTableRow
            features={featuresList}
            editedFeatures={editedFeatures}
            setEditedFeatures={setEditedFeatures}
          />
        </table>
      </div>
      <TechnicalFeaturesTableFooter
        features={featuresList}
        setIsAdding={setIsAdding}
        editedFeatures={editedFeatures}
        setEditedFeatures={setEditedFeatures}
        id={id}
      />
      {isAdding && (
        <CreateTechnicalFeature
          setIsAdding={setIsAdding}
          id={id}
          setFeatures={setFeaturesList} // Pass the setFeatures function
        />
      )}
    </div>
  );
};

export default TechnicalFeaturesManagerTable;
