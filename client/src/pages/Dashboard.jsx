import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar';
// import LeadList from '../components/LeadList'
// import DisplayLead from '../components/DisplayLead'
// import ContentOutlet from '../components/ContentOutlet';
import '../styles/css/dashboard.css'
// import { RecentlyViewedProvider } from "../context/RecentlyViewedContext";

const Dashboard = () => {
  return (
    // <RecentlyViewedProvider>
      <div className='dashboardMainContainer'>
          <div className='SideBarMainContainer'>
            <SideBar />
          </div>
          <div className='outletContainer'>
            <NavBar />
            {/* <ContentOutlet /> */}
            {/* Wahhhtt, Learned something new!! */}
            <Outlet />
          </div>
          {/* <Routes>
              <Route index element={<LeadList />} />
              <Route path="/leads/:id" element={<DisplayLead />} />
        </Routes> */}
      </div>
    // </RecentlyViewedProvider>
  )
}

export default Dashboard