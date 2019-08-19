import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

export default class App extends Component {
  redirect = () => (
    <Fragment>
      <Router>
        <Routes />
      </Router>
    </Fragment>
  )

  render() {
    return this.redirect()
  }
}
