import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import LeadList from './components/LeadList';
import DisplayLead from './components/DisplayLead';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/leads')
    .then(response => setLeads(response.data))
    .catch(err => console.error(err));
  }, []);


  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<LeadList leads={leads} />} />
          <Route path="/leads/:id" element={<DisplayLead />} />
        </Routes>
      </Router>
      {/* <LeadList leads={leads} /> */}

    </>

  )
}

export default App
