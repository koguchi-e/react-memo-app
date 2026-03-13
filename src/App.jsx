import { useState } from "react";

import { Container } from "./components/Container";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([
    { id: 1, text: "メモ1 メモ1の内容" },
    { id: 2, text: "メモ2 メモ2の内容" },
  ]);
  const [input, setInput] = useState("");

  const addMemos = () => {
    setMemos([
      ...memos,
      {
        id: Date.now(),
        text: input,
      },
    ]);
    setInput("");
  };

  return (
    <div className="app-background">
      <Container label="一覧">
        <ul className="memos-list">
          {memos.map((memo) => (
            <li key={memo.id}>{memo.text}</li>
          ))}
        </ul>
      </Container>
      <Container label="新規作成">
        <textarea
          id="memo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="textarea-form"
          rows={5}
        ></textarea>
        <button type="submit" className="button" onClick={addMemos}>
          更新
        </button>
      </Container>
    </div>
  );
}

export default App;
