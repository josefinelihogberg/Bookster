//renders the inputs, takes in the value of the username and password

const CredentialComponent = ({ onTextChange, nameHolder, passwordHolder }) => {
  return (
    <div>
      <p>
        <input
          className="login-input"
          name="username"
          onChange={(e) => onTextChange(e.target)}
          type="text"
          placeholder={nameHolder}
        />
      </p>
      <p>
        <input
          className="login-input"
          name="password"
          onChange={(e) => onTextChange(e.target)}
          type="password"
          placeholder={passwordHolder}
        />
      </p>
    </div>
  );
};
export default CredentialComponent;
