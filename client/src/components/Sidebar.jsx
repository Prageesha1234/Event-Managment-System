import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white h-full w-64 p-4">
            <h2 className="text-xl font-bold mb-4">Event Management</h2>
            <ul>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
                </li>
                <li className="mb-2">
                    <Link to="/events" className="hover:text-gray-400">Events</Link>
                </li>
                <li className="mb-2">
                    <Link to="/users" className="hover:text-gray-400">Users</Link>
                </li>
                <li className="mb-2">
                    <Link to="/vendors" className="hover:text-gray-400">Vendors</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;