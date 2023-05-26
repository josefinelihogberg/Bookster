import React from 'react'
import AccountComponent from './AccountComponent'
import AddBookComponent from './AddBookComponent'
import BooksComponent from './BooksComponent'
import DeleteBooksComponent from './DeleteBooksComponent'
import EditBookComponent from './EditBookComponent'
import SearchComponent from './SearchComponent'
import UserComponent from './UserComponent'

//Holds/shows all the component that the admin will see

const AdminViewComponent = () => {
  return (
    <div>
      <AccountComponent />
      <SearchComponent />
      <div className='grid'>
      <BooksComponent />
      <DeleteBooksComponent />
      </div>
      <EditBookComponent />
      <AddBookComponent />
      <UserComponent />
    </div>
  )
}

export default AdminViewComponent
