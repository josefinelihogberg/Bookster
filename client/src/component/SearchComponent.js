import { useState } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      value={query}
      className="search-input"
      placeholder="Search query ..."
      onChange={(event) => setQuery(event.target.value)}
    ></input>
  );
};
export default SearchComponent;
