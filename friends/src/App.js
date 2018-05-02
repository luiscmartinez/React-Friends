import React, { Component } from 'react'
import FriendsList from './FriendsList'
import './App.css'
import { people } from './people'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    // taking people, from people.js
    // calling setState to add people to our friends array.
    // ANY type of data fetching, SHOULD exist inside of CDM
    this.setState({ friends: people })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome hawmies</h1>
        </header>
        <FriendsList friends={this.state.friends} />
      </div>
    )
  }
}

export default App
