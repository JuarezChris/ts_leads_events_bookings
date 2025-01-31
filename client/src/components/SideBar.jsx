import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import logo from '../assets/Tripleseat_Logo_v.jpg'
import { useRecentlyViewed } from "../context/RecentlyViewedContext";


const SideBar = () => {
    const { recentLeads } = useRecentlyViewed();


    return (
        <div className='sideBarMainContent'>
            <div className='logoContainer'>
                <img src={logo} alt="Company Logo" className='companyLogo' />
            </div>
            <div className='linksContainer'>
                <Link to="/dashboard" className="menu-item">📊 Dashboard</Link>
                <Link to="/calendar" className="menu-item">📅 Calendar</Link>
                <Link to="/discussions" className="menu-item">💬 Discussions</Link>
                <Link to="/leads" className="menu-item">📋 Leads</Link>
                <Link to="/bookings" className="menu-item">📅 Bookings</Link>
                <Link to="/events" className="menu-item">🎉 Events</Link>
                <Link to="/tasks" className="menu-item">✅ Tasks</Link>
                <Link to="/contacts" className="menu-item">📞 Contacts</Link>
                <Link to="/accounts" className="menu-item">🏦 Accounts</Link>
            </div>
            <div className="recentlyViewedContainer">
                <p className='recentlyViewTitle'>Recently Viewed Leads</p>
                <ul>
                {recentLeads.map((lead) => (
                    <li key={lead.id}>
                        <p className='RVMiniBoxLetter'>B</p>
                        <Link to={`/leads/${lead.id}`} className='RVLinks'>{lead.name}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div className='linksContainer'>
                <Link to="#" className="menu-item">🏢 Market</Link>
                <Link to="#" className="menu-item">🏢 Success Center</Link>
                <Link to="#" className="menu-item">🏢 Market</Link>
                <Link to="#" className="menu-item">🏢 Market</Link>
                <Link to="#" className="menu-item">🏢 Success Center</Link>
                <Link to="#" className="menu-item">🏢 Success Center</Link>
                <Link to="#" className="menu-item"></Link>
            </div>
        </div>
    )
}

export default SideBar