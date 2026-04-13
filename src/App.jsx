import { useState } from "react";

import "./App.css";

import { Header } from "./components/Header";
import { MemoContent } from "./components/memo/MemoContent";
import { LoginProvider } from "./components/LoginProvider";

function App() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <LoginProvider>
        <div className="container">
          <Header isEditing={isEditing}></Header>
          <MemoContent
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          ></MemoContent>
        </div>
      </LoginProvider>
    </>
  );
}

export default App;
