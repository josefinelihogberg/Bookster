import { useState } from "react";
import { Link } from "react-router-dom";
import CredentialComponent from "./CredentialComponent";
import authService from "../service/authService";
import HeaderComponent from "./abstract/HeaderComponent";
import books from "../assets/background-img.jpg";

//Register a new user in the db

const RegisterComponent = () => {
  const [credentials, setCredentials] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    let res = await authService.register(credentials);
    let text = await res.json();
    text = text.message;

    setInfoMsg(text);
  };

  const handleChange = ({ name, value }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="container">
      <HeaderComponent />
      <form className="login-container" onSubmit={submitHandler}>
        <img className="side-img" src={books} alt="books in bookshelf" />
        <h2 className="login-header">Register</h2>
        <CredentialComponent
          onTextChange={handleChange}
          nameHolder={"Enter new username"}
          passwordHolder={"Enter new password"}
        />
        <p>{infoMsg}</p>

        <button className="login-btn button-effect" type="submit">
          Register
        </button>
        <Link to="/login">
          <button className="login-btn button-effect" type="reset">
            Go to Login
          </button>
        </Link>
      </form>
    </div>
  );
};
export default RegisterComponent;
