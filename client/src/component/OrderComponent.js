import React, { useState, useEffect } from "react";
import bookService from "../service/bookService";
import "./testing.css";
import memoryService from "../service/memoryService";

const OrderComponent = () => {
  const [quantity, setQuantity] = useState(0);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState();

  useEffect(() => {
    const fetchLibrary = async () => {
      let data = await bookService.getBooks();
      setBooks(data.books);
    };
    fetchLibrary();
  }, []);

  const buyBook = async () => {
    const body = {
      title: book,
      quantity: quantity,
    };

    let resp = await fetch("http://127.0.0.1:3000/library/user/books", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
      },
    });
  };

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <form className="order-form" onSubmit={buyBook}>
        <button className="reduce-btn" onClick={handleDecrement}>
          -
        </button>
        {quantity}
        <button className="increase-btn" onClick={handleIncrement}>
          +
        </button>

        {books.map((book) => (
          <button
            key={book.title}
            type="submit"
            name="title"
            onClick={handleChange}
            value={book.title}
          >
            Order
          </button>
        ))}
      </form>
    </div>
  );
};

export default OrderComponent;
