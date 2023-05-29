import AccountComponent from "./AccountComponent.js";
import SearchComponent from "./SearchComponent.js";
import OrderComponent from "./OrderComponent.js";
import BooksComponent from "./BooksComponent.js";
import AddBookComponent from "./AddBookComponent.js";
import EditBookComponent from "./EditBookComponent.js";
import PurchaseComponent from "./PurchaseComponent.js";

export default function ProfileComponent() {
  return (
    <div>
      <AccountComponent />
      <SearchComponent />
      <BooksComponent />
      <OrderComponent />
      <AddBookComponent />
      <EditBookComponent />
      <PurchaseComponent />
    </div>
  );
}
