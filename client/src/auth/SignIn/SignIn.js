import React, { useState, useEffect } from 'react';
import {useHttp} from '../../hooks/hooks';

const SignIn = () => {
  const {request} = useHttp()

  //state
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [msgAlert, setMsgAlert] = useState(null)
    const [alertClass, setAlertClass] = useState('alert alert-dark alert-dismissible fade hide')
  const [userData, setUserData] = useState(null)


  //gets input data
  const getInputData = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
    e.preventDefault()
  }

    //show/hide alert message
  useEffect(() => {
    setAlertClass("alert alert-secondary alert-dismissible fade show")
    if(msgAlert === undefined || msgAlert === null) {
      setAlertClass("alert alert-secondary alert-dismissible fade hide")
    }
    
    return () => setAlertClass("alert alert-secondary alert-dismissible fade hide")
  }, [msgAlert])


  //request
  const signIn = async () => {
    try {
      const data = await request('/signin', 'POST', {...inputs})

      //set errorw
      await setMsgAlert(data.message)
      await setAlertClass("alert alert-secondary alert-dismissible fade show")
      
      //set data after good responsive
      await setUserData(data)

    } catch(e) {
      throw e
    }
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh'}}>
    <form className='col-10 col-sm-9 col-md-5 col-lg-3'>

      <div className='d-flex justify-content-center m-2'>
        <span className='display-6 text-dark'>Sign <span className="badge bg-dark text-white">In</span></span>
      </div>

      <div className={alertClass} role="alert">
        {msgAlert}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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
        <button type="button" className="btn btn-outline-dark" onClick={signIn}>Sign in</button>
      </div>

      <span className='text-dark text-center'>Don't have an account yet? Then <a href='/signup' className='text-dark fw-bold'>register</a></span>
    </form>
    </div>
  )
}

export default SignIn