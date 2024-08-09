// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Constants from '../../../assets/URL/BASE_URL';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            console.log(token);
            if (token) {
                try {
                    // Verify the token
                    const response = await axios.get(`${Constants.BASE_URL}/user`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setIsAuthenticated(true);
                    setUser(response.data);
                } catch (error) {
                    console.log('no user found');
                    setIsAuthenticated(false);
                    setUser(null);
                    localStorage.removeItem('name');
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }
            } else {
                console.log('no token');
                setIsAuthenticated(false);
                setUser(null);
            }
        };
        checkAuth();
    }, []);
    return (
        <AuthContext.Provider value={{ isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
};
export function useAuth() {
    return useContext(AuthContext);
}
