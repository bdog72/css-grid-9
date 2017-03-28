import React, { Proptypes } from 'react'

import styles from './steps/Switch.css'

const CREDITCARD = 'Creditcard'
const BTC = 'Bitcoin'

const App = React.createClass({
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
    let cssClasses = []

    if (this.state.payMethod === choice) {
      cssClasses.push(styles.active)
    }

    return (
      <div className='choice'
        onClick={this.select(choice)}>
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

module.exports = App
