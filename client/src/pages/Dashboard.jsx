import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p>Welcome to the Event Management System Dashboard!</p>
                    {/* Additional dashboard content can be added here */}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;