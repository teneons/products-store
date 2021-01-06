import React, { Component} from 'react';
import {connect} from 'react-redux';
import {search_product} from '../../reducers/actions';

class SearchProduct extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      search: null
    }
  }

  searchProduct () {
    this.props.searchProd({search: this.state.search}) //pass obj to actions

    this.setState({search: null}) //cleaning state (yes, not here destructuring)
  }

  render() {
    const svgSearch = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
      <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
    </svg>

    return(
      <div className='input-group'>
        <input type="search" className="form-control" onChange={e => this.setState({search: e.target.value})} name='search' placeholder="Search product" aria-label="Search" />
        <button type="button" onClick={() => this.searchProduct()} className="btn btn-outline-light">{svgSearch}</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchProd: (data) => dispatch(search_product(data))
  }
}

export default connect(null, mapDispatchToProps)(SearchProduct);