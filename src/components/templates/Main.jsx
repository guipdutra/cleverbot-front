import React, { Component } from 'react'
import style from './Main.css'

export default class Main extends Component {
  render() {
    return (
      <div className={ style.container }>
        {this.props.children}
      </div>
    )
  }
}
