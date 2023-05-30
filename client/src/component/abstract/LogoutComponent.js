import { useNavigate } from "react-router-dom";
import memoryService from "../../service/memoryService";
import LoginComponent from "../LoginComponent";

export default function LogoutComponent() {
  const navigate = useNavigate();

  const logout = () => {
    memoryService.clearLocalValue("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div>
      <button data-testid="signout-btn" onClick={logout}>
        Sign out
      </button>
    </div>
  );
}
