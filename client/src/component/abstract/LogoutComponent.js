import { useNavigate } from "react-router-dom";
import memoryService from "../../service/memoryService";

export default function LogoutComponent() {
  const navigate = useNavigate();

  const logout = () => {
    memoryService.clearLocalValue("JWT_TOKEN");

    setTimeout(() => navigate("/login"), 1000);
  };

  return <button onClick={logout}>Sign out</button>;
}
