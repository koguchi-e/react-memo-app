import { useState } from "react";

import "./App.css";

import { Header } from "./components/Header";
import { MemoContent } from "./components/memo/MemoContent";
import { LoginContext } from "./contexts/LoginContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <table className="container">
          <tbody>
            <tr>
              <td>
                <Header isEditing={isEditing}></Header>
                <MemoContent
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                ></MemoContent>
              </td>
            </tr>
          </tbody>
        </table>
      </LoginContext.Provider>
    </>
  );
}

export default App;
