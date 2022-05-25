import React from 'react'
import axios from 'axios'

// import { Link } from 'react-router-dom'

class ProductAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  submitData = async (event) => {
    event.preventDefault()
    const url = 'http://localhost:8080/items'
    const form = new URLSearchParams()
    form.append('name', this.state.data.name)
    form.append('price', this.state.data.price)
    form.append('categoryId', this.state.data.categoryId)

    try {
      const { data } = await axios.post(url, form)
      window.alert(data.message)
      this.setState({ data: {} })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <section className="auth">
        <div className="bg-white md:bg-transparent min-h-screen">
          <div className="container h-full mx-auto">
            <div className="flex justify-end">
              <div className="w-full md:w-1/2 bg-white py-10">
                <div className="py-16 px-2 sm:px-10 lg:px-16 space-y-7">
                  <h3 className="text-yellow-800 text-2xl font-bold text-center">
                    Add Product
                  </h3>

                  <form
                    className="space-y-7 max-w-md mx-auto"
                    onSubmit={this.submitData}
                  >
                    <div>
                      <h4 className="bold">Product Name :</h4>
                      <input
                        className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                        type="text"
                        name="name"
                        placeholder="Product name"
                        onChange={(e) =>
                          this.setState((prevState) => ({
                            data: {
                              ...prevState.data,
                              name: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>

                    <div>
                      <h4 className="bold">Price:</h4>
                      <input
                        className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                        type="text"
                        name="price"
                        placeholder="Price (Rp)"
                        onChange={(e) =>
                          this.setState((prevState) => ({
                            data: {
                              ...prevState.data,
                              price: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>

                    <div className="flex flex-row items-center space-x-5">
                      <h4 className="bold">Category:</h4>
                      <select
                        className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl "
                        id="category_id"
                        onChange={(e) =>
                          this.setState((prevState) => ({
                            data: {
                              ...prevState.data,
                              categoryId: e.target.value,
                            },
                          }))
                        }
                      >
                        <option value=""></option>
                        <option value="2">Coffee</option>
                        <option value="3">Non Coffee</option>
                        <option value="4">Food</option>
                        <option value="5">Add Ons</option>
                      </select>
                    </div>

                    <button
                      className="block bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-xl font-bold w-full"
                      type="submit"
                    >
                      Create Product
                    </button>

                    <button
                      className="block bg-gray-300 hover:bg-gray-600 px-5 py-2 rounded-xl font-bold w-full"
                      type="reset"
                    >
                      Cancel
                    </button>
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

export default ProductAdd
