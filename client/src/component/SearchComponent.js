import { useState } from "react";
import bookService from "../service/bookService";
import userService from "../service/userService";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [foundBook, setFoundBook] = useState('');

  const searchBooks = async (query) => {
    const resp = await bookService.searchBook(query);
    setFoundBook(resp[0].title);
    if (query ? '' : setFoundBook(''));
  }
  searchBooks(query);

  const searchUser = async (query) => {
    const resp = await userService.
  }

  return (
    <>
      <input
        type="text"
        value={query}
        className="search-input"
        placeholder="Search query ..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{foundBook}</p>
    </>
  );
};
export default SearchComponent;