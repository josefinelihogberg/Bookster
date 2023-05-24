import { useState, useEffect } from "react";
import userService from "../service/userService";

export default function AccountComponent() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(userService.getUsername());
  }, []);

  return (
    <div>
      <p>Browsing as user: {username}</p>
      <button className="signOut-btn">Sign out</button>
    </div>
  );
}
