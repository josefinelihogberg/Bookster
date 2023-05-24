import AccountComponent from "./AccountComponent.js";
import SearchComponent from "./SearchComponent.js";
import OrderComponent from "./OrderComponent.js";
import BooksComponent from "./BooksComponent.js";

export default function ProfileComponent() {
  return (
    <div>
      <AccountComponent />
      <BooksComponent />
      <SearchComponent />
      <OrderComponent />
    </div>
  );
}
