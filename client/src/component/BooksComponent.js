import React from "react";
import { useEffect, useState } from "react";
import bookService from "../service/bookService.js";
import "./testing.css";
import adminService from "../service/adminService.js";

const BooksComponent = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      // let data = await bookService.shortPollGetBook();
      let data = await bookService.getBooks();
      setBooks(data.books);
    };
    fetchBooks();
  }, []);

  const deleteBook = async (bookTitle) => {
    let resp = await adminService.deleteBook({ title: bookTitle });
    let data = await resp.json();

    const updatedBooks = books.filter((book) => book.title !== bookTitle);

    // Update the books state by filtering out the deleted book
    setBooks(updatedBooks);
  };

  const editBook = async (bookTitle) => {};
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book title</th>
            <th>Book author</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity}</td>

              <td>
                <button onClick={() => editBook(book.title)}>Edit</button>
                <button onClick={() => deleteBook(book.title)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksComponent;

//GET /library/books
// Responsen är en lista över böckerna och ett verisonsnummer som används vid högre betyg. Se kriterier.
