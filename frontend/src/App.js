import { useState, useEffect } from "react";
import UploadForm from "./components/UploadForm";
import UploadCard from "./components/UploadCard";

function App() {
  const [status, setStatus] = useState(null);
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  const handleUpload = (data) => {
    setUploads((prev) => [data, ...prev]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Laude Evaluator</h1>
      <p className="mb-4">Backend status: {status ?? "loading..."}</p>
      <UploadForm onUpload={handleUpload} />
      <div>
        {uploads.map((u) => (
          <UploadCard
            key={u.filename + u.report.score}
            upload={u}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
