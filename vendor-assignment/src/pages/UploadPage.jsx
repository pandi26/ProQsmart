import Papa from "papaparse";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        console.log("CSV Parsed Data:", result.data); // check in console
        navigate("/table", { state: result.data });
      },
    });
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Problem 1 – Upload BOM CSV</h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
    </div>
  );
}
