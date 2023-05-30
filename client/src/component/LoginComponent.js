import { useState } from "react";
import CredentialComponent from "./CredentialComponent.js";
import authService from "../service/authService.js";
import memoryService from "../service/memoryService.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import userService from "../service/userService.js";
import HeaderComponent from "./HeaderComponent.js";
import background from "../assets/background-img.jpg";

export default function LoginComponent() {
  const [credential, setCredential] = useState({ username: "", password: "" });
  const [infoMessage, setInfoMessage] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    let res = await authService.authenticate(credential);

    let data = await res.json();

    if (res.status >= 400) {
      let text = data.error;
      setInfoMessage(text);
    } else {
      setInfoMessage("Successfully logged in!");

      memoryService.saveLocalValue("JWT_TOKEN", data.accessToken);
      const role = userService.getUserRole();
      if (role === "ADMIN") {
        setTimeout(() => navigate("/admin/profile"), 1000);
      } else if (role === "USER") {
        setTimeout(() => navigate('/user/profile'), 1000);
      }
    }
  };

  const handleChange = ({ name, value }) => {
    setCredential({ ...credential, [name]: value });
  };

  return (
    <div>
      <div className="container">
        <HeaderComponent />
        <form className="login-container" data-testid="login-form" onSubmit={submitHandler}>
          <img className='bg-img' src={background} alt="Planet in space" />
          <h2 className="login-header">Login</h2>
          <CredentialComponent
            onTextChange={handleChange}
            nameHolder={"Username"}
            passwordHolder={"Password"}
          />
          <p className="info-message">{infoMessage}</p>
          <p className="info-text" data-testid="sign-up">
            No account? Sign up <a data-testid="signup-link" href="register"> here</a>
          </p>
          <button className="login-btn" data-testid="login-btn" type="submit">
            Sign in
          </button>
          <Link to="/guest">
            <button className="login-btn" data-testid="proceed-btn">Guest user</button>
          </Link>
        </form>
      </div>
    </div >
  );
}