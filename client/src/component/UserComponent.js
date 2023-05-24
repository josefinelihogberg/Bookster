import React from 'react'
import { useEffect, useState } from 'react'
import adminService from '../service/adminService.js';


const UserComponent = () => {
    const [ users, setUsers ] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
        let data = await adminService.getUsers();
        console.log(data);
        setUsers(data);
        console.log(users);
    }
    fetchUsers();
    }, [ ]);
  return (
    <div>{users.map((user) => (
        <div key={user.username}>
            <p>{user.username}</p>
            <p>{user.password}</p>
            <p>{user.role}</p>
        </div>
    ))}
    </div>
  )
}

export default UserComponent;

