import React from 'react'
import { useEffect, useState } from 'react'
import bookService from '../service/bookService.js'
import './main.css';

//Fetches all the books in the database and shows title, author and quantity

const BooksComponent = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            let data = await bookService.shortPollGetBook();
            // let data = await bookService.getBooks();
            console.log(data);
            setBooks(data.books);
        }
        fetchBooks();
    }, []);

    return (
        <div>
            <input
                type="text"
                className="search-input"
                placeholder="Search query ..."
                onChange={(event) => setQuery(event.target.value)}
            />
            <div className='grid guest-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Quantity</th>
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
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BooksComponent


//GET /library/books
// Responsen är en lista över böckerna och ett verisonsnummer som används vid högre betyg. Se kriterier.
