import React from 'react'

import PictureCircle from '../components/PictureCircle'
import ButtonCircle from '../components/ButtonCircle'
import ButtonSquare from '../components/ButtonSquare'

import { coldBrew } from '../../assets/img'

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onAuth: false,
    }
  }

  details = {
    name: 'cold brew',
    price: 30000,
  }

  componentDidMount() {
    this.props.change(this.state.onAuth)
  }

  image = () => <img src={coldBrew} alt="Cold Brew" className="h-full" />

  render() {
    return (
      <section className="detailProduct pt-20 pb-40 bg-gray-200">
        <div className="container mx-auto px-2 lg:px-10">
          <p className="font-bold mt-5">
            <span className="text-gray-500 pr-2">Favorite & Promo</span>
            <span className="text-yellow-900 capitalize">
              {this.details.name}
            </span>
          </p>

          <div className="font-poppins grid grid-cols-1 sm:grid-cols-9">
            <div className="sm:col-span-4 w-full">
              <div className="py-10 sm:py-24 lg:pr-24">
                <div className="flex flex-col items-center space-y-8 lg:space-y-16">
                  <div className="h-40 lg:h-80 w-40 lg:w-80">
                    <PictureCircle Img={this.image} diametre={'full'} />
                  </div>

                  <div className="space-y-3 lg:space-y-7 text-center">
                    <h2 className="text-4xl lg:text-6xl font-bold capitalize">
                      {this.details.name}
                    </h2>
                    <p className="text-2xl lg:text-4xl">
                      IDR {this.details.price}
                    </p>
                  </div>

                  <div className="space-y-3 lg:space-y-7">
                    <ButtonSquare
                      secondary
                      content={() => (
                        <p className="text-white lg:text-2xl font-bold">
                          Add to Cart
                        </p>
                      )}
                    />

                    <ButtonSquare
                      primary
                      content={() => (
                        <p className="lg:text-2xl font-bold ">Ask a Staff</p>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-5">
              <div className="w-full bg-white p-5 lg:px-24 lg:pt-24 lg:pb-16 rounded-xl space-y-12">
                <p className="text-xl text-yellow-900">
                  Delivery only on{' '}
                  <span className="font-bold">Monday to Friday</span> at{' '}
                  <span className="font-bold">1-7 pm</span>
                </p>

                <p className="text-xl text-yellow-900">
                  Cold brewing is a method of brewing that combines ground
                  coffee and cool water and uses time instead of heat to extract
                  the flavor. It is brewed in small batches and steeped for as
                  long as 48 hours.
                </p>

                <div className="text-xl font-bold space-y-5">
                  <p className="text-center">Choose a size</p>

                  <div className="flex flex-wrap justify-between">
                    {['R', 'L', 'XL'].map((item, id) => (
                      <div className="mb-3" key={id}>
                        <ButtonCircle
                          content={() => <p>{item}</p>}
                          size={16}
                          color="yellow"
                          colorLevel={400}
                          colorFocus="yellow"
                          colorFocusLevel={900}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full lg:px-24 pt-16 space-y-5 lg:space-y-10">
                <p className="text-xl font-bold text-center capitalize">
                  choose delivery methods
                </p>

                <div className="flex flex-wrap max-w-sm mx-auto">
                  {['Dine In', 'Door Delivery', 'Pick Up'].map((item, id) => (
                    <div key={id} className="m-2">
                      <button className="px-5 py-2 bg-white focus:bg-yellow-900 border border-gray-400 focus:border-yellow-900 rounded-xl text-sm lg:text-l font-bold text-gray-600 focus:text-white focus:outline-none">
                        {item}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row max-w-sm w-full mx-auto">
                  <p>Set time :</p>
                  <input
                    className="flex-1 text-xs bg-transparent border-b border-gray-400 ml-2 px-2 focus:outline-none"
                    type="text"
                    name="time"
                    placeholder="Enter the time you'll arrived"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container lg:h-40 mt-20 mx-auto font-poppins">
            <div className="lg:px-24 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-24 h-full">
                <div className="lg:col-span-2 h-full px-10 bg-white rounded-2xl shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-5 sm:space-y-0 h-full py-20">
                    <div className="flex flex-wrap justify-center">
                      <div className="mx-5 mb-5">
                        <PictureCircle diametre={24} Img={this.image} />
                      </div>

                      <div>
                        <h5 className="text-2xl font-bold capitalize">
                          {this.details.name}
                        </h5>
                        <p className="text-xl">(Regular)</p>
                      </div>
                    </div>

                    <div className="flex space-x-5">
                      <button
                        className="flex justify-center items-center h-8 w-8 rounded-full bg-yellow-200 text-2xl font-bold text-yellow-900"
                        onClick={this.subData}
                      >
                        -
                      </button>

                      <span className="text-2xl font-bold">1</span>

                      <button
                        className="flex justify-center items-center h-8 w-8 rounded-full bg-yellow-200 text-2xl font-bold text-yellow-900"
                        onClick={this.sumData}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="py-5 flex justify-center items-center h-full bg-yellow-400 hover:bg-yellow-500 rounded-2xl shadow-lg text-2xl font-bold">
                  CHEKOUT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProductDetail
