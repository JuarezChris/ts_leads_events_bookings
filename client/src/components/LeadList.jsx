import React, { useState } from 'react'
import '../assets/css/leadList.css'

const LeadList = ({leads}) => {
    // const [leads, setLeads] = useState([])

    return (
        <div>
            <h1>New Leads</h1>
                {leads.map(lead => (
                    <div className='leadsListContainer'>
                        <div className='left'>
                            <p key={lead.id}>{lead.fname}</p>
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
                            <select className='actionDropdown' name="action">
                                <option value="">Action</option>
                            </select>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default LeadList