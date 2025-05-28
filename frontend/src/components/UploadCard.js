export default function UploadCard({ upload }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow hover:shadow-lg">
      <img
        src={upload.url}
        alt={upload.filename}
        className="w-full h-auto rounded mb-2"
      />
      <h4 className="font-semibold">{upload.filename}</h4>
      <p>Valuation: {upload.report.range}</p>
      <p>Authenticity: {upload.report.score}%</p>
    </div>
  );
}
