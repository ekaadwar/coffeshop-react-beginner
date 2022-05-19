import React from 'react'
import axios from 'axios'
import qs from 'querystring'

import { Link } from 'react-router-dom'
import { RiDeleteBin6Line as Delete } from 'react-icons/ri'

import ButtonCircle from '../components/ButtonCircle'
import ItemImage from '../components/PictureCircle'

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      searchInput: '',
      searchEnd: '',
      id_category: 1,
      onAuth: false,
    }
  }

  listMenu = [
    {
      idCategory: 1,
      category: 'Favorite Product',
    },
    {
      idCategory: 2,
      category: 'Coffee',
    },
    {
      idCategory: 3,
      category: 'Non-Coffee',
    },
    {
      idCategory: 4,
      category: 'Food',
    },
    {
      idCategory: 5,
      category: 'Add-On',
    },
  ]

  onSearch = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target)
      let url = '/product'
      if (this.state.searchInput !== '') {
        url += `?search=${this.state.searchInput}`
      }
      this.props.history.push(url)
    }
  }

  parseQuery = (str) => {
    return qs.parse(str.slice('1'))
  }

  componentDidMount() {
    this.props.change(this.state.onAuth)
    const queryString = this.props.location.search

    if (queryString) {
      const { search } = this.parseQuery(this.props.location.search)

      if (search) {
        this.setState({ searchInput: search })
      }
    }

    this.getData()
  }

  getData = async (dataUrl = this.state) => {
    const { data } = await axios.get(
      `http://localhost:8080/items?search=${dataUrl.searchEnd}`
    )

    this.setState({ items: data.results })
  }

  doSearch = () => {
    const queryString = this.props.location.search

    if (queryString) {
      const { search } = this.parseQuery(queryString)

      if (this.state.searchEnd !== search) {
        this.setState({ searchEnd: search }, () => {
          this.getData()
        })
      }
    }
  }

  deleteItem = async (id) => {
    const result = window.confirm('Want to delete?')

    if (result) {
      await axios.delete(`http://localhost:8080/items/${id}`)
    }

    this.getData()
  }

  getCategory = (event) => {
    this.setState({ id_category: event.target.value })

    let url = '/product?'

    if (this.state.id_category > 1) {
      url += `category=${this.state.id_category}`
    }

    this.props.history.push(url)
  }

  componentDidUpdate() {
    this.doSearch()
  }

  render() {
    return (
      <section className="product pt-20">
        <div className="border-t border-gray-300">
          <div className="container mx-auto">
            <div className="content grid grid-cols-3 min-h-screen">
              <div className="hidden lg:flex lg:flex-col lg:justify-between py-10 border-r border-gray-300">
                <div className="space-y-5">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-yellow-900">
                      Promo for you
                    </h3>
                  </div>

                  <div className="text-center">
                    <p>Coupons will be updated every weeks.</p>
                    <p>check them out!</p>
                  </div>

                  <div className="flex items-center pl-10">
                    <div className="card flex flex-col bg-yellow-300 w-72 rounded-3xl">
                      <div className="main flex flex-col justify-evenly items-center border-dashed border-b border-black text-center">
                        <ItemImage category={4} diametre={32} />

                        <div>
                          <h3 className="text-2xl font-bold">Beef Spaghetti</h3>
                          <h3 className="text-2xl font-bold">20% OFF</h3>
                        </div>

                        <p>
                          Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                        </p>
                      </div>
                      <div className="side flex flex-col justify-evenly text-center">
                        <p>COUPON CODE</p>

                        <h3 className="text-3xl font-bold">FSDT56AS</h3>

                        <p>Valid until October 10th 2020</p>
                      </div>
                    </div>

                    <div className="card-acc-1 w-7 rounded-r-full bg-black"></div>

                    <div className="h-80 w-7 rounded-r-full bg-yellow-900"></div>
                  </div>

                  <button className="w-72 py-4 ml-10 bg-yellow-900 rounded-2xl text-white font-bold">
                    Apply Coupon
                  </button>
                </div>

                <div className="px-10">
                  <h5 className="font-bold">Term and Condition</h5>
                  <ol className="list-decimal">
                    <li>You can apply 1 coupon per day</li>
                    <li>It only for dine in</li>
                    <li>Buy 1 get 1 only for new user</li>
                    <li>Should make member card to apply coupon</li>
                  </ol>
                </div>
              </div>

              <div className="h-full col-span-3 lg:col-span-2">
                <div className="flex flex-col w-full h-full p-10">
                  <div className="h-10">
                    <ul className="flex justify-evenly">
                      {this.listMenu.map((menu, idx) => (
                        <li
                          value={menu.idCategory}
                          className="inline-block cursor-pointer"
                          key={idx}
                          // onClick={(event) => console.log(event.target.value)}
                          onClick={this.getCategory}
                        >
                          {menu.category}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-row">
                    <input
                      value={this.state.searchInput}
                      className="focus:outline-none border border-gray-500 rounded-l-lg w-full h-8 mb-5 px-2 h-10"
                      type="text"
                      onChange={(event) =>
                        this.setState({ searchInput: event.target.value })
                      }
                      onKeyDown={this.onSearch}
                    />
                    <button className="focus:outline-none h-10 w-10 border border-l-0 rounded-r-lg border-gray-500 hover:bg-gray-300">
                      +
                    </button>
                  </div>

                  <div className="item grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-20 gap-x-4 justify-items-center pt-16">
                    {this.state.items.map((items, idx) => {
                      return (
                        <div
                          key={idx}
                          className="h-44 w-36 bg-white border rounded-2xl text-center shadow-2xl relative"
                        >
                          <div className="absolute -top-12 my-auto w-full">
                            <ItemImage category={items.category_id} />
                          </div>

                          <Link key={idx} to="/product/detail">
                            <div className="flex flex-col justify-between px-4 h-full pt-12 pb-4">
                              <h4 className="flex-1 flex flex-col justify-center text-lg font-bold capitalize">
                                {items.name}
                              </h4>

                              <h6 className="text-sm font-bold text-yellow-900">
                                IDR. {items.price}
                              </h6>
                            </div>
                          </Link>

                          <div
                            onClick={() => this.deleteItem(items.id)}
                            className="absolute -bottom-3 -right-3"
                            value="oke"
                          >
                            <ButtonCircle
                              secondary
                              size={7}
                              content={() => (
                                <div className="flex justify-center items-center">
                                  <Delete size={15} color="white" />
                                </div>
                              )}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Product
