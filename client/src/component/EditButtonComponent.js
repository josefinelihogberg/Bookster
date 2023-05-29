import React from 'react'
import { useState, useEffect } from 'react';
import adminService from '../service/adminService';
import bookService from '../service/bookService';
import InputComponent from './abstract/InputComponent';
import './testing.css';

//Edits a book from the db when button is pushed - might need a warning/do you want to remove the book.

const EditButtonComponent = () => {
  const [books, setBooks] = useState([]);
  const [oldBook, setOldBooks] = useState({});
  const [book, setBook] = useState('');
  const [activeEdit, setActiveEdit] = useState('');

  useEffect(() => {
    const fetchLibrary = async () => {
      let data = await bookService.getBooks();
      console.log(data)
      setBooks(data.books);
    }
    fetchLibrary();
  }, []);

  const submitHandler = async () => {

    let bookData = {
      previous: { title: oldBook.title },
      current: {
        title: book.title,
        author: book.author,
        quantity: parseInt(book.quantity)
      }
    }

    let resp = await adminService.updateBook(bookData);

    console.log(resp);
  }
  const handleButtonClick = (e) => {
    e.preventDefault();
    setOldBooks({
      ...oldBook, title: e.target.value,
      author: books.author,
      quantity: books.quantity
    });
    console.log(oldBook);
    setActiveEdit("EditBooks");
  }

  const handleChange = ({ name, value }) => {
    setBook({ ...book, [name]: value });
  }

  const removeBox = () => {
    setActiveEdit('');
  }

  return (
    <div>
      <div className='delete-form'>
        {books.map((book) => (
          <button className='delete-btn' key={book.title} type="submit" name="title" onClick={(e) => handleButtonClick(e, 'value')} value={book.title}>Edit</button>))}
      </div>
      {activeEdit === "EditBooks" && <div className='position'>
        <form onSubmit={submitHandler}>
          <h3>Edit Book</h3>
          <InputComponent oldName={"/  " + oldBook.title} fieldName="Title" customName="title" onTextChange={handleChange} />
          <InputComponent oldName={oldBook.author} fieldName="Author" customName="author" onTextChange={handleChange} />
          <InputComponent oldName={oldBook.quantity} fieldName="Quantity" customName="quantity" onTextChange={handleChange} />

          <button type="submit">Save changes</button>
          <button type="reset" onClick={(e) => removeBox()}>Discard changes</button>
        </form></div>}
    </div>
  )
}

export default EditButtonComponent;
