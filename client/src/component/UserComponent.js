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
    }, []);
  return (
    <div>
        <table>
        <tbody>
        <tr>
            <th>Username</th>
            <th>Role</th>
        </tr>
        {users.map((user) => (
        <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.role}</td>
        </tr>
    ))}
    </tbody>
    </table>
    </div>
  )
}

export default UserComponent;

