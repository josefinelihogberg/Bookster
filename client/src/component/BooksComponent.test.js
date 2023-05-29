import React from "react";
import { render, screen } from "@testing-library/react";
import BooksComponent from "./BooksComponent";

jest.mock("../service/bookService", () => ({
  getBooks: jest.fn(() => ({
    books: [
      { title: "Book 1", author: "Author 1", quantity: 5 },
      { title: "Book 2", author: "Author 2", quantity: 3 },
    ],
  })),
}));

describe("BooksComponent", () => {
  test("displays books correctly", async () => {
    render(<BooksComponent />);

    // Check if the book titles are rendered correctly
    const book1Title = screen.getByText("Book 1");
    const book2Title = screen.getByText("Book 2");
    expect(book1Title).toBeInTheDocument();
    expect(book2Title).toBeInTheDocument();

    // Check if the book authors are rendered correctly
    const book1Author = screen.getByText("Author 1");
    const book2Author = screen.getByText("Author 2");
    expect(book1Author).toBeInTheDocument();
    expect(book2Author).toBeInTheDocument();

    // Check if the book quantities are rendered correctly
    const book1Quantity = screen.getByText("5");
    const book2Quantity = screen.getByText("3");
    expect(book1Quantity).toBeInTheDocument();
    expect(book2Quantity).toBeInTheDocument();
  });
});
