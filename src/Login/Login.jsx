import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import img from '../image/pexels-lukáš-dlutko-2440297 1.png'
import { Usecontext } from '../Context-Login/Context-Login'

export default function Login() {

    return (
        <div className="App container-xxl w-100 d-flex flex-column align-items-center justify-content-center">
            <div className="Login position-relative d-flex flex-column align-items-center">
                <CreateAccount />
                <LoginInput />
            </div>
        </div>
    )

}

function CreateAccount() {
    return (
        <div className="div-parent d-flex flex-column align-items-center justify-content-center">
            <div className="text text-center position-absolute w-100">
                <span className='text-white'>First time here?
                    <Link className='span' to="/users">
                        <span className='Span-Link'>Create an account!</span>
                    </Link>
                </span>
            </div>
        </div>
    )
}


function LoginInput() {
    const { username, password } = useContext(Usecontext)


    const [usernameLogin, setUsernameLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const elementRef = useRef()
    const passwordRef = useRef()
    const Navigate = useNavigate()
    function LogIn() {
        if (usernameLogin == null || usernameLogin == "" || usernameLogin == " ") {
            elementRef.current.innerHTML = 'your username is danger'
            elementRef.current.classList.add("red")
            setTimeout(() => {
                elementRef.current.classList.remove("red")
            }, 1000);
        } else if (passwordLogin == null || passwordLogin == "" || passwordLogin == " ") {
            passwordRef.current.innerHTML = 'your password is danger'
            passwordRef.current.classList.add("red")
            setTimeout(() => {
                passwordRef.current.classList.remove("red")
            }, 1000);
        } else if (passwordLogin === password && usernameLogin === username) {
            Navigate('/Varify')
        }


    }
    useEffect(() => {
        if (usernameLogin == null || usernameLogin == "" || usernameLogin == " ") {
            elementRef.current.innerHTML = 'your username is danger'
        } else {
            elementRef.current.innerHTML = ' '
        }
        if (passwordLogin == null || passwordLogin == "" || passwordLogin == " ") {
            passwordRef.current.innerHTML = 'your password is danger'
        } else {
            passwordRef.current.innerHTML = ' '
        }
    },[])

    return (
        <>
            <div className="form-Login position-relative flex-column d-flex align-items-center justify-content-center">
                <div className="image-cercal rounded-circle position-absolute d-flex align-items-center justify-content-center">
                    <img className='rounded-circle' src={img} alt="Login-image" />
                </div>
                <div className="text-Login">
                    <h1 className='text-white'>Login</h1>
                </div>
                <div>
                    <form className="input-Login">

                        <label className='border-0'>username</label>

                        <input className='border-0' onChange={e => setUsernameLogin(e.target.value)}
                            placeholder='Enter your username or email' type="text" />

                        <span ref={elementRef} ></span>

                        <label className='border-0'>password</label>

                        <input className='border-0' onChange={e => setPasswordLogin(e.target
                            .value)} placeholder='Enter your password' type="password" />

                        <span ref={passwordRef} ></span>
                    </form>
                </div>
            </div>
            <Forgot loginint={LogIn} />
        </>
    )
}


function Forgot({ loginint }) {
    return (
        <div className="container w-100 Forgot">
            <div className="row h-100 align-items-center justify-content-center text-center">
                <div>
                    <button onClick={loginint} className='mb-4 border-0'>Log in</button>
                    <span className='d-block'>Forgot password?</span>
                </div>
            </div>
        </div>
    )
}