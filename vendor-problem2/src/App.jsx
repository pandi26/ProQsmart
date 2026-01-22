import TreeTable from "./components/TreeTable";

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Problem 2 – Hierarchical Tree Table</h2>
      <TreeTable data={treeSampleData} />
    </div>
  );
}

/* Sample data for Problem 2 */
const treeSampleData = [
  {
    Category: "Aerospace Parts",
    "Sub Category 1": "Structural",
    "Sub Category 2": "Support",
    "Item Code": "ITEM-1234",
    Description: "Seat mounting",
    Quantity: 20,
    Rate: 40
  },
  {
    Category: "Aerospace Parts",
    "Sub Category 1": "Structural",
    "Sub Category 2": "Support",
    "Item Code": "ITEM-1235",
    Description: "Seat mounting",
    Quantity: 10,
    Rate: 20
  },
  {
    Category: "Aerospace Parts",
    "Sub Category 1": "Brackets",
    "Sub Category 2": "Support",
    "Item Code": "ITEM-1236",
    Description: "Seat mounting",
    Quantity: 30,
    Rate: 10
  },
  {
    Category: "Precision Components",
    "Sub Category 1": "Fasteners",
    "Sub Category 2": "Bolts",
    "Item Code": "ITEM-2122",
    Description: "Titanium aerospace bolt",
    Quantity: 30,
    Rate: 50
  }
];
