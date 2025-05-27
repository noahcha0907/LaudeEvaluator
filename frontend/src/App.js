import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div>
      <h1>Laude Evaluator</h1>
      <p>Backend status: {status ?? 'loading...'}</p>
    </div>
  );
}

export default App;
