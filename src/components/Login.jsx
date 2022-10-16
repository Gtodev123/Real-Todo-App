import React from 'react'
import { Link } from 'react-router-dom'
import Mainpage from './Mainpage'
import './Login.css'
function Login() {
  return (

    <div className="form">
        <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" autoComplete='off' type="text" placeholder=" " />
        <div className="cut"></div>
        <label className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="Password" placeholder=" " />
        <div className="cut"></div>
        <label type='password' className="placeholder">Password</label>
        <button type="text" className="submit">submit</button>
        <p>Continue as a guest! <Link to='/mainpage' exact element={<Mainpage/>}>Click</Link></p>
      </div>
   </div>
  )
}

export default Login