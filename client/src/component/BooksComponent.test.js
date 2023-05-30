import { render, screen, waitFor } from "@testing-library/react";
import bookService from "../service/bookService";
import BooksComponent from "./BooksComponent";

jest.mock("../service/bookService", () => ({
  getBooks: jest.fn(),
}));

test("should render book information correctly", async () => {
  const mockBooks = [
    { title: "Book 1", author: "Author 1", quantity: 5 },
    { title: "Book 2", author: "Author 2", quantity: 0 },
  ];

  bookService.getBooks.mockResolvedValue({ books: mockBooks });

  render(<BooksComponent />);

  await waitFor(() => {
    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.getByText("Author 1")).toBeInTheDocument();
    expect(screen.getByText("5 left")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("Book 2")).toBeInTheDocument();
    expect(screen.getByText("Author 2")).toBeInTheDocument();
    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });
});
