import React from 'react'

class Counter extends React.Component {
  state = {
    result: 0,
  }

  increment = () => {
    const { result } = this.state
    this.setState({ result: result + 1 })
  }

  decrement = () => {
    const { result } = this.state
    this.setState({ result: result - 1 })
  }

  render() {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <div>
            <h1 className="text-5xl font-bold mb-5 text-center">Count</h1>
            <div className="flex justify-between items-center">
              <button
                onClick={this.decrement}
                className="h-8 w-8 border border-gray-300"
              >
                -
              </button>
              <h1 className="text-5xl font-bold">{this.state.result}</h1>
              <button
                onClick={this.increment}
                className="h-8 w-8 border border-gray-300"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Counter
