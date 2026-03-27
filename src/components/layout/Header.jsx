import { SubmitButton } from "../form/SubmitButton";
import { useLogin } from "../../hooks/useLogin";

export function Header({ labelName }) {
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  return (
    <div className="header">
      <label className="label">{labelName}</label>

      <div className="login-area">
        {isLoggedIn ? (
          <SubmitButton
            type="button"
            className="button loggin-btn"
            onClick={() => setIsLoggedIn(false)}
            label="ログアウト"
          />
        ) : (
          <SubmitButton
            type="button"
            className="button loggin-btn"
            onClick={() => setIsLoggedIn(true)}
            label="ログイン"
          />
        )}
      </div>
    </div>
  );
}
