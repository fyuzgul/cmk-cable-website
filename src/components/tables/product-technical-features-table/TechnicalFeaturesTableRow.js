import technicalFeatureService from "../../../services/TechnicalFeaturesService";
export default function TechnicalFeatureTableRow({
  features,
  editedFeatures,
  setEditedFeatures,
}) {
  const handleInputChange = (e, featureId, field) => {
    const value = e.target.value;
    setEditedFeatures((prevState) => ({
      ...prevState,
      [featureId]: {
        ...prevState[featureId],
        [field]: parseFloat(value) || 0,
      },
    }));
  };

  const handleDeleteClick = async (featureId) => {
    if (window.confirm("Bu kaydı silmek istediğinizden emin misiniz?")) {
      try {
        await technicalFeatureService.deleteTechnicalFeature(featureId);
        alert("Silme başarılı!");
      } catch (error) {
        console.error(
          "Error deleting technical feature:",
          error.response?.data || error.message
        );
        alert("Silme başarısız.");
      }
    }
  };

  return (
    <tbody className="text-gray-700">
      {features.map((feature) => (
        <tr key={feature.id} className="hover:bg-gray-50">
          <td className="py-2 px-4 border-b">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={editedFeatures[feature.id]?.maxTemp || feature.maxTemp}
              onChange={(e) => handleInputChange(e, feature.id, "maxTemp")}
            />
          </td>
          <td className="py-2 px-4 border-b">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={
                editedFeatures[feature.id]?.ratedVoltage || feature.ratedVoltage
              }
              onChange={(e) => handleInputChange(e, feature.id, "ratedVoltage")}
            />
          </td>
          <td className="py-2 px-4 border-b">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={editedFeatures[feature.id]?.section || feature.section}
              onChange={(e) => handleInputChange(e, feature.id, "section")}
            />
          </td>
          <td className="py-2 px-4 border-b">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={
                editedFeatures[feature.id]?.isolationWallThickness ||
                feature.isolationWallThickness
              }
              onChange={(e) =>
                handleInputChange(e, feature.id, "isolationWallThickness")
              }
            />
          </td>
          <td className="py-2 px-4 border-b">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={
                editedFeatures[feature.id]?.outerSheathWallThickness ||
                feature.outerSheathWallThickness
              }
              onChange={(e) =>
                handleInputChange(e, feature.id, "outerSheathWallThickness")
              }
            />
          </td>
          <td className="py-2 px-4 border-b">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={
                editedFeatures[feature.id]?.averageExternalDiameter ||
                feature.averageExternalDiameter
              }
              onChange={(e) =>
                handleInputChange(e, feature.id, "averageExternalDiameter")
              }
            />
          </td>
          <td className="py-2 px-4 border-b">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={
                editedFeatures[feature.id]?.resistance || feature.resistance
              }
              onChange={(e) => handleInputChange(e, feature.id, "resistance")}
            />
          </td>
          <td className="py-2 px-4 border-b">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={
                editedFeatures[feature.id]?.approximateWeight ||
                feature.approximateWeight
              }
              onChange={(e) =>
                handleInputChange(e, feature.id, "approximateWeight")
              }
            />
          </td>
          <td className="py-2 px-4 border-b flex space-x-2">
            <button
              onClick={() => handleDeleteClick(feature.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              Sil
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
