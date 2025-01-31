import { useEffect, useState } from 'react';
import './App.css'
import './styles/css/home.css'
import Home from './pages/Home';
import DisplayLead from './components/DisplayLead';
import LeadList from './components/LeadList';
import Dashboard from './pages/Dashboard';
import CreateLead from './pages/CreateLead';
import { AuthProvider, useAuth } from "./context/AuthContext";
import { UserSessionProvider } from './context/UserSessionContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  // const [user, setUser] = useState(null);
  // const [leads, setLeads] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/leads')
  //   .then(response => setLeads(response.data))
  //   .catch(err => console.error(err));
  // }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/api/event_managers/check_login", { withCredentials: true })
  //     .then(res => {
  //       if (res.data.logged_in) {
  //         setUser(res.data.event_manager);
  //       }
  //     })
  //     .catch(err => console.error("Error checking session:", err));
  // }, []);


  return (

    <div >
      <Router>
        {/* <AuthProvider> */}
        <UserSessionProvider>
        <RecentlyViewedProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/lead/list" element={<ProtectedRoute><LeadList /></ProtectedRoute>} /> */}
            <Route path="/dashboard/*" element={<Dashboard />}> 
              <Route index element={<LeadList />} />
              <Route path="leads/:id" element={<DisplayLead />} />
              <Route path="new/lead" element={<CreateLead />} />
            </Route>
            {/* <Route path="/leads/:id" element={<ProtectedRoute><DisplayLead /></ProtectedRoute>} /> */}
          </Routes>
        </RecentlyViewedProvider>
        </UserSessionProvider>
        {/* </AuthProvider> */}
      </Router>

    </div>

  )
};

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" />;
// };

export default App
