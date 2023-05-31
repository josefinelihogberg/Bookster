import React from 'react'
import { useState, useEffect } from 'react';
import adminService from '../service/adminService';
import bookService from '../service/bookService';
import InputComponent from './abstract/InputComponent';
import './main.css';

//Edits a books title, author and/or quantity - shows a confirmation as popup

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
      <div className='btn-columns  btn-fix'>
        {books.map((book) => (
          <button className='btn-column' key={book.title} type="submit" name="title" onClick={(e) => handleButtonClick(e, 'value')} value={book.title}>Edit</button>))}
        {/* <button bookTitle={book.title}>Edit</button> */}
      </div>
      {activeEdit === "EditBooks" && <div className='pop-up'>
        <form onSubmit={submitHandler}>
          <h3 className="pop-up-header">Edit Book</h3>
          <InputComponent oldName={"/  " + oldBook.title} fieldName="Title" customName="title" onTextChange={handleChange} />
          <InputComponent oldName={oldBook.author} fieldName="Author" customName="author" onTextChange={handleChange} />
          <InputComponent oldName={oldBook.quantity} fieldName="Quantity" customName="quantity" onTextChange={handleChange} />
          <div className='flex'>
            <button className="pop-up-btn button-effect" type="submit">Save changes</button>
            <button className="pop-up-btn button-effect" type="reset" onClick={(e) => removeBox()}>Discard changes</button>
          </div>
        </form></div>}
    </div>
  )
}

export default EditButtonComponent;
