import React from 'react'
import { useState, useEffect } from 'react';
import adminService from '../service/adminService';
import './testing.css';

//Promotes a user from the db - might need a warning/do you want to delete user

const PromoteUserComponent = () => {
    const [ usersArray, setUsersArray ] = useState([]);
    const [ user, setUser ] = useState();

    useEffect(() => {
    const fetchUsers = async () => {
        let data = await adminService.getUsers();
        console.log(data)
        setUsersArray(data.users);
    }
    fetchUsers();
}, []);
    
    const submitHandler = async () => {
        let resp = await adminService.promoteUser({ username: user } );
        console.log(resp);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setUser(e.target.value);
    }


  return (
    <div>
        <form className='delete-form' onSubmit={submitHandler}> 
        {usersArray.map((user) => (
      <button key={user.username} type="submit" name="username" onClick={(e) => handleChange (e, 'value')} value={user.username}>Promote</button>))}
      </form>
    </div>
  )
}

export default PromoteUserComponent;
