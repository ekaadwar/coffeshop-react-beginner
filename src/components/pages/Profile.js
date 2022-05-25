import React from 'react'
import axios from 'axios'

import { gajeel } from '../../assets/img'

import { FiEdit2 } from 'react-icons/fi'

class Profile extends React.Component {
  state = {
    data: {},
    dataChange: {},
    onAuth: false,
    email: '',
    nameDisplay: '',
  }

  componentDidMount() {
    this.props.change(this.state.onAuth)
    this.getData().then(() => {
      this.setState({
        dataChange: this.state.data,
        email: this.state.data.email,
        nameDisplay: this.state.data.display_name,
      })
    })
  }

  getData = async () => {
    const url = 'http://localhost:8080/users/1'
    const { data } = await axios.get(url)
    this.setState({ data: data.results })
  }

  save = () => {
    const prevKeys = Object.keys(this.state.data)
    const prevValues = Object.values(this.state.data)
    const realKeys = Object.keys(this.state.dataChange)
    const realValues = Object.values(this.state.dataChange)
    const length = prevKeys.length

    let keys = ''

    for (let i = 0; i < length; i++) {
      if (prevValues[i] !== realValues[i]) {
        if (keys !== '') {
          keys += ', '
        }
        keys += `${prevKeys[i]}`
        this.updateData(realKeys[i], realValues[i])
      }
    }

    if (keys !== '') {
      window.alert(`${keys} have been updated`)
    }
  }

  updateData = async (key, value) => {
    const url = 'http://localhost:8080/users/1'
    const form = new URLSearchParams()
    form.append(key, value)
    try {
      const { data } = await axios.patch(url, form)
      this.setState({ data: data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <section className="profile pt-20 bg-gray-200">
        <div className="container mx-auto pb-20 px-5 box-border">
          <h3 className="text-4xl font-bold text-white py-10 text-shadow">
            User Profile
          </h3>

          <div className="data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            <div className="flex flex-col justify-between items-center py-10 w-full bg-white border-b-8 border-yellow-900 rounded-2xl max-w-xs md:max-w-none mx-auto px-2">
              <div className="z-10 relative">
                <div className="overflow-hidden h-28 w-28 bg-blue-200 rounded-full">
                  <img src={gajeel} alt="My Profile" />
                </div>

                <button className="z-10 absolute flex justify-center items-center -mt-10 ml-20 h-10 w-10 bg-yellow-900 hover:bg-yellow-700 rounded-full">
                  <FiEdit2 size={20} color="#fff" />
                </button>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-center">
                  {this.state.nameDisplay}
                </h4>
                <p className="text-sm text-center">{this.state.email}</p>
              </div>

              <p className="text-center">Let's order your product now!</p>
            </div>

            <div className="lg:col-span-2">
              <div className="card w-full bg-white border-b-8 border-yellow-900 rounded-2xl">
                <div className="flex flex-col h-full px-5 pt-5 pb-10">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-10">
                    <h3 className="text-3xl font-bold text-gray-600">
                      Contacts
                    </h3>

                    <button className="flex justify-center items-center h-12 w-12 bg-yellow-900 hover:bg-yellow-700 rounded-full self-end">
                      <FiEdit2 size={20} color="#fff" />
                    </button>
                  </div>

                  <div className="flex-1 space-y-5">
                    <div className="grid lg:grid-cols-2 gap-5 lg:mb-10">
                      <div className="">
                        <p className="text-xl text-gray-400">Email address :</p>
                        <input
                          onChange={(e) =>
                            this.setState((prevState) => ({
                              dataChange: {
                                ...prevState.dataChange,
                                email: e.target.value,
                              },
                            }))
                          }
                          className="py-2 w-full border-b border-black  placeholder-gray-700"
                          type="email"
                          name="email"
                          value={
                            this.state.dataChange.email
                              ? this.state.dataChange.email
                              : ''
                          }
                        />
                      </div>

                      <div className="">
                        <p className="text-xl text-gray-400">Mobile Number :</p>
                        <input
                          className="py-2 w-full border-b border-black placeholder-gray-700"
                          type="text"
                          name="phone"
                          value={
                            this.state.dataChange.mobile_number
                              ? this.state.dataChange.mobile_number
                              : ''
                          }
                          onChange={(e) =>
                            this.setState((prevState) => ({
                              dataChange: {
                                ...prevState.dataChange,
                                mobile_number: e.target.value,
                              },
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-xl text-gray-400">Delivery Address:</p>
                      <textarea
                        className="py-2 w-full border-b border-black placeholder-gray-700"
                        type="text"
                        name="address"
                        rows="3"
                        value={
                          this.state.dataChange.address
                            ? this.state.dataChange.address
                            : ''
                        }
                        onChange={(e) =>
                          this.setState((prevState) => ({
                            dataChange: {
                              ...prevState.dataChange,
                              address: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="card w-full bg-white border-b-8 border-yellow-900 rounded-2xl">
                <div className="flex flex-col justify-between h-full px-5 pt-5 pb-10">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-10">
                    <h3 className="text-3xl font-bold text-gray-600">
                      Details
                    </h3>

                    <button className="flex justify-center items-center h-12 w-12 bg-yellow-900 hover:bg-yellow-700 rounded-full self-end sm:self-center">
                      <FiEdit2 size={20} color="#fff" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                    <div className="col-span-3 sm:col-span-2 space-y-5">
                      <div>
                        <p className="text-xl text-gray-400">Display Name</p>
                        <input
                          className="py-2 w-full border-b border-black  placeholder-gray-700"
                          type="text"
                          name="name"
                          value={
                            this.state.dataChange.display_name
                              ? this.state.dataChange.display_name
                              : ''
                          }
                          onChange={(e) =>
                            this.setState((prevState) => ({
                              dataChange: {
                                ...prevState.dataChange,
                                display_name: e.target.value,
                              },
                            }))
                          }
                        />
                      </div>

                      <div className="">
                        <p className="text-xl text-gray-400">First Name:</p>
                        <input
                          className="py-2 w-full border-b border-black placeholder-gray-700"
                          type="text"
                          name="firstName"
                          value={
                            this.state.dataChange.first_name
                              ? this.state.dataChange.first_name
                              : ''
                          }
                          onChange={(e) =>
                            this.setState((prevState) => ({
                              dataChange: {
                                ...prevState.dataChange,
                                first_name: e.target.value,
                              },
                            }))
                          }
                        />
                      </div>

                      <div className="">
                        <p className="text-xl text-gray-400">Last Name:</p>
                        <input
                          className="py-2 w-full border-b border-black placeholder-gray-700"
                          type="lastName"
                          name="lastName"
                          value={
                            this.state.dataChange.last_name
                              ? this.state.dataChange.last_name
                              : ''
                          }
                          onChange={(e) =>
                            this.setState((prevState) => ({
                              dataChange: {
                                ...prevState.dataChange,
                                last_name: e.target.value,
                              },
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-1 grid grid-cols-2 gap-x-5">
                      <div className="sm:col-span-2">
                        <p className="text-xl text-gray-400">DD/MM/YY</p>
                        <input
                          className="py-2 w-full border-b border-black placeholder-gray-700"
                          type="text"
                          name="birth_date"
                          value={
                            this.state.dataChange.birth
                              ? this.state.dataChange.birth
                              : ''
                          }
                          onChange={(e) =>
                            this.setState((prevState) => ({
                              dataChange: {
                                ...prevState.dataChange,
                                birth: e.target.value,
                              },
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between w-full ">
              <h3 className="text-shadow text-xl text-center font-bold text-white mb-5">
                Do you want to save the
                <br />
                change?
              </h3>

              <div className="space-y-5 mb-5">
                <button
                  onClick={this.save}
                  className="bg-yellow-900 py-3 w-full text-white rounded-2xl hover:bg-yellow-800"
                >
                  Save Change
                </button>

                <button className="bg-yellow-400 py-3 w-full text-yellow-900 font-bold rounded-2xl hover:bg-yellow-500">
                  Cancel
                </button>
              </div>

              <div className="space-y-5 mb-5">
                <button className="flex justify-between bg-white px-5 py-3 w-full text-yellow-900 font-bold rounded-2xl hover:bg-gray-300">
                  <p>Edit Password</p>
                  <span>{'>'}</span>
                </button>

                <button
                  onClick={this.logOut}
                  className="flex justify-between bg-white px-5 py-3 w-full text-yellow-900 font-bold rounded-2xl hover:bg-gray-300"
                >
                  <p>Log Out</p>
                  <span>{'>'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Profile
