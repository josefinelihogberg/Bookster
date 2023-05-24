import React from 'react'
import { useEffect, useState } from 'react'
import bookService from '../service/bookService.js'


const BooksComponent = () => {
    const [ books, setBooks ] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
        let data = await bookService.getBooks();
        console.log(data);
        setBooks(data);
    }
    fetchBooks();
    }, []);
  return (
    <div>{books.map((book) => (
        <div key={book.title}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.quantity}</p>
        </div>
    ))}
    </div>
  )
}

export default BooksComponent


//GET /library/books
// Responsen är en lista över böckerna och ett verisonsnummer som används vid högre betyg. Se kriterier.
