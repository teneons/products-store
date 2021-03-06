import React, { Component } from 'react';

export default class WelcomePage extends Component {

  render() {
    
    const svgOr = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-slash" style={{color: 'white'}} viewBox="0 0 16 16">
      <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>

    return (
      <div className='container-fluid bg-secondary d-flex justify-content-center align-items-center flex-column' style={{ height: '100vh', backgroundImage: "radial-gradient(circle, #101010, #404040, #777777, #b2b2b2, #f1f1f1)"}}>
        
        <div className="d-flex justify-content-center align-content-center display-4 mb-4">
          <a href="/" className='text-decoration-none text-white fw-bold'>Products <span className="text-uppercase fw-bold badge bg-white text-dark">Store</span></a>
        </div>

        <div className='col-11 col-md-7 col-lg-4 d-flex justify-content-center align-content-center rounded-3 bg-dark shadow-lg' >
          
          <div className='m-2'>
            <a href="/signup" className='btn btn-lg btn-outline-light text-white fw-bold text-decoration-none'>Sign <span className="badge bg-white text-dark text-decoration-underline">UP</span></a>
          </div>
          <div className='d-flex align-items-center'>{svgOr}</div>
          <div className='m-2'>
            <a href="/signin" className='btn btn-lg btn-outline-light fw-bold text-decoration-none'>Sign <span className="badge bg-white text-dark text-decoration-underline">IN</span></a>
          </div>
        
        </div>

      </div>
    )
  }
}