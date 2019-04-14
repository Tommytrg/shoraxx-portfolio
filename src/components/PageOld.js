import React, { Component } from 'react'
import Wheel from "./Wheel"
import NavBar from "./NavBar"

class Page extends Component {
  render () {
    return (
      <div className='border' id={this.props.id} ref={this.props.reference}>
        <div className='main'>
          <NavBar links={this.props.links} className="nav"/>
          <div className='content'>
            <div className={`text ${this.props["text-align"]}`}>
              {this.props.children}
            </div>
            <Wheel className="wheel" src={this.props.wheel} alt="logo"/>           
          </div>
          <div className='media' />
        </div>
      </div>
    )
  }
}

export default Page
