import { useState } from "react";
import { Link } from "react-router-dom";
import CredentialComponent from "./CredentialComponent";
import authService from "../service/authService";

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
    <div>
      <form onSubmit={submitHandler}>
        <h2>Register</h2>
        <CredentialComponent
          onTextChange={handleChange}
          nameHolder={"Type your username..."}
          passwordHolder={"Enter a password..."}
        />
        <p>{infoMsg}</p>
        <p data-testid="sign-up">
          Already have an account? Sign in&nbsp;
          <a data-testid="signIn-link" href="login">
            here!
          </a>
        </p>
        <button type="submit">Register new account</button>
      </form>
    </div>
  );
};
export default RegisterComponent;
