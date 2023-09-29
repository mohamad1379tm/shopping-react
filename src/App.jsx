import React from 'react'
import Login from './Login/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginForm from './Login-form/Login-form';
import VarifyEmail from './Varify-your-email/VarifyEmail';
import UsecontextPriv from './Context-Login/Context-Login';
import './App.css'
export default function App() {
  return (
    <div>
      <UsecontextPriv>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Login />}/>
              <Route path='users' element={<LoginForm />}/>
              <Route path='Varify' element={<VarifyEmail />}/>
              <Route path='*' element={<Login />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </UsecontextPriv>
    </div>

  )
}
