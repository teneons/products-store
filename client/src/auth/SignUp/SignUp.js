import React, {useState} from 'react';
import {useHttp} from '../../hooks/hooks';

const SignUp = () => {
  const {err, request} = useHttp()    //use hook

  //use useState
  const [inputs, setInputData] = useState({firstName: '', lastName: '', email: '', password: ''})
  const [outMsg, setMsg] = useState(null)

  //gets data
  const getInputData = e => {
    setInputData({...inputs, [e.target.name]: e.target.value})
  }

  const registerIn = async () => {
    try {
      const data = await request('/signup', 'POST', {...inputs})
      setMsg(data.message)
    } catch(e) {}
  }

  const sbgSgnUp = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-ui-radios" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z"/>
    <path fillRule="evenodd" d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
    </svg>

  return (
    <div className='d-flex justify-content-center'>
      <form className="row g-3 needs-validatio col-11 col-sm-10 col-md-7 col-lg-4" noValidate>
      <div className="alert alert-dark text-center fw-bold" role="alert">{outMsg}</div>
      <div className='column'>
        <div className='d-flex justify-content-center m-2'>
          <span className='display-6 text-dark'>Sign <span className="badge bg-dark text-white">Up</span></span>
        </div>

        <div className="col-md-10 mb-3">
          <input type="text" className="form-control" name='firstName' onChange={getInputData} id="validationCustom01" placeholder='First name' required />
          <div className="valid-feedback fw-bold">Looks good</div>
        </div>

        <div className="col-md-10 mb-3">
          <input type="text" className="form-control" name='lastName' onChange={getInputData} id="validationCustom02" placeholder='Last name' required />
          <div className="valid-feedback fw-bold">Looks good</div>
        </div>
          
        <div className="col-md-10 mb-3">
          <input type="email" className="form-control" name='email' onChange={getInputData}  id="validationCustom03" placeholder='Email' required />
          <div className="valid-feedback">Looks good</div>
        </div>

        <div className="col-md-10 mb-3">
          <input type="password" className="form-control" name='password' onChange={getInputData} id="validationCustom04" placeholder='Password' required />
          <div className="valid-feedback">Looks good</div>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-outline-dark" type="button" onClick={registerIn}>Sign up {sbgSgnUp}</button>
        </div>

      </div>
      <span className='text-dark text-center'>Already have an account? Then <a href='/signin' className='text-dark fw-bold'>sign in</a></span>
      </form>
      </div>
    )
}

export default SignUp;