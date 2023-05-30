import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import authService from "../service/authService";
import memoryService from "../service/memoryService";
import userService from "../service/userService";

jest.mock("../service/authService");
jest.mock("../service/memoryService");
jest.mock("../service/userService");

test("renders the login page", () => {
  render(
    <Router>
      <LoginComponent />
    </Router>
  );

  const loginElement = screen.getByText("Login");
  expect(loginElement).toBeInTheDocument();
});

test("saves the JWT token and shows success message upon successful login", async () => {
  authService.authenticate.mockResolvedValue({
    status: 200,
    json: jest.fn().mockResolvedValue({ accessToken: "mockAccessToken" }),
  });

  userService.getUserRole.mockReturnValue("ADMIN");

  render(
    <Router>
      <LoginComponent />
    </Router>
  );

  fireEvent.click(screen.getByTestId("login-btn"));

  await waitFor(() => {
    expect(screen.getByText("Successfully logged in!")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(memoryService.saveLocalValue).toHaveBeenCalledWith("JWT_TOKEN", "mockAccessToken");
  });
});
