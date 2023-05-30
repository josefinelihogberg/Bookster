//writes out the inputs takes in the value of the username and password

const CredentialComponent = ({ onTextChange, nameHolder, passwordHolder }) => {
  return (
    <div>
      <div>
        <p>Username</p>
        <input
          name="username"
          onChange={(e) => onTextChange(e.target)}
          type="text"
          placeholder={nameHolder}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          name="password"
          onChange={(e) => onTextChange(e.target)}
          type="password"
          placeholder={passwordHolder}
        />
      </div>
    </div>
  );
};
export default CredentialComponent;
