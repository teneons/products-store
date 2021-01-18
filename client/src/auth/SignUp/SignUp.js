import React, { useState, useEffect } from 'react';
import {useHttp} from '../../hooks/hooks';

const SignUp = () => {
  const {request} = useHttp()    //use hook

  //use useState
  const [inputs, setInputData] = useState({firstName: '', lastName: '', email: '', password: ''})
  const [msgAlert, setMsgAlert] = useState(null)
    const [alertClass, setAlertClass] = useState('alert alert-dark alert-dismissible fade hide')

  //gets data
  const getInputData = e => setInputData({...inputs, [e.target.name]: e.target.value})

  //show/hide alert message
  useEffect(() => {
    setAlertClass("alert alert-secondary alert-dismissible fade show")

    if(msgAlert === undefined || msgAlert === null) {
      setAlertClass("alert alert-secondary alert-dismissible fade hide")
    }
    
  }, [msgAlert])

  //request
  const signUp = async () => {
    if(inputs.firstName === '' || inputs.lastName === '' || inputs.email === '' || inputs.password === '') {
      setMsgAlert('Not all fields are filled')
    } else {
      const data = await request('/signup', 'POST', {...inputs})

      //check at exist data.err
      if(typeof data.err !== 'undefined') {
        //ckeck/set email field
        if(data.err.email) {
          setMsgAlert(data.err.email.msg)
        } else if(data.err.password) setMsgAlert(data.err.password.msg)  //ckeck/set password field
      } else setMsgAlert(data.message)  //set general message

    }

  }
  

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh'}}>
      <form className='col-11 col-sm-10 col-md-7 col-lg-4'>

        <div className='d-flex justify-content-center m-2'>
          <span className='display-6 text-dark'>Sign <span className="badge bg-dark text-white">Up</span></span>
        </div>

        <div className={alertClass} role="alert">
          {msgAlert}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div className="mt-3 form-floating">
          <input type="text" className="form-control" name='firstName' onChange={getInputData} placeholder="First name" />
          <label htmlFor="floatingInputGrid">First name</label>
        </div>
        <div className="mt-3 form-floating">
          <input type="text" className="form-control" name='lastName' onChange={getInputData} placeholder="Last name" />
          <label htmlFor="floatingInputGrid">Last name</label>
        </div>
        <div className="mt-3 form-floating">
          <input type="email" className="form-control" name='email' onChange={getInputData} placeholder="Email address" />
          <label htmlFor="floatingInputGrid">Email address</label>
        </div>
        <div className="mt-3 form-floating">
          <input type="password" className="form-control" name='password' onChange={getInputData} placeholder="Password" />
          <label htmlFor="floatingInputGrid">Password</label>
        </div>

        <div className='d-flex justify-content-center m-3'>
          <button type="button" className="btn btn-lg btn-outline-dark" onClick={signUp}>Sign up</button>
        </div>

        <div className='d-flex justify-content-center'>
          <span className='text-dark text-center'>Already have an account? Then <a href='/signin' className='text-dark fw-bold'>sign in</a></span>
        </div>
      </form>
    </div>
  )
}

export default SignUp;