import AccountComponent from "./AccountComponent.js";
import SearchComponent from "./SearchComponent.js";
import OrderComponent from "./OrderComponent.js";
import BooksComponent from "./BooksComponent.js";
import UpdateBookComponent from "./UpdateBookComponent.js";

export default function ProfileComponent() {
  return (
    <div>
      <AccountComponent />
      <SearchComponent />
      <BooksComponent />
      <OrderComponent />
      <UpdateBookComponent />
    </div>
  );
}
