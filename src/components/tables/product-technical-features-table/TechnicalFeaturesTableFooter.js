import technicalFeatureService from "../../../services/TechnicalFeaturesService";
export default function TechnicalFeaturesTableFooter({
  features,
  setIsAdding,
  editedFeatures,
  id,
  setFeatures,
  setEditedFeatures,
}) {
  const handleUpdateAllClick = async () => {
    try {
      const promises = features.map(async (feature) => {
        const updatedFeature = editedFeatures[feature.id];

        if (!updatedFeature) {
          return Promise.resolve();
        }

        const featureToUpdate = {
          ...feature,
          ...updatedFeature,
        };

        try {
          const response = await technicalFeatureService.updateTechnicalFeature(
            featureToUpdate
          );
          console.log(
            `Update response for feature ID ${feature.id}:`,
            response
          );
          return response;
        } catch (error) {
          console.error(
            `Error updating technical feature with ID ${feature.id}:`,
            error.response?.data || error.message
          );
          throw error;
        }
      });

      await Promise.all(promises);
      alert("Tüm değişiklikler güncellendi!");

      const data = await technicalFeatureService.getAllFeaturesByProductId(id);
      setFeatures(data);
      setEditedFeatures({});
    } catch (error) {
      console.error(
        "Error updating technical features:",
        error.response?.data || error.message
      );
      alert("Güncelleme başarısız.");
    }
  };
  return (
    <div className="flex space-x-2 mt-4">
      <button
        onClick={handleUpdateAllClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Güncelle
      </button>
      <button
        onClick={() => setIsAdding(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Yeni Özellik Ekle
      </button>
    </div>
  );
}
