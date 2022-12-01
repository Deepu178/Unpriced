import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
    setauthenticated(loggedInUser);
    }
    }, []);
    
    if (!authenticated) {
        return <Navigate to="/Login"/>
    // Redirect
    } else {
    return (
    <div>
    <p>Welcome to your Dashboard</p>
    </div>
    );
    }
}
