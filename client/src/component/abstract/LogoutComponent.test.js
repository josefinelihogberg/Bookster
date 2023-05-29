import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import memoryService from "../../service/memoryService";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("LogoutComponent", () => {
  test("clears JWT token and redirects to login page", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const clearLocalValueMock = jest.spyOn(memoryService, "clearLocalValue");

    render(<LogoutComponent />);

    // Simulate click on the logout button
    fireEvent.click(screen.getByText("Sign out"));

    // Check if the JWT token is cleared from memory
    expect(clearLocalValueMock).toHaveBeenCalledWith("JWT_TOKEN");

    // Check if the navigate function is called to redirect to the login page
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith("/login");
  });
});
