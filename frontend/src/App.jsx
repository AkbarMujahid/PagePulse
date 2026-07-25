import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeWebsite = async () => {
    if (!url.trim()) {
      setError("Please enter a valid URL.");
      setReport(null);
      return;
    }

    setLoading(true);
    setError("");
    setReport(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/audit",
        {
          url,
        }
      );

      setReport(response.data);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Unable to analyze the website."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">

      {/* HERO */}
      <header className="hero">
        <div className="logo">🚀</div>

        <h1>PagePulse</h1>

        <p>
          Website SEO & Performance Auditor
        </p>

        <span>
          Analyze any webpage instantly
        </span>
      </header>

      {/* SEARCH */}

      <div className="search-box">

        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={analyzeWebsite}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

      </div>

      {error && (
        <div className="error-box">

          ❌ {error}

        </div>
      )}

      {report && (

        <>

          {/* METRICS */}

          <div className="metrics">

            <div className="metric-card">

              <span>🌐</span>

              <h3>Status</h3>

              <p
                className={
                  report.status === 200
                    ? "success"
                    : "danger"
                }
              >
                {report.status}
              </p>

            </div>

            <div className="metric-card">

              <span>⚡</span>

              <h3>Response</h3>

              <p>{report.responseTime}</p>

            </div>

            <div className="metric-card">

              <span>📄</span>

              <h3>Words</h3>

              <p>{report.wordCount}</p>

            </div>

            <div className="metric-card">

              <span>🏷️</span>

              <h3>H1 Tags</h3>

              <p>{report.h1Count}</p>

            </div>

            <div className="metric-card">

              <span>🖼️</span>

              <h3>Missing Alt</h3>

              <p>{report.imagesMissingAlt}</p>

            </div>

          </div>

          {/* DETAILS */}

          <div className="details-card">

            <h2>Audit Report</h2>

            <div className="detail">

              <h4>📌 Page Title</h4>

              <p>{report.title}</p>

            </div>

            <div className="detail">

              <h4>📝 Meta Description</h4>

              <p>{report.metaDescription}</p>

            </div>

          </div>

        </>

      )}

      {/* FOOTER */}

      <footer className="footer">

        <p>

          Built for{" "}

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Heroes Training Task
          </a>

        </p>

        <p>

          Developed by <strong>Akbar Mujahid</strong>

        </p>

      </footer>

    </div>
  );
}

export default App;