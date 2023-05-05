import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'
import React from 'react'
import { Link } from 'react-router-dom'
import Mainpage from './Mainpage'
import './Login.css'
import { useState } from 'react'


function Login() {

  const [email , setEmail] = useState('');
  const [password , setPassword] =useState('');

  const signIn= (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((useCredential) => {
      console.log(useCredential)
    }).catch((error) =>{
      console.log(error)
      //sdasdasdasdasd/
    })
  }
  return (

    <form onSubmit={signIn} className="form">
        <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input id="email" className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=''/>
        <div className="cut"></div>
        <label className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="Password"value={password} onChange={(e) => setPassword(e.target.value)} placeholder=''/>
        <div className="cut"></div>
        <label type='password' className="placeholder">Password</label>
        <button type="text" className="submit">Sign In</button>
        <button type="text" className="submit2">Register</button>
        <p>Continue as a guest! <Link to='/mainpage' exact element={<Mainpage/>}>Click</Link></p>
      </div>
   </form>
  )
}

export default Login