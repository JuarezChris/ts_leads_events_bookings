import { useState } from 'react';
import '../styles/css/navBar.css'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { useUserSession } from '../context/UserSessionContext';


const NavBar = () => {
    const navigate = useNavigate();
    const { eventManagerSession } = useUserSession();
    const [searchTerm, setSearchTerm] = useState("");

    const logout = () => {
        console.log("Here")
        axios.delete("http://localhost:3001/api/event_managers/logout", {withCredentials:true, headers: {
            "Content-Type": "application/json", // Ensure JSON is sent
            "Accept": "application/json", // Expect JSON response
        },})
            .then(() => {
                // setUserSession(null);
                console.log("Logged out successfully");
                navigate("/")
            })
            .catch(err => console.error("Logout failed:", err));
    };

  return (
    <div className='navBar-container'>
        <div className='nav-left'>
            <p className='nav-burger-icon'></p>
            <p className='nav-circle-icon'></p>
            <div className='signedIn-container'>
                <p>Signed in as</p>
                <p>{ eventManagerSession.fname }</p>
            </div>
            <input 
                type="text"
                placeholder='Search...'
                value = {searchTerm}
                onChange = {(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className='nav-right'>
            <p className='right-nav-icons'></p>
            <p className='right-nav-icons'></p>
            <button onClick={logout}>Help/Question</button>
            <Link to="new/lead" >New Lead</Link>
            <button>New Booking</button>
        </div>
    </div>
  )
}

export default NavBar