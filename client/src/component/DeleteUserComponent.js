import React from 'react'
import { useState, useEffect } from 'react';
import adminService from '../service/adminService';
import PopUpComponent from './abstract/PopUpComponent'
import './main.css';

//Deletes a user from the db - might need a warning/do you want to delete user

const DeleteUserComponent = () => {
  const [usersArray, setUsersArray] = useState([]);
  const [user, setUser] = useState();
  const [active, setActive] = useState('');


  useEffect(() => {
    const fetchUsers = async () => {
      let data = await adminService.getUsers();
      console.log(data)
      setUsersArray(data.users);
    }
    fetchUsers();
  }, []);

  const submitHandler = async (e) => {
    let resp = await adminService.deleteUser({ username: user });
    console.log(resp);
    setActive('');
    window.location.reload();
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setActive("Popup");
    setUser(e.target.value);
  }

  const removePopUp = () => {
    setActive('');
  }


  return (
    <div>
      <form className='btn-columns btn-columns-users'>
        {usersArray.map((user) => (
          <button className='btn-column delete-btn' key={user.username} type="submit" name="username" onClick={(e) => handleChange(e, 'value')} value={user.username}>Delete</button>))}
      </form>
      <div>
        {active === "Popup" && <PopUpComponent onOkClick={(e) => submitHandler} onCancelClick={(e) => removePopUp} insertText={"Are you sure you want to delete user " + user + "?"} />}
      </div>
    </div>
  )
}

export default DeleteUserComponent;
