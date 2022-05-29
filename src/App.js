import React, { Component } from 'react'
import { NavBar } from './Components/NavBar'
import News from './Components/News'

export class App extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <News/>
      </>
    )
  }
}

export default App