import { useState, useEffect } from "react";
import userService from "../service/userService";
import LogoutComponent from "./LogoutComponent";

export default function AccountComponent() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(userService.getUsername());
  }, []);

  return (
    <div>
      <p>Browsing as user: {username}</p>
      <LogoutComponent />
    </div>
  );
}
