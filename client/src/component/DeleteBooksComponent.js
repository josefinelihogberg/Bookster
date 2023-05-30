import React from 'react'
import { useState, useEffect } from 'react';
import adminService from '../service/adminService';
import bookService from '../service/bookService';
import PopUpComponent from './abstract/PopUpComponent';
import './main.css';

//Delete a book from the db when button is pushed - might need a warning/do you want to remove the book.

const DeleteBooksComponent = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState();
  const [active, setActive] = useState('');

  useEffect(() => {
    const fetchLibrary = async () => {
      let data = await bookService.getBooks();
      console.log(data)
      setBooks(data.books);
    }
    fetchLibrary();
  }, []);

  const submitHandler = async (e) => {
    let resp = await adminService.deleteBook({ title: book });
    setActive('');
    console.log(resp);
    window.location.reload();
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setBook(e.target.value);
    setActive("Popup");
  }

  const removePopUp = () => {
    setActive('');
  }


  return (
    <div>
      <form className='btn-columns btn-fix'>
        {books.map((book) => (
          <button className='btn-column' key={book.title} type="submit" name="title" onClick={(e) => handleChange(e, 'value')} value={book.title}>Delete</button>))}
      </form>
      <div>
        {active === "Popup" && <PopUpComponent onOkClick={(e) => submitHandler} onCancelClick={(e) => removePopUp} insertText={"Are you sure you want to delete this book?"} />}
      </div>
    </div>
  )
}

export default DeleteBooksComponent;
