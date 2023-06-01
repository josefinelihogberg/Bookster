import React from "react";
import { useEffect, useState } from "react";
import bookService from "../service/bookService.js";
import AccountComponent from "./AccountComponent.js";
import "./main.css";
import AddBookComponent from "./AddBookComponent.js";
import HeaderComponent from "./abstract/HeaderComponent.js";
import EditBooksComponent from "./EditBooksComponent.js";
import DeleteBooksComponent from "./DeleteBooksComponent.js";
import PopUpComponent from "./abstract/PopUpComponent.js";
import { Link } from "react-router-dom";

//Admin view of bookservices when logged in as "ADMIN"

const AdminBooksComponent = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [quantity, setQuantity] = useState({});
  const [book, setBook] = useState();
  const [activePopup, setActivePopup] = useState("");
  const [active, setActive] = useState("");

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
    window.location.reload();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBook(e.target.value);
    setActive("Popup");
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

  const removePopUp = () => {
    setActivePopup("");
    setActive("");
    setQuantity("");
  };
  return (
    <div className="page-container">
      <HeaderComponent />
      <AccountComponent />
      <div className="center">
        <input
          type="text"
          className="search-input"
          placeholder="Search query ..."
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="addbook-btn button-effect" onClick={() => setActivePopup("AddBook")}>
          Add book
        </button>
        <div className="position-end">
          <Link to="/admin/books">
            <button className="addbook-btn button-effect-books">Books</button>
          </Link>
          <Link to="/admin/users">
            <button className="addbook-btn button-effect">Users</button>
          </Link>
        </div>
        <div className="grid">
          <table>
            <thead>
              <tr>
                <th>Book title</th>
                <th>Book author</th>
                <th>Availability</th>
                <th>Order</th>
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
                      <form className="order-form">
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
                          className="btn-order-column"
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
          <div className="grid">
            {query === "" ? <EditBooksComponent /> : undefined}
            {query === "" ? <DeleteBooksComponent /> : undefined}
          </div>
        </div>
        <div>
          {activePopup === "AddBook" && <AddBookComponent removeBox={removePopUp} />}
          {active === "Popup" && (
            <PopUpComponent
              onOkClick={(e) => buyBook}
              onCancelClick={(e) => removePopUp}
              insertText={"You are purchasing " + quantity[book] + " book with the title " + book}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default AdminBooksComponent;
