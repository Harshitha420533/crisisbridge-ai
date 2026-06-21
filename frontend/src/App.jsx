import { useState } from "react";
import { analyzeReport } from "./api/analysis";

function App() {
  const [report, setReport] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!report.trim()) return;

    setLoading(true);

    try {
      const data = await analyzeReport(report);
      setResult(data);
    } catch (error) {
      alert("Failed to analyze report");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h1>CrisisBridge AI</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          rows="6"
          placeholder="Describe the crisis situation..."
          value={report}
          onChange={(e) => setReport(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "16px",
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Analyze Crisis"}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>Analysis Result</h2>

          <p>
            <strong>Severity:</strong> {result.severity}
          </p>

          <p>
            <strong>Priority:</strong> {result.priority}
          </p>

          <p>
            <strong>Recommended Resources:</strong>
          </p>

          <ul>
            {result.recommendedResources.map((resource) => (
              <li key={resource}>{resource}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;