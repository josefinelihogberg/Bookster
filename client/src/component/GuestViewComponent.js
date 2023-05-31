import React from 'react'
import BooksComponent from './BooksComponent'
import { Link } from 'react-router-dom';
import HeaderComponent from './abstract/HeaderComponent';

//Displays all the components for the guest view

const GuestViewComponent = () => {
    return (
        <div className="page-container">
            <HeaderComponent />
            <div className="grid align-right">
                <p className="guest-text"> Browsing as guest</p>
                <Link to="/login">
                    <button className='login-btn button-'>Sign In</button>
                </Link>
            </div>
            <div className="container center">
                <BooksComponent />
            </div>
        </div>
    )
}

export default GuestViewComponent;
