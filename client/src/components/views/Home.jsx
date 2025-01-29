import { useState } from 'react';
import Reg from '../homeComponents/Reg';
import Login from '../homeComponents/Login';
// import '../assets/css/home.css' // need to figure out why it's not working

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);

return (
    <div>
        { showLogin ? (
            <>
                <Login />
                <p
                    className='loginRegLink'
                    onClick={() => setShowLogin(false)}
                    style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                >
                    Don't have an account? Register Here
                </p>
                
            </>
        ) : (
            <>
                <Reg />
                <p
                    className='loginRegLink'
                    onClick={() => setShowLogin(true)}
                    style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                >
                    Already have an account? Login here
                </p>
            </>
        )

        }
        
    </div>
)
}

export default Home