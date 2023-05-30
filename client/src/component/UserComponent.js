import React from "react";
import { useEffect, useState } from "react";
import adminService from "../service/adminService.js";
import DeleteUserComponent from "./DeleteUserComponent.js";
import PromoteUserComponent from "./PromoteUserComponent.js";
import { Link } from "react-router-dom";

const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      let data = await adminService.getUsers();
      console.log(data.users);
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search query ..."
          onChange={(event) => setQuery(event.target.value)}
        />
        <Link to="/admin/books">
          <button className="addbook-btn button-effect">Books</button>
        </Link>
        <Link to="/admin/users">
          <button className="addbook-btn button-effect">Users</button>
        </Link>
      </div>
      <div className="grid">
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Purchases</th>
            </tr>
            {users
              .filter(
                (user) => query === "" || user.username.toLowerCase().includes(query.toLowerCase())
              )
              .map((user) => (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>{user.purchases === undefined ? "0" : user.purchases.length}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {query === "" ? <PromoteUserComponent /> : undefined}
        {query === "" ? <DeleteUserComponent /> : undefined}
      </div>
    </div>
  );
};

export default UserComponent;
