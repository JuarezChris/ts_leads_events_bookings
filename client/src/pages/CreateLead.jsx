import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/css/newLead.css'
import axios from 'axios';


const CreateLead = () => {
    const navigate = useNavigate()
    const [lead, setLead] = useState({
        fname:'',
        lname:'',
        company: '',
        email:'',
        phone: '',
        location: '',
        owner: '',
        arrive: '',
        event_title: '',
        lead_sources: '',
        referal: '',
        managers: '',
        status: '',
        depart: '',
        dates_flex: '',
        email_opt: 0
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setLead({...lead, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(user)
        axios.post('http://localhost:3001/api/leads', 
            {lead}
            , {withCredentials:true, headers: {
            "Content-Type": "application/json", // Ensure JSON is sent
            "Accept": "application/json", // Expect JSON response
        },})
            .then((res) => {
                // setUser(response.data.event_manager);
                navigate("/dashboard")
            })
            .catch((err) => {
                console.error("Login failed:", err.response?.data?.error || err.message);
                setErrors(err.response?.data?.error || "An error occurred.");
            })
    }
  return (
    <div>
        <h1 className='title'>New Lead</h1>
        <div className='main-nwl-lt-rt-container'>
            <div className='left-content'>
                <form onSubmit={submitHandler}>
                    <h2>Personal Details</h2>
                    <div className='personal-det-container'>
                        <div className='per-det-left'>
                            <div>
                                <label>First Name:</label>
                                <input type="text" name="fname" value={lead.fname} onChange={changeHandler} />
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input type="text" name="lname" value={lead.lname} onChange={changeHandler} />
                            </div>
                            <div>
                                <label>Company:</label>
                                <input type="text" name="company" value={lead.company} onChange={changeHandler} />
                            </div>
                        </div>
                        <div className='per-det-right'>
                            <div>
                                <label>Email:</label>
                                <input type="email" name="email" value={lead.email} onChange={changeHandler} />
                            </div>
                            <div>
                                <label>Phone:</label>
                                <input type="tel" name="phone" value={lead.phone} onChange={changeHandler} />
                            </div>
                        </div>
                    </div>
                    <h2>Event Details</h2>
                    <div className='event-det'>
                        <div className='event-det-left'>
                            <div>
                                <label>Location:</label>
                                <input type="text" name="location" value={lead.location} onChange={changeHandler} />
                            </div>
                            <div>
                                <label>Arrive Date:</label>
                                <input type="date" name="arrive" value={lead.arrive} onChange={changeHandler} />
                            </div>
                        </div>
                        <div className='event-det-right'>
                            <div>
                                <label>Event Title:</label>
                                <input type="text" name="event_title" value={lead.event_title} onChange={changeHandler} />
                            </div>
                        </div>
                    </div>
                    <h2>Lead Details</h2>
                    <div className='lead-det'>
                        <div className='lead-det-left'>
                            <div>
                                <label>Lead Sources:</label>
                                <input type="text" name="lead_sources" value={lead.lead_sources} onChange={changeHandler} />
                            </div>
                            <div>
                                <label>Referral:</label>
                                <input type="text" name="referal" value={lead.referal} onChange={changeHandler} />
                            </div>
                        </div>
                        <div className='lead-det-right'>
                            <div>
                                <label>Owner:</label>
                                <input type="text" name="owner" value={lead.owner} onChange={changeHandler} />
                            </div>
                            <div>
                                <label>Managers:</label>
                                <input type="text" name="managers" value={lead.managers} onChange={changeHandler} />
                            </div>
                        </div>
                    </div>
                    <div className='buttons-container'>
                        <button>Create</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
            <div className='right-content'>
                <h2>No Events Found</h2>
                <p>select a date and location</p>
            </div>
        </div>
    </div>
  )
}

export default CreateLead