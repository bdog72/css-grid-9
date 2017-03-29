import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return <div>
      <h1>Resize the window</h1>
      <div className='grid'>
        <div><h2>1</h2></div>
        <div><h2>2</h2></div>
        <div><h2>3</h2></div>
        <div><h2>4</h2></div>
      </div>
      <div className='grid1'>
        <span>Almost</span> before we knew it, we had left the ground.
        <div className='font'>Font: Hello World</div>
      </div>
    </div>
  }
}
