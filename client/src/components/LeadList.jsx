import React, { useState } from 'react'
import '../assets/css/leadList.css'
import { useNavigate } from "react-router-dom";

const LeadList = ({ leads }) => {
  const navigate = useNavigate();

  const handleLeadClick = (leadId) => {
    navigate(`/leads/${leadId}`); 
  };
    return (
        <div className='leadListMainContainer'>
            <h2>New Leads</h2>
                {leads.map(lead => (
                    <div 
                        key={lead.leads_id}
                        className='leadsListContainer' 
                        onClick={() => handleLeadClick(lead.leads_id)}
                        >
                        <div className='left'>
                            <p>{lead.fname}</p>
                            <p>{lead.phone}</p>
                            <p>{lead.email}</p>
                            <p>{lead.company}</p>
                        </div>
                        <div className='middle-left'>
                            <p>{lead.arrive} - {lead.depart}</p>
                        </div>
                        <div className='middle-right'>
                            <p>{lead.event_title}</p>
                            <p>Event List</p>
                        </div>
                        <div className='right'>
                            <p>Submitted {lead.created_at}</p>
                            <p>{lead.lead_sources}</p>
                        </div>
                        <div className='end'>
                            <select 
                                className='actionDropdown' 
                                name="action"
                                onClick={(e) => e.stopPropagation()}
                                >
                                <option value="">Action</option>
                                <option value="">Convert</option>
                            </select>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default LeadList