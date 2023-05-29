import React from 'react'
import { useEffect, useState } from 'react'
import bookService from '../service/bookService.js';
import adminService from '../service/adminService.js';
import './testing.css';

//Fetches all the books in the database and shows title, author and quantity

const BooksComponent = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    // const [ active, setActive] = useState();
    useEffect(() => {
        const fetchBooks = async () => {
            // let data = await bookService.shortPollGetBook();
            let data = await bookService.getBooks();
            setBooks(data.books);
        }
        fetchBooks();
    }, []);

    // const deleteBook = async (bookTitle) => {
    //     let resp = await adminService.deleteBook({ title: bookTitle });
    //     console.log(resp);


    //     const updatedBooks = books.filter((book) => book.title !== bookTitle);

    //     // Update the books state by filtering out the deleted book
    //     setBooks(updatedBooks);
    // };


    return (
        <div>
            <input
                type="text"
                className="search-input"
                placeholder="Search query ..."
                onChange={(event) => setQuery(event.target.value)}
            />
            <div className='grid'>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Quantity</th>
                            {/* <th>Actions</th> */}
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
                                    <td>{book.quantity}</td>
                                    {/* <td>
                                        <button onClick={() => deleteBook(book.title)}>Delete</button>
                                    </td> */}
                                    {/* <td><button onClick={() => setActive("EditBook")}>Edit</button></td> */}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div>
                {/* <>{active === "EditBook" && <EditBookComponent />}</> */}
            </div>
        </div>
    )
}

export default BooksComponent


//GET /library/books
// Responsen är en lista över böckerna och ett verisonsnummer som används vid högre betyg. Se kriterier.
