import React from 'react'
import { useState, useEffect } from 'react';
import adminService from '../service/adminService';
import bookService from '../service/bookService';
import './testing.css';

const DeleteBooksComponent = () => {
    const [ books, setBooks ] = useState([]);
    const [ book, setBook ] = useState();

    useEffect(() => {
    const fetchLibrary = async () => {
        let data = await bookService.getBooks();
        console.log(data)
        setBooks(data);
    }
    fetchLibrary();
}, []);
    
    const submitHandler = async (e) => {
        let resp = await adminService.deleteBook({ title: book } );
        console.log(resp);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setBook(e.target.value);
    }


  return (
    <div>
        <form className='delete-form' onSubmit={submitHandler}>
        {books.map((book) => (
      <button key={book.title} type="submit" name="title" onClick={(e) => handleChange (e, 'value')} value={book.title}>Delete</button>))}
      </form>
    </div>
  )
}

export default DeleteBooksComponent;
