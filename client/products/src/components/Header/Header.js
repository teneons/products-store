import React, { Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AddProduct from './AddProduct';
import SearchProduct from './SearchProduct';


export default class Header extends Component {

  render() {

    return (
      <div>
        <nav className="d-flex justify-content-center navbar navbar-expand-lg bg-dark">

          <span className="navbar-brand text-uppercase text-white fw-bold" href="#">
            <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="Logo" loading="lazy"></img>
            Products
          </span>

          <div className='d-flex justify-content-around align-items-center flex-column flex-md-row col-sm-12 col-md-9 col-lg-7'>

              <div className='row mb-1'>
                <SearchProduct />
              </div>

              <div className='row mb-1'>
                <AddProduct />
              </div>

              <div className='row mb-1'>
                <div className="dropdown">
                  <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Name Name
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark text-center" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Account</a></li>
                    <li><a className="dropdown-item disabled" href="#">Sign out</a></li>
                  </ul>
                </div>
              </div>

          </div>

        </nav>
      </div>
    )
  }
}