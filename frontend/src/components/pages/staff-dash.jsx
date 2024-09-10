import React from 'react';
import { useAuth } from '../../contexts/authContext/AuthProvider';

const StaffDashboard = () => {
    const { currentUser } = useAuth();

    return (
        <div className="flex min-h-screen bg-gray-800 text-white pt-14">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 p-6">
                <h2 className="text-xl font-bold mb-6">Staff Dashboard</h2>
                <ul className="space-y-4">
                    <li><a href="#" className="block text-gray-300 hover:text-white">Overview</a></li>
                    <li><a href="#" className="block text-gray-300 hover:text-white">Manage Users</a></li>
                    <li><a href="#" className="block text-gray-300 hover:text-white">Settings</a></li>
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold">Welcome, {currentUser.displayName ? currentUser.displayName : currentUser.email}</h1>
                <p className="mt-4 text-lg">
                    You are logged in as a <span className="text-indigo-400">Staff</span>.
                </p>
                {/* Example staff-specific content */}
                <div className="mt-8">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Manage Reports</h3>
                            <p className="mt-2 text-gray-300">Access and oversee all staff reports.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">User Analytics</h3>
                            <p className="mt-2 text-gray-300">View analytics and statistics on users.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">Team Settings</h3>
                            <p className="mt-2 text-gray-300">Manage staff and their roles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;