import { getHeatColor } from "../utils/heatmap";
import { percentageDiff } from "../utils/percentage";

export default function DataTable({ data }) {
  const columns = Object.keys(data[0]);

  return (
    <div style={{ overflowX: "auto" }}>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} style={{ background: "#eee" }}>
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => {
            // supplier values per row
            const supplierCols = columns.filter((c) =>
              c.toLowerCase().includes("supplier")
            );

            const values = supplierCols.map((c) => Number(row[c]));
            const min = Math.min(...values);
            const max = Math.max(...values);

            return (
              <tr key={index}>
                {columns.map((col) => {
                  const isSupplier = col
                    .toLowerCase()
                    .includes("supplier");

                  return (
                    <td
                      key={col}
                      style={{
                        background: isSupplier
                          ? getHeatColor(row[col], min, max)
                          : "white",
                      }}
                    >
                      {row[col]}

                      {isSupplier && (
                        <div style={{ fontSize: 12 }}>
                          {percentageDiff(
                            row["Estimated Rate"],
                            row[col]
                          )}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
