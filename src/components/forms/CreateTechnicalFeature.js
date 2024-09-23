import { Formik, Form } from "formik";
import { NumberInput } from "../form-elements";
import * as Yup from "yup";
import technicalFeatureService from "../../services/TechnicalFeaturesService";

export default function CreateTechnicalFeature({
  setIsAdding,
  id,
  setFeatures,
}) {
  const initialValues = {
    maxTemp: 90.5,
    ratedVoltage: 230.0,
    section: 25.0,
    isolationWallThickness: 1.5,
    outerSheathWallThickness: 2.0,
    averageExternalDiameter: 10.5,
    resistance: 0.03,
    approximateWeight: 2.5,
  };

  const validationSchema = Yup.object().shape({
    maxTemp: Yup.number().required("MaxTemp is required"),
    ratedVoltage: Yup.number().required("RatedVoltage is required"),
    section: Yup.number().required("Section is required"),
    isolationWallThickness: Yup.number().required(
      "IsolationWallThickness is required"
    ),
    outerSheathWallThickness: Yup.number().required(
      "OuterSheathWallThickness is required"
    ),
    averageExternalDiameter: Yup.number().required(
      "AverageExternalDiameter is required"
    ),
    resistance: Yup.number().required("Resistance is required"),
    approximateWeight: Yup.number().required("ApproximateWeight is required"),
  });

  const handleAddFeatureClick = async (values) => {
    if (!id) return;

    const newFeatureData = {
      ProductId: parseInt(id),
      MaxTemp: parseFloat(values.maxTemp),
      RatedVoltage: parseFloat(values.ratedVoltage),
      Section: parseFloat(values.section),
      IsolationWallThickness: parseFloat(values.isolationWallThickness),
      OuterSheathWallThickness: parseFloat(values.outerSheathWallThickness),
      AverageExternalDiameter: parseFloat(values.averageExternalDiameter),
      Resistance: parseFloat(values.resistance),
      ApproximateWeight: parseFloat(values.approximateWeight),
    };

    console.log("New feature data being sent:", newFeatureData);

    try {
      const response = await technicalFeatureService.createTechnicalFeature(
        newFeatureData
      );
      setFeatures((prevFeatures) => [...prevFeatures, response]);
      setIsAdding(false);
      alert("Yeni özellik eklendi!");
    } catch (error) {
      console.error(
        "Error adding new feature:",
        error.response?.data || error.message
      );
      alert("Yeni özellik eklenirken bir hata oluştu.");
    }
  };

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Yeni Özellik Ekle</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddFeatureClick}
      >
        {() => (
          <Form className="space-y-2">
            <NumberInput name="maxTemp" />
            <NumberInput name="ratedVoltage" />
            <NumberInput name="section" />
            <NumberInput name="isolationWallThickness" />
            <NumberInput name="outerSheathWallThickness" />
            <NumberInput name="averageExternalDiameter" />
            <NumberInput name="resistance" />
            <NumberInput name="approximateWeight" />

            <div className="mt-4 flex space-x-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Ekle
              </button>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                İptal
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
