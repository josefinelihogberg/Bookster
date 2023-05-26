import React from 'react'
import LogoutComponent from './abstract/LogoutComponent'
import AccountComponent from './AccountComponent'
import BooksComponent from './BooksComponent'
import SearchComponent from './SearchComponent'

const UserViewComponent = () => {
  return (
    <div>
        <AccountComponent/>
        <SearchComponent />
        <BooksComponent />
    </div>
  )
}

export default UserViewComponent;
