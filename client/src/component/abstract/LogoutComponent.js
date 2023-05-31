import { useNavigate } from 'react-router-dom';
import memoryService from '../../service/memoryService';
import "../main.css";

//Logout componant which removes the JWT-token from local Storage and redirect to Login-page

export default function LogoutComponent() {
   const navigate = useNavigate();

   const logout = () => {
      memoryService.clearLocalValue("JWT_TOKEN");
      navigate('/login');
   }

   return (
      <button data-testid="signout-btn" className="logout-btn button-effect" onClick={logout}>Sign out</button>
   )
}