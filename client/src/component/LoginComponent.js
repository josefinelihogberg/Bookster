import { useState } from "react";
import CredentialComponent from "./CredentialComponent.js";
import authService from "../service/authService.js";
import memoryService from "../service/memoryService.js";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function LoginComponent() {
  const [credential, setCredential] = useState({ username: "", password: "" });
  const [infoMessage, setInfoMessage] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    let res = await authService.authenticate(credential);
    let data = await res.json();

    setInfoMessage("Successfully logged in!");

    memoryService.saveLocalValue("JWT_TOKEN", data.accessToken);

    const isAuthenticated = () => memoryService.getLocalValue("JWT-TOKEN") !== null;

    if (isAuthenticated) {
      setTimeout(() => navigate("/profile"), 1000);
    }
  };

  const handleChange = ({ name, value }) => {
    setCredential({ ...credential, [name]: value });
  };

  return (
    <div>
      <form data-testid="login-form" onSubmit={submitHandler}>
        <h2>Login</h2>
        <CredentialComponent onTextChange={handleChange} nameHolder={"Username"} passwordHolder={"Password"}/>
        <p>{infoMessage}</p>
        <p>
          No account? Sign up <a href="register">here!</a>
        </p>
        <button data-testid="login-btn" type="submit">
          Sign in
        </button>
        <Link to="/books">
        <button data-testid="proceed-btn">
          Proceed as guest user
        </button>
        </Link>
      </form>
    </div>
  );
}
