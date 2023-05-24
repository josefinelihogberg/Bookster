import AccountComponent from "./AccountComponent.js";
import LibraryComponent from "./LibraryComponent.js";
import SearchComponent from "./SearchComponent.js";
import OrderComponent from "./OrderComponent.js";

export default function ProfileComponent() {
  return (
    <div>
      <AccountComponent />
      <LibraryComponent />
      <SearchComponent />
      <OrderComponent />
    </div>
  );
}
