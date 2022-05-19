import React from 'react'

import { vergieTomatto } from '../../assets/img'

class History extends React.Component {
  state = { onAuth: false }

  componentDidMount() {
    this.props.change(this.state.onAuth)
  }
  render() {
    return (
      <section className="history pt-20 pb-40 bg-gray-200">
        <div className="container mx-auto px-5">
          <h2 className="pt-40 pb-3 text-5xl font-bold text-white text-shadow text-center">
            Let’s see what you have bought!
          </h2>
          <p className="text-xl text-white text-shadow text-center">
            Select item to delete
          </p>
          <p className="text-xl text-white text-shadow text-right">Delete</p>

          <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 justify-items-center">
            {[...Array(12)].map((item, id) => (
              <div
                key={id}
                className="flex justify-between p-5 bg-white rounded-2xl space-x-2 max-w-sm w-full"
              >
                <div>
                  <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-300">
                    <img
                      className="w-full"
                      src={vergieTomatto}
                      alt="Vergie Tommatto Mix"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-2xl font-bold">Vergie tomato mix</h4>
                  <div className="flex justify-between items-end text-yellow-900">
                    <div>
                      <p>IDR 34.0000</p>
                      <p>delivered</p>
                    </div>
                    <input type="checkbox" name="vergie" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default History
