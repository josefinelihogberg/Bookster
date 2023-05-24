import AccountComponent from "./AccountComponent.js";
import SearchComponent from "./SearchComponent.js";
import OrderComponent from "./OrderComponent.js";

export default function ProfileComponent() {
  return (
    <div>
      <AccountComponent />
      <SearchComponent />
      <OrderComponent />
    </div>
  );
}
