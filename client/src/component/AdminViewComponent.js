import React from 'react'
import AccountComponent from './AccountComponent'
import AddBookComponent from './AddBookComponent'
import BooksComponent from './BooksComponent'
import EditBookComponent from './EditBookComponent'
import SearchComponent from './SearchComponent'
import UserComponent from './UserComponent'

//Holds/shows all the component that the admin will see

const AdminViewComponent = () => {
  return (
    <div>
      <AccountComponent />
      <SearchComponent />
      <BooksComponent />
      <EditBookComponent />
      <AddBookComponent />
      <UserComponent />
    </div>
  )
}

export default AdminViewComponent
