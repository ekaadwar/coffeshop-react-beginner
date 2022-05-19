import React from 'react'
import { FaCreditCard } from 'react-icons/fa'
import { AiFillBank } from 'react-icons/ai'
import { GrDeliver } from 'react-icons/gr'
import { chickenFireWing, hazelnutLatte } from '../../assets/img'

class Cart extends React.Component {
  render() {
    return (
      <section className="cart pt-20">
        <div className="container flex justify-center mx-auto h-full">
          <div className="inline-block space-y-10 py-20 ">
            <h2 className="text-3xl font-bold text-white text-shadow w-auto px-2">
              Chekout your
              <br />
              item now!
            </h2>

            <div className="cart-body flex flex-col sm:flex-row sm:space-x-10 md:space-x-20 space-y-10 sm:space-y-0 mx-2">
              <div className="order flex flex-col justify-between h-full max-w-xs px-5 py-16 bg-white rounded-2xl text-sm space-y-5">
                <h3 className="text-xl font-bold text-center text-yellow-900">
                  Order Summary
                </h3>

                <div className="grid grid-cols sm:grid-cols-2 sm:grid-cols-3">
                  <div className="item hidden sm:block h-12 w-12 bg-blue-200 rounded-xl overflow-hidden justify-center items-center">
                    <img
                      className="h-full w-full"
                      src={hazelnutLatte}
                      alt="Hazelnut"
                    />
                  </div>
                  <p className="item">Hazelnut x1 Regular</p>
                  <p className="item justify-self-end">IDR 24.0</p>
                  <div className="item hidden sm:block h-12 w-12 bg-blue-200 rounded-xl overflow-hidden">
                    <img
                      className="h-full w-full"
                      src={chickenFireWing}
                      alt="Chiken Fire Wings"
                    />
                  </div>
                  <p className="item">Chiken Fire Wings</p>
                  <p className="item justify-self-end">IDR 30.0</p>
                </div>

                <div className="grid grid-cols sm:grid-cols-2">
                  <p>SUBTOTAL</p>
                  <p className="justify-self-end">IDR 120.000</p>
                  <p>TAX & FEES</p>
                  <p className="justify-self-end">IDR 20.000</p>
                  <p>SHIPPING</p>
                  <p className="justify-self-end">IDR 10.000</p>
                </div>

                <div className="grid grid-cols sm:grid-cols-2">
                  <h3 className="text-xl font-bold text-yellow-900">TOTAL</h3>
                  <h3 className="text-xl font-bold text-yellow-900 justify-self-end">
                    IDR 150.000
                  </h3>
                </div>
              </div>

              <form className="flex flex-col justify-between h-full max-w-xs space-y-10">
                <div>
                  <div className="flex justify-between items-center text-white font-bold">
                    <h4 className="text-shadow">Address details</h4>
                    <p className="text-shadow text-xs hover:text-yellow-500">
                      edit
                    </p>
                  </div>

                  <div className="px-5 py-5 bg-white rounded-2xl">
                    <p>
                      <span className="font-bold">Delivery</span> to Iskandar
                      Street Km 5 refinery road oppsite re public road, effurun,
                      Jakarta
                    </p>
                    <hr />
                    <p>+62 81348287878</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-shadow flex justify-between items-center text-white font-bold">
                    Payment method
                  </h4>

                  <div className="px-5 py-5 bg-white rounded-2xl space-y-5">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="card"
                        name="payment"
                        value="card"
                      />
                      <label
                        className="flex items-center space-x-3"
                        htmlFor="card"
                      >
                        <div>
                          <div className="flex justify-center items-center h-10 w-10 bg-yellow-600 rounded-md text-white">
                            <FaCreditCard />
                          </div>
                        </div>
                        <p>Card</p>
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="bank"
                        name="payment"
                        value="bank"
                      />
                      <label
                        className="flex items-center space-x-3"
                        htmlFor="bank"
                      >
                        <div>
                          <div className="flex justify-center items-center h-10 w-10 bg-yellow-900 rounded-md text-white">
                            <AiFillBank />
                          </div>
                        </div>
                        <p>Bank Account</p>
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="cash"
                      />
                      <label
                        className="flex items-center space-x-3"
                        htmlFor="cash"
                      >
                        <div>
                          <div className="flex justify-center items-center h-10 w-10 bg-yellow-400 rounded-md text-white">
                            <GrDeliver />
                          </div>
                        </div>
                        <p>Cash and delivery</p>
                      </label>
                    </div>
                  </div>
                </div>

                <input
                  className="w-full bg-yellow-900 text-white hover:bg-yellow-800 py-3 rounded-xl"
                  type="submit"
                  value="Confirm and Pay"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Cart
