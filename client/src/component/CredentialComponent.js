export default function CredentialComponent({ onTextChange }) {
  return (
    <div>
      <p>
        <label>Username</label>
        <input placeholder="Type your username..." name="username" onChange={(e) => onTextChange(e.target)} type="text" data-testid="username-field" />
      </p>
      <p>
        <label>Password</label>
        <input placeholder="Type your password..." name="password" onChange={(e) => onTextChange(e.target)} type="password" data-testid="password-field" />
      </p>
    </div>
  );
}
