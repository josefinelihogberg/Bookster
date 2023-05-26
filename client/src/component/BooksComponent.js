import React from 'react'
import { useEffect, useState } from 'react'
import bookService from '../service/bookService.js'; 
import DeleteBooksComponent from './DeleteBooksComponent.js';
import './testing.css';

//Fetches all the books in the database and shows title, author and quantity

const BooksComponent = () => {
    const [ books, setBooks ] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
        // let data = await bookService.shortPollGetBook();
        let data = await bookService.getBooks();
        console.log(data);
        setBooks(data);
    }
    fetchBooks();
    }, []);
  return (
    <div className='grid'>
        <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Quantity</th>
        </tr>
        </thead>
        <tbody>
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
  )
}

export default BooksComponent


//GET /library/books
// Responsen är en lista över böckerna och ett verisonsnummer som används vid högre betyg. Se kriterier.
