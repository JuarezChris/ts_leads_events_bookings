import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/leads')
    .then(response => setLeads(response.data))
    .catch(err => console.error(err));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/leads')
  //     .then(response => response.json())
  //     .then(data => setLeads(data))
  //     .catch(err => console.error(err));
  // }, []);

  return (

    <div>
      <h1>Posts</h1>
      <ul>
        {leads.map(lead => (
          <li key={lead.id}>{lead.title}</li>
        ))}
      </ul>
    </div>

  )
}

export default App
