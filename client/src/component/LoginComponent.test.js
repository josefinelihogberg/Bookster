import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import authService from "../service/authService";
import memoryService from "../service/memoryService";

jest.mock("../service/authService");
jest.mock("../service/memoryService");

test("page renders login", () => {
  render(
    <Router>
      <LoginComponent />
    </Router>
  );

  const loginElement = screen.getByText("Login");
  expect(loginElement).toBeInTheDocument();
});

test("allows the user to log in with valid credentials", async () => {
  render(
    <Router>
      <LoginComponent />
    </Router>
  );

  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");
  const loginButton = screen.getByTestId("login-btn");

  fireEvent.change(usernameInput, { target: { value: "Bob" } });
  fireEvent.change(passwordInput, { target: { value: "123" } });

  const mockAccessToken = "mockAccessToken";
  jest.spyOn(authService, "authenticate").mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce({ accessToken: mockAccessToken }),
  });
  jest.spyOn(memoryService, "saveLocalValue");

  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(authService.authenticate).toHaveBeenCalledWith({
      username: "Bob",
      password: "123",
    });
    expect(memoryService.saveLocalValue).toHaveBeenCalledWith("JWT_TOKEN", mockAccessToken);
    expect(screen.getByText("Successfully logged in!")).toBeInTheDocument();
  });
});
