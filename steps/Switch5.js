import React, { PropTypes } from 'react'
import styles from '../Switch.css'

const CREDITCARD = 'Creditcard'
const BTC = 'Bitcoin'

const Switch = React.createClass({
  getInitialState () {
    return {
      payMethod: BTC
    }
  },

  select (choice) {
    return (evt) => {
      this.setState({
        payMethod: choice
      })
    }
  },

  renderChoice (choice) {
    // create a set of cssClasses to apply
    let cssClasses = []

    if (this.state.payMethod === choice) {
      cssClasses.push(styles.active) // add .active class
    }

    return (
      <div className='choice'
        onClick={this.select(choice)}
        className={cssClasses}>
        {choice}
      </div>
    )
  },

  render () {
    return (
      <div className='switch'>
        {this.renderChoice(CREDITCARD)}
        {this.renderChoice(BTC)}
        Pay with: {this.state.payMethod}
      </div>
    )
  }
})

module.exports = Switch
