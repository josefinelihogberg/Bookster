import React, { useState, useEffect } from "react";
import bookService from "../service/bookService";
import "./main.css";

const OrderComponent = () => {
    const [quantity, setQuantity] = useState(0);
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState();

    useEffect(() => {
        const fetchLibrary = async () => {
            let data = await bookService.getBooks();
            setBooks(data.books);
            console.log(data.books);
        };
        fetchLibrary();
    }, []);

    const buyBook = async () => {
        const body = {
            title: book,
            quantity: quantity,
        };

        let resp = await bookService.buyBook(body);
        console.log(resp)
    };

    const handleChange = (e) => {
        setBook(e.target.value);
    };

    const handleIncrement = (e) => {
        e.preventDefault();
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = (e) => {
        e.preventDefault();
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <div>
            <form className="order-form" onSubmit={buyBook}>
                <button className="reduce-btn" onClick={handleDecrement}>
                    -
                </button>
                {quantity}
                <button className="increase-btn" onClick={handleIncrement}>
                    +
                </button>
                <div className="btn-columns order-btn-fix">
                    {books.map((book) => (


                        <button
                            key={book.title}
                            type="submit"
                            name="title"
                            onClick={handleChange}
                            value={book.title}
                        >
                            Order
                        </button>

                    ))}
                </div>
            </form>
        </div>
    );
};

export default OrderComponent;