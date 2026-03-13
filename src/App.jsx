import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="app-background">
      <div className="container">
        <label htmlFor="memo-input" className="label">
          新規作成
        </label>
        <textarea
          id="memo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="textarea-form"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
