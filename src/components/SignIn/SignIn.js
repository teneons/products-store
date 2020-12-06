import React, { useState } from 'react';
import {useHttp} from '../../hooks/hooks';

const SignIn = () => {
  const {err, request} = useHttp()

  //use state
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [msg, setMsg] = useState(null)

  //gets input data
  const getInputData = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
    e.preventDefault()
  }

  const signUp = async () => {
    try {
      const data = await request('/signin', 'POST', {...inputs})
      await setMsg(data.message)
    } catch(e) {}
  }

  //svg icon
  const svgSgnIn = <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-door-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"/>
    <path fillRule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"/>
    <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z"/>
    </svg>

  return (
    <div className='d-flex justify-content-center row'>
    <form className='col-10 col-sm-9 col-md-5 col-lg-3'>
    <div className="alert alert-dark text-center fw-bold" role="alert">{msg}</div>
      <div className='d-flex justify-content-center m-2'>
        <span className='display-6 text-dark'>Sign <span className="badge bg-dark text-white">In</span></span>
      </div>
      <div className="mt-3 form-floating">
        <input type="email" className="form-control" name='email' onChange={getInputData} id="exampleInputEmail1" placeholder="Email address" />
        <label htmlFor="floatingInputGrid">Email address</label>
      </div>
      <div className="mt-3 form-floating">
        <input type="password" className="form-control" name='password' onChange={getInputData} id="exampleInputPassword1" placeholder="Password" />
        <label htmlFor="floatingInputGrid">Password</label>
      </div>
      <div className='d-flex justify-content-center m-2'>
        <button type="button" className="btn btn-outline-dark" onClick={signUp}>Sign in{svgSgnIn}</button>
      </div>
      </form>
    </div>
  )
}

export default SignIn