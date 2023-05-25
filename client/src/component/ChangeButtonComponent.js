import React from 'react'
import { useState, useEffect } from 'react';
import adminService from '../service/adminService';
import bookService from '../service/bookService';

const ChangeButtonComponent = () => {
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
    
    const submitHandler = async () => {
        let resp = await adminService.deleteBook(book);

        console.log(resp)
    }

    const handleChange = (title) => {
        if(React.key === books.title) {
            setBook(books.title)
        }
        submitHandler();
    }


  return (
    
    <div>
        {books.map((book) => (
      <button key={book.title} type="submit" onClick={handleChange}>Delete {book.title}</button>))}
    </div>
  )
}

export default ChangeButtonComponent
