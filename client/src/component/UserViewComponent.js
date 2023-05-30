import React from 'react';
import AccountComponent from './AccountComponent'
import BooksComponent from './BooksComponent'
import OrderComponent from './OrderComponent'
import SearchComponent from './SearchComponent'

const UserViewComponent = () => {
  return (
    <div>
      <AccountComponent />
      <SearchComponent />
      <BooksComponent />
      <OrderComponent />
    </div>
  )
}

export default UserViewComponent;
