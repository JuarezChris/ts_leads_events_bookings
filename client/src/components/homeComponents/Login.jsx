import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email:'',
        password:'',
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(user)
        axios.post('http://localhost:3001/api/event_managers/login', 
            {event_manager: {
                email: user.email,
                password: user.password,
            }}
            , {withCredentials:true, headers: {
            "Content-Type": "application/json", // Ensure JSON is sent
            "Accept": "application/json", // Expect JSON response
        },})
            .then((res) => {
                navigate("/lead/list")
            })
            .catch((err) => {
                console.error("Login failed:", err.response?.data?.error || err.message);
                setErrors(err.response?.data?.error || "An error occurred.");
            })
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" value={user.email} name='email' onChange={changeHandler}/>
            </div>
            <div>
                <label className="form-label">Password:</label>
                <input type="password" className="form-control" value={user.password} name='password' onChange={changeHandler}/>
            </div>
            <button className='btn btn-primary d-block'>Login</button>
        </form>
    </div>
  )
}

export default Login