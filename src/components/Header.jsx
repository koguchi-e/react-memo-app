import { SubmitButton } from "./form/SubmitButton";
import { useAuth } from "../hooks/useAuth";

export function Header({ isEditing }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <header className="header">
      <label className="label">
        {isEditing ? (isLoggedIn ? "編集" : "詳細") : "一覧"}
      </label>

      <div className="login-area">
        <SubmitButton
          type="button"
          className="button"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          children={isLoggedIn ? "ログアウト" : "ログイン"}
        />
      </div>
    </header>
  );
}
