import React from 'react'
import { Link } from 'react-router-dom'

import { HiViewList } from 'react-icons/hi'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="h-20 py-4 fixed bg-white w-full shadow-md z-40">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="flex justify-between box-content">
            <Link to="/" className="flex items-center flex-row">
              <img
                src={this.props.image}
                alt="Logo Eka Coffee"
                className="mr-3"
              />
              <h3 className="hidden md:block font-bold text-yellow-900 text-xl">
                Eka Coffee
              </h3>
            </Link>

            <button className="flex lg:hidden justify-center items-center w-10 h-10 bg-yellow-900 hover:bg-yellow-800 rounded-md">
              <HiViewList size={30} color="#fff" />
            </button>

            <div className="hidden lg:flex items-center space-x-16 ">
              <Link to="/">Home</Link>
              <Link to="/product">Product</Link>
              <Link to="/cart">Your Cart</Link>
              <Link to="/history">History</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-16">
              <Link to="/login">Login</Link>
              <Link to="/signup">
                <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          <div id="toggleMenu" className="hidden">
            <div className="flex flex-col my-5 space-y-5 items-end pr-3">
              <Link to="/">Home</Link>
              <Link to="/product">Product</Link>
              <Link to="/cart">Your Cart</Link>
              <Link to="/history">History</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">
                <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
