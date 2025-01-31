import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const UserSessionContext = createContext();

export const UserSessionProvider = ({ children }) => {
    const [eventManagerSession, setEventManagerSession] = useState({
        id: '',
        fname: '',
        lname: '',
        email: ''
    });

    // AbstractController::ActionNotFound (The action 'show' could not be found for Api::EventManagersController):

    useEffect(() => {
        axios.get("http://localhost:3001/api/event_managers/check_login", {withCredentials:true, headers: {
            "Content-Type": "application/json", // Ensure JSON is sent
            "Accept": "application/json", // Expect JSON response
          },})
            .then(res => {
                console.log(res)
            if (res.data.logged_in) {
                setEventManagerSession(res.data.event_manager);
            }
            })
            .catch(err => console.error("Error checking session:", err));
    }, []);


    return (
    <UserSessionContext.Provider value={{ eventManagerSession, setEventManagerSession }}>
        {children}
    </UserSessionContext.Provider>
    );
};

export const useUserSession = () => useContext(UserSessionContext);
