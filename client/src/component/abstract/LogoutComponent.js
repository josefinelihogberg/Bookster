import { useNavigate } from 'react-router-dom';
import "../main.css";

export default function LogoutComponent() {
   const navigate = useNavigate();

   const logout = () => {
      localStorage.removeItem("JWT_TOKEN");

      setTimeout(() => navigate("/login"), 1000);
   }

   return (
      <button className="logout-btn button-effect" onClick={logout}>Sign out</button>
   )
}