import React from 'react'

import Jumbotron from '../components/home/Jumbotron'
import Advantages from '../components/home/Advantages'
import Favorites from '../components/home/Favorites'
import Spots from '../components/home/Spots'
import Partners from '../components/home/Partners'
import Testimony from '../components/home/Testimony'

class Home extends React.Component {
  state = {
    onAuth: false,
  }

  componentDidMount() {
    this.props.change(this.state.onAuth)
  }

  render() {
    return (
      <>
        <Jumbotron />
        <Advantages />
        <Favorites />
        <Spots />
        <Partners />
        <Testimony />
      </>
    )
  }
}

export default Home
