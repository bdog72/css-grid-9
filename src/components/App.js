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
        <div>1</div>
        <div>2</div>
        <div><p className='ab'>Position</p></div>
        <div>4</div>
      </div>
      <div className='grid2'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  }
}
