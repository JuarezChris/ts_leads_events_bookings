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
        axios.get('http://localhost:8000/api/users', user, {withCredentials:true})
            .then((res) => {

                navigate('/homepage')
            })
            .catch((err) => {
                console.log(err);
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
            <Link to={'/'}>Register here</Link>
        </form>
    </div>
  )
}

export default Login