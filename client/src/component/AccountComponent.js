import { useState, useEffect } from "react";
import userService from "../service/userService";
import LogoutComponent from "../component/abstract/LogoutComponent";

export default function AccountComponent() {
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    setUsername(userService.getUsername());
    setUserRole(userService.getUserRole());
  }, []);

  return (
    <div>
      <p>
        Browsing as {userRole}: {username}
      </p>
      <LogoutComponent />
    </div>
  );
}
