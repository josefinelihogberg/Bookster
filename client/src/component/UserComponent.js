import React from 'react'
import { useEffect, useState } from 'react'
import adminService from '../service/adminService.js';
import DeleteUserComponent from './DeleteUserComponent.js';
import PromoteUserComponent from './PromoteUserComponent.js';


const UserComponent = () => {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            let data = await adminService.getUsers();
            console.log(data.users);
            setUsers(data.users);
        }
        fetchUsers();


    }, []);

    return (
        <div>
            <div className='grid'>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search query ..."
                    onChange={(event) => setQuery(event.target.value)}
                />
                <table>
                    <tbody>
                        <tr>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Purchases</th>
                        </tr>
                        {users
                            .filter(
                                (book) => query === "" || book.title.toLowerCase().includes(query.toLowerCase())
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
                <PromoteUserComponent />
                <DeleteUserComponent />
            </div>
        </div>
    )
}

export default UserComponent;

