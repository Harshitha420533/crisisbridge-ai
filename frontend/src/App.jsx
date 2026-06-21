import { useEffect, useState } from "react";
import { getHealth } from "./api/health";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    async function checkBackend() {
      try {
        const data = await getHealth();
        setMessage(data.message);
      } catch (error) {
        setMessage("Backend connection failed");
      }
    }

    checkBackend();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>CrisisBridge AI</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;