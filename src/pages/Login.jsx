import React, { useState } from 'react'
import '../style.scss'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';

const Login = () => {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handelSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (error) {
            console.log(error);
            setErr(true)
        }

    }
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>PChat</span>
                <span className='title'>Login</span>
                <form onSubmit={handelSubmit}>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button>Sign Up</button>
                    {err && <span>Somthing went wrong</span>}
                </form>
                <p>You don't have an account? <Link className='linkCtrl' to={'/register'}>Register</Link></p>
            </div>
        </div>
    )
}

export default Login