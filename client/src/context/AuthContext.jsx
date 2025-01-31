import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userSession, setUserSession] = useState(null);


    // useEffect(() => {
    //     axios.get("http://localhost:3001/api/event_managers/check_login", {withCredentials:true, headers: {
    //         "Content-Type": "application/json", // Ensure JSON is sent
    //         "Accept": "application/json", // Expect JSON response
    //       },})
    //         .then(res => {
    //         if (res.data.logged_in) {
    //             setUserSession(res.data.event_manager);
    //         }
    //         })
    //         .catch(err => console.error("Error checking session:", err));
    // }, []);

    const logout = () => {
        axios.post("http://localhost:3001/api/event_managers/logout", {}, { withCredentials: true })
            .then(() => {
                setUserSession(null);
                console.log("Logged out successfully");
            })
            .catch(err => console.error("Logout failed:", err));
    };

    return (
    <AuthContext.Provider value={{ userSession, setUserSession, logout }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
