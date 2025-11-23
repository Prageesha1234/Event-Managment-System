import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                setUsers(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-300 px-4 py-2">ID</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Name</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Role</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="border-b border-gray-300 px-4 py-2">{user.id}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{user.name}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{user.role}</td>
                            <td className="border-b border-gray-300 px-4 py-2">
                                <button className="text-blue-500 hover:underline">Edit</button>
                                <button className="text-red-500 hover:underline ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;