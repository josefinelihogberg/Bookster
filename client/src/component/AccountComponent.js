import { useState, useEffect } from "react";
import userService from "../service/userService";
import LogoutComponent from "../component/abstract/LogoutComponent";

//Shows the role and username of the user logged in

export default function AccountComponent() {
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    setUsername(userService.getUsername());
    setUserRole(userService.getUserRole());
  }, []);

  return (
    <div>
      <div className="grid align-right">
        <p className="account-text">Browsing as {userRole}: {username}</p>
        <LogoutComponent />
      </div>
    </div>
  );
}
