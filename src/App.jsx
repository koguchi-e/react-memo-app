import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="app-background">
      <label htmlFor="memo-input" className="label">
        <b>新規作成</b>
      </label>
      <div className="container">
        <textarea
          id="memo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="textarea-form"
          rows={5}
        ></textarea>
        <button type="submit" className="button">
          更新
        </button>
      </div>
    </div>
  );
}

export default App;
