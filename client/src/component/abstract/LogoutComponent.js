import { useNavigate } from "react-router-dom";

export default function LogoutComponent() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("JWT_TOKEN");

    setTimeout(() => navigate("/login"), 1000);
  };

  return <button onClick={logout}>Logout</button>;
}
