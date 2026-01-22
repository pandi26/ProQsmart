import { useLocation } from "react-router-dom";
import DataTable from "../components/DataTable";

export default function TablePage() {
  const { state } = useLocation();

  return (
    <div style={{ padding: 40 }}>
      <h2>Supplier Comparison Table</h2>
      <DataTable data={state} />
    </div>
  );
}
