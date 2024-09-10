import React from 'react';
import { useAuth } from '../../contexts/authContext/AuthProvider';

const UserDashboard = () => {
    const { currentUser } = useAuth();

    return (
        <div className="min-h-screen bg-gray-100 pt-14">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800">Welcome, {currentUser.displayName ? currentUser.displayName : currentUser.email}</h1>
                <p className="mt-2 text-xl text-gray-600">You are logged in as a <span className="text-blue-500">User</span>.</p>
                
                {/* User-specific content */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800">Profile Overview</h3>
                        <p className="mt-4 text-gray-600">View and update your personal details.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            View Profile
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800">My Activities</h3>
                        <p className="mt-4 text-gray-600">Track your recent activities and progress.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            View Activities
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800">Notifications</h3>
                        <p className="mt-4 text-gray-600">Check the latest updates and alerts.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            View Notifications
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
