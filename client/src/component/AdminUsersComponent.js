import React from "react";
import AccountComponent from "./AccountComponent";
import UserComponent from "./UserComponent";
import HeaderComponent from "./HeaderComponent";

const AdminUsersComponent = () => {
  return (
    <div className="page-container">
      <HeaderComponent />
      <AccountComponent />
      <div className="center">
        <UserComponent />
      </div>
    </div>
  );
};

export default AdminUsersComponent;
