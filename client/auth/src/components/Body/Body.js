import React, { Component } from 'react';

export default class Body extends Component {

  render() {

    return (
      <div className='container-fluid bg-secondary d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>

        <div className='container col-4 d-flex justify-content-center align-content-center rounded-3 bg-dark shadow-lg' >
          
          <div className='m-2'>
            <a href="/signup" className='btn btn-lg btn-outline-light fw-bold text-decoration-none'>Sign <span className="badge bg-light text-dark text-decoration-underline">UP</span></a>
          </div>
          <span className='text-white display-6 m-1'>/</span>
          <div className='m-2'>
            <a href="/signin" className='btn btn-lg btn-outline-light fw-bold text-decoration-none'>Sign <span className="badge bg-light text-dark text-decoration-underline">IN</span></a>
          </div>
        
        </div>

      </div>
    )
  }
}