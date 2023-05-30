import React from "react";
import { useEffect, useState } from "react";
import bookService from "../service/bookService.js";
import "./testing.css";

const AdminBooksComponent = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [quantity, setQuantity] = useState({});
  const [book, setBook] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      let data = await bookService.getBooks();
      setBooks(data.books);
    };
    fetchBooks();
  }, []);
  const buyBook = async () => {
    const body = {
      title: book,
      quantity: quantity[book],
    };

    let resp = await bookService.buyBook(body);
    console.log(resp);
  };

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  const handleIncrement = (bookTitle, event) => {
    event.preventDefault();
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [bookTitle]: (prevQuantity[bookTitle] || 0) + 1,
    }));
  };

  const handleDecrement = (bookTitle, event) => {
    event.preventDefault();
    if (quantity[bookTitle] > 0) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [bookTitle]: prevQuantity[bookTitle] - 1,
      }));
    }
  };
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
              <th>Order</th>
              <th>Action</th>
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
                  <td>
                    <form className="order-form" onSubmit={buyBook}>
                      <button
                        className="reduce-btn"
                        onClick={(e) => handleDecrement(book.title, e)}
                      >
                        -
                      </button>
                      {quantity[book.title] || 0}
                      <button
                        className="increase-btn"
                        onClick={(e) => handleIncrement(book.title, e)}
                      >
                        +
                      </button>
                      <button
                        key={book.title}
                        type="submit"
                        name="title"
                        onClick={handleChange}
                        value={book.title}
                        disabled={book.quantity === 0}
                      >
                        Order
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminBooksComponent;
