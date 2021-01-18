import React, { useState } from 'react';
import {useHttp} from '../../hooks/hooks';

const SignIn = () => {
  const {err, request} = useHttp()

  //use state
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [msg, setMsg] = useState(null)
  const [emailMsg, setEmailMsg] = useState(null)
    const [emailClass, setEmailClass] = useState('form-control')
  const [passwordMsg, setPasswordMsg] = useState(null)
    const [passwordClass, setPasswordClass] = useState('form-control')
  const [userData, setUserData] = useState(null)

  //gets input data
  const getInputData = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
    e.preventDefault()
  }

  const signIn = async () => {
    try {
      const data = await request('/signin', 'POST', {...inputs})
      
      //set data after good responsive
      await setUserData(data)

      //set errors
      if(data.err[0].param === 'email') {
        await setEmailMsg(data.err[0].msg)
        await setEmailClass('form-control is-invalid')
      }
      if(data.err[0].param === 'password') {
        await setPasswordMsg(data.err[0].msg)
        await setPasswordClass('form-control is-invalid')
      }

    } catch(e) {
      console.log(e)
    }
  }

  //svg icon
  const svgSgnIn = <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-door-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"/>
    <path fillRule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"/>
    <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z"/>
    </svg>

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh'}}>
    <form className='col-10 col-sm-9 col-md-5 col-lg-3'>
    
    <div className="toast d-flex align-items-center text-dakr bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true">
      <div className="toast-body">asd</div>
      <button type="button" className="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>

      <div className='d-flex justify-content-center m-2'>
        <span className='display-6 text-dark'>Sign <span className="badge bg-dark text-white">In</span></span>
      </div>
      <div className="mt-3 form-floating">
        <input type="email" className={emailClass} name='email' onChange={getInputData} id="exampleInputEmail1" placeholder="Email address" />
        <label htmlFor="floatingInputGrid">Email address</label>
        <div className="invalid-feedback">{emailMsg}</div>
      </div>
      <div className="mt-3 form-floating">
        <input type="password" className={passwordClass} name='password' onChange={getInputData} id="exampleInputPassword1" placeholder="Password" />
        <label htmlFor="floatingInputGrid">Password</label>
        <div className="invalid-feedback">{passwordMsg}</div>
      </div>
      <div className='d-flex justify-content-center m-2'>
        <button type="button" className="btn btn-outline-dark" onClick={signIn}>Sign in{svgSgnIn}</button>
      </div>

      <span className='text-dark text-center'>Don't have an account yet? Then <a href='/signup' className='text-dark fw-bold'>register</a></span>
    </form>
    </div>
  )
}

export default SignIn