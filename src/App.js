import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/sections/Navbar'
import Routes from './components/sections/Routes'
import Footer from './components/sections/Footer'

import Logo from './img/logo/coffee.png'

class App extends React.Component {
  state = { isAuth: false }

  changeAuth = (data) => {
    this.setState({ isAuth: data })
  }

  render() {
    return (
      <Router>
        {this.state.isAuth === false && <Navbar image={Logo} />}
        <Routes change={this.changeAuth} />
        <Footer image={Logo} />
      </Router>
    )
  }
}

export default App
