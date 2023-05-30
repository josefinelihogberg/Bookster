import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import memoryService from "../../service/memoryService";

jest.mock("../../service/memoryService", () => ({
  clearLocalValue: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

test("should sign out and redirect to login page", async () => {
  memoryService.clearLocalValue.mockClear(); // Clear any previous mock calls
  mockNavigate.mockClear(); // Clear any previous mock calls

  render(
    <MemoryRouter>
      <LogoutComponent />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByTestId("signout-btn"));

  await waitFor(() => {
    expect(memoryService.clearLocalValue).toHaveBeenCalledWith("JWT_TOKEN");
  });

  await waitFor(() => {
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
