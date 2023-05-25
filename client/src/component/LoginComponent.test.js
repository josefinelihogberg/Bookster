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

  const AccessToken = "mockAccessToken";
  jest.spyOn(authService, "authenticate").mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce({ accessToken: AccessToken }),
  });
  jest.spyOn(memoryService, "saveLocalValue");

  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(authService.authenticate).toHaveBeenCalledWith({
      username: "Bob",
      password: "123",
    });
    expect(memoryService.saveLocalValue).toHaveBeenCalledWith("JWT_TOKEN", AccessToken);
    expect(screen.getByText("Successfully logged in!")).toBeInTheDocument();
  });
});

test("displays error message on failed login", async () => {
  render(
    <Router>
      <LoginComponent />
    </Router>
  );

  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");
  const loginButton = screen.getByTestId("login-btn");

  fireEvent.change(usernameInput, { target: { value: "invaliduser" } });
  fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });

  const mockErrorResponse = {
    status: 403,
    json: jest
      .fn()
      .mockResolvedValueOnce({ error: "Failed to identify user with given credentials" }),
  };
  jest.spyOn(authService, "authenticate").mockResolvedValueOnce(mockErrorResponse);

  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(authService.authenticate).toHaveBeenCalledWith({
      username: "invaliduser",
      password: "invalidpassword",
    });
    expect(screen.getByText("Failed to identify user with given credentials")).toBeInTheDocument();
  });
});

test("saves JWT token in local storage if login successful", async () => {
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
  const mockSuccessResponse = {
    status: 200,
    json: jest.fn().mockResolvedValueOnce({ accessToken: mockAccessToken }),
  };
  jest.spyOn(authService, "authenticate").mockResolvedValueOnce(mockSuccessResponse);
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
