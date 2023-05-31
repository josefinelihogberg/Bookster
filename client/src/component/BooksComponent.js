import React from 'react'
import { useEffect, useState } from 'react'
import bookService from '../service/bookService.js'
import './main.css';

//Shortpolls all the books in the database and shows title, author and quantity to guest-users

const BooksComponent = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    let itemsVersionUUID = -1;
    let startTime = Date.now;

    const backoff = {
        timeout: 3000,
        miss: {
            min: 4,
            max: 10,
            count: 0,
        },
        multiplier: 2000
    }


    useEffect(() => {
        const fetchBooks = async () => {
            let data = await bookService.getBooks();
            console.log(data);
            if (data.version === itemsVersionUUID) {
                console.log("miss");
                if (backoff.miss.count <= backoff.miss.max) {
                    backoff.miss.count += 1;
                }
            } else {
                backoff.miss.count = 0;
                itemsVersionUUID = data.version;
                console.log(data);
            }

            let timeoutMs = backoff.timeout;

            if (backoff.miss.count > backoff.miss.min) {
                timeoutMs = timeoutMs + (backoff.miss.count * backoff.multiplier);
            }

            console.log((Date.now()) - startTime, "ms");
            setTimeout(fetchBooks, timeoutMs);
            startTime = Date.now();
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
