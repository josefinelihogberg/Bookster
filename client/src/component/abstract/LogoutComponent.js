import { useNavigate } from "react-router-dom";
import "../main.css";
import memoryService from "../../service/memoryService";

export default function LogoutComponent() {
  const navigate = useNavigate();

  const logout = () => {
    memoryService.clearLocalValue("JWT_TOKEN");

    setTimeout(() => navigate("/login"), 1000);
    navigate("/login");
  };

  return (
    <button data-testid="signout-btn" className="logout-btn button-effect" onClick={logout}>
      Sign out
    </button>
  );
}
