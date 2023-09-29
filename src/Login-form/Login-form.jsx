import { Link, useNavigate } from 'react-router-dom'
import './Login-form.css'
import img from '../image/pexels-lukáš-dlutko-2440297 1.png'
import { useContext, useEffect, useRef, useState } from 'react'
import { Usecontext } from '../Context-Login/Context-Login'

export default function LoginForm() {

  const {username , password , setUsername , setPasseord} = useContext(Usecontext)


  return (
    <div>
      <div className="container-xxl p-0">
        <div className="justify-content-center align-align-items-center m-0 row">
          <div className="box">

            <CreateAccount/>

            <ImageForm />

            <Register username={username} password={password} setPasseord={setPasseord} setUsername={setUsername} />

          </div>
        </div>
      </div>
    </div> 
  )
}
 

function CreateAccount(){
  return(
    <div className="Create-account w-100 justify-content-center align-items-center d-flex">
      <span className='text-white me-2'>Already have an account?</span>
      <Link to='/'>Log in!</Link>
    </div>
  )
}

function ImageForm(){
  return(
      <div className="image-form w-100 position-relative justify-content-center align-items-center d-flex">
        <div className="div justify-content-center align-items-center d-flex rounded-circle position-absolute">
          <img className='rounded-circle' src={img} alt="image"/>
        </div>
      </div>
  )
}

function Register({username , password , setUsername , setPasseord}){
  const [email , setEmail] = useState('')

  const [confirm , setConfirm] = useState('')
  const Navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef() 
  const confirmRef = useRef()

  // username
  // password




  useEffect(() => {
    if(email == null || email == "" || email == " " || (email.search(/@gmail.com/)) < 3 || (email.search(/[ا-ی]/)) >= 0){
      emailRef.current.innerHTML = 'your username is danger'
    }else{
        emailRef.current.innerHTML = ' ' 
    }
    if(username == null || username == "" || username == " "){
      usernameRef.current.innerHTML = 'your username is danger'
    }else{
      usernameRef.current.innerHTML = ' '
    }
    if(password == null || password == "" || password == " "){
      passwordRef.current.innerHTML = 'your username is danger'
    }else{
      passwordRef.current.innerHTML = ' '
    }
    if(confirm == null || confirm == "" || confirm == " "){
      confirmRef.current.innerHTML = 'your username is danger'
    }else{
      confirmRef.current.innerHTML = ' '
    }
  },)

  function ClickButton(){
    if(email == null || email == "" || email == " "){
      emailRef.current.innerHTML = 'your username is danger'
      emailRef.current.classList.add("red")
      setTimeout(() => { 
          emailRef.current.classList.remove("red")
      }, 1000);
    }else if(username == null || username == "" || username == " "){
      usernameRef.current.innerHTML = 'your username is danger'
      usernameRef.current.classList.add("red")
      setTimeout(() => { 
          usernameRef.current.classList.remove("red")
      }, 1000);
    }else if(password == null || password == "" || password == " "){
      passwordRef.current.innerHTML = 'your username is danger'
      passwordRef.current.classList.add("red")
      setTimeout(() => { 
          passwordRef.current.classList.remove("red")
      }, 1000);
    }else if(confirm == null || confirm == "" || confirm == " "){
      confirmRef.current.innerHTML = 'your username is danger'
      confirmRef.current.classList.add("red")
      setTimeout(() => { 
          confirmRef.current.classList.remove("red")
      }, 1000);
    }else if(confirm !== password){
      console.log('nooooh');
    }else{
      Navigate('/')
    }
  }

  return(
    <>
      <div className="register h-auto w-100 d-flex justify-content-center align-items-center">
        <div className="register-form">

          <div className="SignIn">
            <h3>Sign in</h3>
          </div>

          <div className="input-form">

            <form className='d-flex justify-content-center align-items-center'>

            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" />

            <span className='text-start w-100' ref={emailRef}></span>
  
              
            <label>Username</label>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" />

            <span className='text-start w-100' ref={usernameRef}></span>

            <label>Password</label>
            <input onChange={(e)=>setPasseord(e.target.value)} type="password" />

            <span className='text-start w-100'  ref={passwordRef}></span>

            <label>Confirm password</label>
            <input onChange={(e)=>setConfirm(e.target.value)} type="password" />

            <span className='text-start w-100' ref={confirmRef}></span>

            </form>

          </div>

        </div>
      </div>
      <ButtonF func={ClickButton}/>
    </>
  )
}


function ButtonF({func}){
  return(
    <div className='RegisterButton'>
      <button onClick={func}>Register</button>
    </div>
  )
}











