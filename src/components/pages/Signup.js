import React from 'react'

import { Link } from 'react-router-dom'

import { coffeeLogo } from '../../assets/img'

class Signup extends React.Component {
  state = { onAuth: true }

  componentDidMount() {
    this.props.change(this.state.onAuth)
  }

  submitData = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <section className="auth">
        <div className="bg-white md:bg-transparent min-h-screen">
          <div className="container h-full mx-auto">
            <div className="flex justify-end">
              <div className="w-full md:w-1/2 bg-white">
                <div className="py-16 px-2 sm:px-10 lg:px-16 space-y-7">
                  <div className="flex justify-between mb-20">
                    <Link to="/" className="flex items-center flex-row">
                      <img
                        src={coffeeLogo}
                        alt="Logo Eka Coffee"
                        className="mr-3"
                      />
                      <h3 className="hidden lg:block font-bold text-yellow-900 text-xl">
                        Eka Coffee
                      </h3>
                    </Link>

                    <Link to="/login">
                      <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                        Login
                      </button>
                    </Link>
                  </div>

                  <h3 className="text-yellow-800 text-2xl font-bold text-center">
                    Sign Up
                  </h3>

                  <form
                    className="space-y-7 max-w-md mx-auto"
                    onSubmit={this.submitData}
                  >
                    <div>
                      <h4 className="bold">Email Address :</h4>
                      <input
                        className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <h4 className="bold">Password:</h4>
                      <input
                        className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>

                    <div>
                      <h4 className="bold">Phone Number:</h4>
                      <input
                        className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                        type="number"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <button
                        className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-xl font-bold w-full"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>

                    <div>
                      <button className="bg-white hover:bg-gray-300 border-2 border-gray-300 px-5 py-2 rounded-xl font-bold w-full">
                        Sign Up with google
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Signup
