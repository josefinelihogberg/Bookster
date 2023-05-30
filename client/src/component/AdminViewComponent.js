import React from "react";
import AccountComponent from "./AccountComponent";
import AddBookComponent from "./AddBookComponent";
import AdminBooksComponent from "./AdminBooksComponent";
import DeleteBooksComponent from "./DeleteBooksComponent";
import EditButtonComponent from "./EditButtonComponent";
import SearchComponent from "./SearchComponent";
import UserComponent from "./UserComponent";
import { useState } from "react";
import PurchaseComponent from "./PurchaseComponent";

//Holds/shows all the component that the admin will see

const AdminViewComponent = () => {
  const [active, setActive] = useState("Books");
  const [activeBook, setActiveBook] = useState("");

  const removePopUp = () => {
    setActiveBook("");
  };
  return (
    <div>
      <div>
        <AccountComponent />
        <SearchComponent />
        <button onClick={() => setActive("Books")}>Books</button>
        <button onClick={() => setActive("Users")}>Users</button>
        <button onClick={() => setActiveBook("AddBook")}>Add book</button>

        <>
          {active === "Books" && (
            <div className="grid">
              <AdminBooksComponent />
              <EditButtonComponent />
              <DeleteBooksComponent />
            </div>
          )}
          {active === "Users" && <UserComponent />}
        </>
      </div>
      <div>
        {activeBook === "AddBook" && <AddBookComponent removeBox={removePopUp} />}
        <PurchaseComponent />
      </div>
    </div>
  );
};

export default AdminViewComponent;
