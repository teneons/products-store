import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { remove_product } from '../../reducers/actions';


class MainContainer extends Component {

  removeItem(id) {
    this.props.removeProd(id)
  }

  render() {
    const svgTrash = <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-trash2-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.037 3.225l1.684 10.104A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z" />
      <path fillRule="evenodd" d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z" />
    </svg>

    const svgPin = <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-brightness-low" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path d="M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
    </svg>

    //check && out data
    let outContent;

    //checks at empty
    if(this.props.productState.length === 0) {
      outContent = <h1 className='text-center fw-bold f-gray'>No products yet. Please, adds them.</h1>
    } else {
      outContent = this.props.productState.map((item) =>
        <div className="card col-5 col-sm-3 m-1 shadow" style={{ width: '18rem' }} key={item.id}>
          <img src={item.img} className="card-img-top rounded" alt="Product"></img>
          <div className="card-body">

            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text font-weight-bold float-left" style={{ fontSize: '1.4rem' }}>{item.price} UAH</p>

            <div className='btn-group d-flex justify-content-center' role='group'>
              <button className="btn btn-outline-danger float-right" onClick={() => this.removeItem(item.id)}>{svgTrash}</button>
              <button className="btn btn-outline-warning float-right">{svgPin}</button>
            </div>

          </div>
        </div>
      )
    }

    return (
      <div className='container-flued d-flex justify-content-center pt-4 bg-light' style={{height: 'calc(100vh - 3.813em)'}} >
        <div className='d-flex justify-content-around row row-col-3 col-11 col-md-10 col-lg-9' style={{position: 'absolute'}}>
          {outContent}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    productState: state
  }
}

const mapDispatchToProps = dispatch => {
  return{
    removeProd: (data) => dispatch(remove_product(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)