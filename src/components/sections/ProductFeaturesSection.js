import useFetchProductFeatures from "../../hooks/useFetchProductFeatures";

export default function ProductFeaturesSection({ id }) {
  const { features } = useFetchProductFeatures(id);

  return (
    <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg dark:bg-gray-300">
            <tr className="text-right">
              <th title="Team name" className="p-3 text-left">
                Section
              </th>
              <th title="Wins" className="p-3">
                Isolation Wall Thickness (mm)
              </th>
              <th title="Losses" className="p-3">
                Outer Sheath Wall Thickness (mm)
              </th>
              <th title="Win percentage" className="p-3">
                Average External Diameter (mm)
              </th>
              <th title="Games behind" className="p-3">
                Resistance (°C)
              </th>
              <th title="Home games" className="p-3">
                Approximate Weight (kg/km)
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr
                key={feature.id}
                className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100"
              >
                <td className="px-3 py-2">
                  <span>{feature.section}</span>
                </td>
                <td className="px-3 py-2 text-right">
                  <span>{feature.isolationWallThickness}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{feature.outerSheathWallThickness}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{feature.averageExternalDiameter}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{feature.resistance}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{feature.approximateWeight}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
