import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useRecentlyViewed } from "../context/RecentlyViewedContext";

const DisplayLead = () => {
    const { id } = useParams(); 
    const { addLead } = useRecentlyViewed();
    const [lead, setLead] = useState({
        fname: ""
    }); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:3001/api/leads/${id}`)
        .then(response => setLead(response.data))
        .catch(err => console.error("Error fetching lead data:", err))
    
        }, [id]);
        
        useEffect(() => {
            if (lead) {
                addLead({ id: lead.id, name: lead.fname });
            }
        }, [lead]);

    return (
    <div>
        <h1>{lead.fname}</h1>
    </div>
    )
}

export default DisplayLead