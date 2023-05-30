import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import UserViewComponent from "./UserViewComponent";
import { getUsername } from "../service/userService";

jest.mock("../service/userService", () => ({
  getUsername: jest.fn().mockReturnValue("mockUser"),
  getUserRole: jest.fn().mockReturnValue("USER"),
}));

test("updates quantity state when clicking increment and decrement buttons", () => {
  render(
    <Router>
      <UserViewComponent />
    </Router>
  );
  // Add this debug statement
  screen.debug();

  const incrementBtn = screen.getByTestId("less-btn");
  const decrementBtn = screen.getByTestId("more-btn");

  // Click increment button twice
  fireEvent.click(incrementBtn);
  fireEvent.click(incrementBtn);

  expect(screen.getByTestId("quantity-value").textContent).toBe("2");

  // Click decrement button once
  fireEvent.click(decrementBtn);

  expect(screen.getByTestId("quantity-value").textContent).toBe("1");
});
