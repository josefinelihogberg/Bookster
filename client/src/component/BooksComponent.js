import React from "react";
import { useEffect, useState } from "react";
import bookService from "../service/bookService.js";

const BooksComponent = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      let data = await bookService.getBooks();
      console.log(data);
      setBooks(data);
    };
    fetchBooks();
  }, []);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Quantity</th>
          </tr>
          {books.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity}</td>
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
