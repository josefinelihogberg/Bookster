import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AccountComponent from "./AccountComponent";
import userService from "../service/userService";

jest.mock("../service/userService", () => ({
    getUsername: jest.fn(),
    getUserRole: jest.fn(),
}));

test("should render user information correctly", () => {
    const mockUsername = "Bob";
    const mockUserRole = "Admin";

    userService.getUsername.mockReturnValue(mockUsername);
    userService.getUserRole.mockReturnValue(mockUserRole);

    render(
        <Router>
            <AccountComponent />
        </Router>
    );

    expect(screen.getByText(`Browsing as ${mockUserRole}: ${mockUsername}`)).toBeInTheDocument();
});