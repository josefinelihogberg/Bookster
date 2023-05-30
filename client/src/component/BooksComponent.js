import React from "react";
import { useEffect, useState } from "react";
import bookService from "../service/bookService.js";
import "./testing.css";

//Fetches all the books in the database and shows title, author and quantity

const BooksComponent = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      let data = await bookService.getBooks();
      setBooks(data.books);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search query ..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="grid">
        <table>
          <thead>
            <tr>
              <th>Book title</th>
              <th>Book author</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {books
              .filter(
                (book) => query === "" || book.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((book) => (
                <tr key={book.title}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.quantity === 0 ? "Out of Stock" : book.quantity + " left"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksComponent;
