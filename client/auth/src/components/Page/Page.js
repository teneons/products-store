import React, {Component} from 'react'

export default class Page extends Component {


  render() {
    return(
      <div>
        <span>{this.props.id}</span>
      </div>
    )
  }
}