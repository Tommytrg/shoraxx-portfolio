import React, { Component } from 'react'

class Page extends Component {
  render() {

    const legend = this.props.legend
    ? (
      <legend className="legend">
        {this.props.legend}
      </legend>
    )
    : undefined

    return (
      <div className="section">
        <nav className="nav">
          <ul>
            <li onClick={() => this.props.fullpageApi.moveTo(2)}>About me</li>
            <li onClick={() => this.props.fullpageApi.moveTo(3)}>Projects</li>
          </ul>
        </nav>

        <fieldset className="card">
          {legend}
          {this.props.children}
        </fieldset>
      </div>
    )
  }
}

export { Page }