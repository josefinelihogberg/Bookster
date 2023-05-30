import { useState } from "react";
import bookService from "../service/bookService";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [foundBook, setFoundBook] = useState('');

  const searchBooks = async (query) => {
    const resp = await bookService.searchBook(query);
    setFoundBook(resp[0].title);
    if (query ? '' : setFoundBook(''));
  }
  searchBooks(query);

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