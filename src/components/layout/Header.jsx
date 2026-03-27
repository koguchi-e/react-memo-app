import { SubmitButton } from "../form/SubmitButton";
import { useAuth } from "../../hooks/useAuth";

export function Header({ headerLabel }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <div className="header">
      <label className="label">{headerLabel}</label>

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
