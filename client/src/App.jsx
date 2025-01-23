import { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import LeadList from './components/LeadList';


function App() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/leads')
    .then(response => setLeads(response.data))
    .catch(err => console.error(err));
  }, []);


  return (

    <>

      <LeadList leads={leads} />

    </>

  )
}

export default App
