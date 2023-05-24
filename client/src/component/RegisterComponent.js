import { useState } from 'react';
import { Link } from 'react-router-dom';
import CredentialComponent from './CredentialComponent';

const RegisterComponent = () => {
  const [ credentials, setCredentials ] = useState('');
  // const [ infoMsg, setInfoMsg ] = useState('');
  
  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   let res = await authService.register(credentials);
  //   let text = await res.text();

  //   setInfoMsg(text)
  // }

  const handleChange = ({ name, value }) => {
    setCredentials({...credentials, [name]: value});
  }

  return (
    <div>
      <form>
        <h2>Register</h2>
        <CredentialComponent onTextChange={handleChange} nameHolder={"Enter new username"} passwordHolder={"Enter new password"}/>
        {/* <p>{infoMsg}</p> */}

        <button type="submit">Register</button>
        <Link to="/login">
          <button type="reset">Go to Login</button>
        </Link>

      </form>
    </div>);
};
export default RegisterComponent;
