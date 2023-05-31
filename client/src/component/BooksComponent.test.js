import { render, screen, waitFor } from "@testing-library/react";
import bookService from "../service/bookService";
import BooksComponent from "./BooksComponent";

jest.mock("../service/bookService", () => ({
  getBooks: jest.fn(),
}));

test("should render book information correctly", async () => {
  const mockBooks = [
    { title: "Book1", author: "Author1", quantity: 5 },
    { title: "Book2", author: "Author2", quantity: 0 },
  ];

  bookService.getBooks.mockResolvedValue({ books: mockBooks });

  render(<BooksComponent />);

  await waitFor(() => {
    expect(screen.getByText("Book1")).toBeInTheDocument();
    expect(screen.getByText("Author1")).toBeInTheDocument();
    expect(screen.getByText("5 left")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("Book2")).toBeInTheDocument();
    expect(screen.getByText("Author2")).toBeInTheDocument();
    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });
});
