import React from "react";
import AccountComponent from "./AccountComponent";
import UserComponent from "./UserComponent";
import HeaderComponent from "./abstract/HeaderComponent";

//Admin view of Users when logged in as "ADMIN"

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
