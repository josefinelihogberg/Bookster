const CredentialComponent = ({ onTextChange, nameHolder, passwordHolder }) => {
  return (
    <div>
      <p>
        <input name="username" onChange={(e) => onTextChange(e.target)} type="text" placeholder={nameHolder} />
      </p>
      <p>
        <input name="password" onChange={(e) => onTextChange(e.target)} type="password" placeholder={passwordHolder} />
      </p>
    </div>
  );
};
export default CredentialComponent;
