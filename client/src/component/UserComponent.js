import React from 'react'
import { useEffect, useState } from 'react'
import adminService from '../service/adminService.js';
import DeleteUserComponent from './DeleteUserComponent.js';
import PromoteUserComponent from './PromoteUserComponent.js';


const UserComponent = () => {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            let data = await adminService.getUsers();
            console.log(data.users);
            setUsers(data.users);
        }
        fetchUsers();


    }, []);
    // console.log(users[0].purchases);

    // const setPurchases = () => {
    //     if (users.purchases === undefined) {
    //         return users.purchases = 0;
    //     } else {
    //         return users.purchases.length;
    //     }
    // }

    return (
        <div>
            <input
                type="text"
                className="search-input"
                placeholder="Search query ..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className='grid'>
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
                                    <td>{user.role}</td>
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

