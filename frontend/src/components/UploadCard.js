export default function UploadCard({ upload }) {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4">
      <img
        src={upload.url}
        alt={upload.filename}
        className="max-w-full mb-2"
      />
      <h4 className="font-semibold">{upload.filename}</h4>
      <p>Valuation: {upload.report.range}</p>
      <p>Authenticity: {upload.report.score}%</p>
    </div>
  );
}
