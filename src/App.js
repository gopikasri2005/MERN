import { useState } from 'react';
import News from './components/News';

function App() {
  const [category, setCategory] = useState("general");

  // Common style for buttons
  const buttonStyle = {
    padding: "10px 18px",
    border: "none",
    borderRadius: "25px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    color: "white",
    background: "linear-gradient(135deg, #2196f3, #1976d2)",
    margin: "5px"
  };

  return (
    <div style={{
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f6f8",
      minHeight: "100vh"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#222" }}>
        News Application
      </h1>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginBottom: "30px" }}>
        <button style={buttonStyle} onClick={() => setCategory("general")}>General</button>
        <button style={buttonStyle} onClick={() => setCategory("technology")}>Technology</button>
        <button style={buttonStyle} onClick={() => setCategory("sports")}>Sports</button>
        <button style={buttonStyle} onClick={() => setCategory("science")}>Science</button>
        <button style={buttonStyle} onClick={() => setCategory("entertainment")}>Entertainment</button>
      </div>

      <News category={category} />
    </div>
  );
}

export default App;
