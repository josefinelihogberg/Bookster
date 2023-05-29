import React from "react";
import { useState, useEffect } from "react";
import adminService from "../service/adminService";
import PopUpComponent from "./PopUpComponent";
import "./testing.css";

//Promotes a user from the db - might need a warning/do you want to delete user

const PromoteUserComponent = () => {
  const [usersArray, setUsersArray] = useState([]);
  const [user, setUser] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      let data = await adminService.getUsers();
      console.log(data);
      setUsersArray(data.users);
    };
    fetchUsers();
  }, []);

  const submitHandler = async (e) => {
    let resp = await adminService.promoteUser({ username: user });
    console.log(resp);
    setActive("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setActive("Popup");
    console.log(e.target.value);
    setUser(e.target.value);
  };

  const removePopUp = () => {
    setActive("");
  };

  return (
    <>
      <div>
        <form className="delete-form">
          {usersArray.map((user) => (
            <button
              key={user.username}
              type="submit"
              name="username"
              onClick={(e) => handleChange(e, "value")}
              value={user.username}
            >
              Promote
            </button>
          ))}
        </form>
      </div>
      <div>
        {active === "Popup" && (
          <PopUpComponent
            onOkClick={(e) => submitHandler}
            onCancelClick={(e) => removePopUp}
            insertText={"Are you sure you want to promote user " + user + " to Admin?"}
          />
        )}
      </div>
    </>
  );
};

export default PromoteUserComponent;
