import React from "react";
import AccountComponent from "./AccountComponent";
import AddBookComponent from "./AddBookComponent";
import BooksComponent from "./BooksComponent";
import DeleteBooksComponent from "./DeleteBooksComponent";
import EditButtonComponent from "./EditBooksComponent";
import SearchComponent from "./SearchComponent";
import UserComponent from "./UserComponent";
import { useState } from "react";
import PurchaseComponent from "./PurchaseComponent";
import OrderComponent from "./OrderComponent";

//Holds/shows all the component that the admin will see
//user.purchases === undefined ? "0" : user.purchases.length

const AdminViewComponent = () => {
  const [active, setActive] = useState("Books" || "Users");
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
              <BooksComponent />
              <OrderComponent />
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
