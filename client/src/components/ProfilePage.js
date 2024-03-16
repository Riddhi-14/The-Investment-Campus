// ProfilePage.js

import React, { useState, useEffect } from 'react';
import './ProfilePage.css'; // Import CSS file for styling

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [referrals, setReferrals] = useState([]);

    useEffect(() => {
        // Fetch user profile information
        fetchUserProfile();
        // Fetch user orders
        fetchUserOrders();
        // Fetch user referrals
        fetchUserReferrals();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await fetch('/api/profile'); // Replace with actual API endpoint
            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const fetchUserOrders = async () => {
        try {
            const response = await fetch('/api/orders'); // Replace with actual API endpoint
            const userOrders = await response.json();
            setOrders(userOrders);
        } catch (error) {
            console.error('Error fetching user orders:', error);
        }
    };

    const fetchUserReferrals = async () => {
        try {
            const response = await fetch('/api/referrals'); // Replace with actual API endpoint
            const userReferrals = await response.json();
            setReferrals(userReferrals);
        } catch (error) {
            console.error('Error fetching user referrals:', error);
        }
    };

    const renderOrders = () => {
        // Render user orders
        return (
            <div>
                <h3>Orders</h3>
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>{order.productName} - {order.quantity}</li>
                    ))}
                </ul>
            </div>
        );
    };

    const renderReferrals = () => {
        // Render user referrals
        return (
            <div>
                <h3>Referral Purchases</h3>
                <ul>
                    {referrals.map(referral => (
                        <li key={referral.id}>{referral.productName} - {referral.quantity}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    {/* Add profile update form here */}
                </div>
            )}
            {orders.length > 0 && renderOrders()}
            {referrals.length > 0 && renderReferrals()}
        </div>
    );
};

export default ProfilePage;
