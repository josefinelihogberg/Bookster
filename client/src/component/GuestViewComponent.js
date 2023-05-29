import React from 'react'
import BooksComponent from './BooksComponent'
import { Link } from 'react-router-dom';

const GuestViewComponent = () => {
    return (
        <div>
            <h3>Browsing as guest</h3>
            <Link to="/login">
                <button>Sign In</button>
            </Link>
            <BooksComponent />
        </div>
    )
}

export default GuestViewComponent;
