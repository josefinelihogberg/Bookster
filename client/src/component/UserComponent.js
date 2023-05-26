import React from 'react'
import { useEffect, useState } from 'react'
import adminService from '../service/adminService.js';
import AccountComponent from './AccountComponent.js';
import DeleteUserComponent from './DeleteUserComponent.js';
import PromoteUserComponent from './PromoteUserComponent.js';


const UserComponent = () => {
    const [ users, setUsers ] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
        let data = await adminService.getUsers();
        console.log(data);
        setUsers(data.users);
        console.log(users);
    }
    fetchUsers();
    }, []);
  return (
    <div>
        <AccountComponent />
        <div  className='grid'>
        <table>
        <tbody>
        <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Purchases</th>
        </tr>
        {users.map((user) => (
        <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>{user.purchase}</td>
        </tr>
    ))}
    </tbody>
    </table>
    <PromoteUserComponent />
    <DeleteUserComponent />
    </div>
    </div>
  )
}

export default UserComponent;

