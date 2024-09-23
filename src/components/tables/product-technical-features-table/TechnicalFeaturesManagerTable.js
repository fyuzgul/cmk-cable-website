import React, { useEffect, useState } from "react";
import technicalFeatureService from "../../../services/TechnicalFeaturesService";
import TechnicalFeatureTableRow from "./TechnicalFeaturesTableRow";
import CreateTechnicalFeature from "../../forms/CreateTechnicalFeature";
import TechnicalFeaturesTableFooter from "./TechnicalFeaturesTableFooter";

const TechnicalFeaturesManagerTable = ({ id }) => {
  const [features, setFeatures] = useState([]);
  const [editedFeatures, setEditedFeatures] = useState({});
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!id) {
      console.error("Product ID is missing from URL.");
      return;
    }

    const fetchFeatures = async () => {
      try {
        const data = await technicalFeatureService.getAllFeaturesByProductId(
          id
        );
        console.log("Fetched features:", data);
        setFeatures(data);
      } catch (error) {
        console.error(
          "Error fetching technical features:",
          error.response?.data || error.message
        );
      }
    };

    fetchFeatures();
  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Technical Features</h2>
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
            features={features}
            editedFeatures={editedFeatures}
            setEditedFeatures={setEditedFeatures}
            setFeatures={setFeatures}
          />
        </table>
      </div>
      <TechnicalFeaturesTableFooter
        features={features}
        setIsAdding={setIsAdding}
        editedFeatures={editedFeatures}
        setEditedFeatures={setEditedFeatures}
        setFeatures={setFeatures}
        id={id}
      />
      {isAdding && (
        <CreateTechnicalFeature
          setIsAdding={setIsAdding}
          id={id}
          setFeatures={setFeatures}
        />
      )}
    </div>
  );
};

export default TechnicalFeaturesManagerTable;
