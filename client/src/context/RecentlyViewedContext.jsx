import React, { createContext, useContext, useState, useEffect } from "react";

const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
    const [recentLeads, setRecentLeads] = useState([]);

    useEffect(() => {
        console.log("HERERER111111111111")
        const storedLeads = JSON.parse(localStorage.getItem("recentLeads")) || [];
        setRecentLeads(storedLeads);
    }, []);

    const addLead = (lead) => {
        console.log("HERERER")
        setRecentLeads((prevLeads) => {
            const updatedLeads = [lead, ...prevLeads.filter((l) => l.id !== lead.id)].slice(0, 5);
            localStorage.setItem("recentLeads", JSON.stringify(updatedLeads));
            return updatedLeads;
        });
    };

    return (
    <RecentlyViewedContext.Provider value={{ recentLeads, addLead }}>
        {children}
    </RecentlyViewedContext.Provider>
    );
};

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);