// src/App.js
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <h1 className="text-6xl font-extrabold text-center">Laude</h1>
      <p className="text-lg text-gray-600 mt-2 mb-8">Backend status: {status ?? "loading..."}</p>

      <div className="w-full max-w-lg space-y-4">
        <UploadForm onUpload={handleUpload} />

        <div className="space-y-4">
          {uploads.map((u) => (
            <UploadCard
              key={u.filename + u.report.score}
              upload={u}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;



