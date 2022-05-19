import React from 'react'
// import qs from "querystring";

class Jumbotron extends React.Component {
  state = {
    data: [],
    searchInput: 'Search',
    searchEnd: '',
  }

  componentDidMount() {}

  render() {
    return (
      <section className="jumbotron box-border pb-20">
        <div className="container px-2 lg:px-10 mx-auto h-full">
          <div className="flex flex-col">
            <form className="pt-5 lg:text-right">
              <input
                className="pl-5 py-2 rounded-full w-full lg:w-1/4"
                type="text"
                name="search"
                placeholder={this.state.searchInput}
              />
            </form>

            <div className="flex flex-col justify-center h-3/4 lg:w-1/2 text-white my-12">
              <h1 className="title-jumbo text-3xl leading-10 max-w-xl">
                Start Your Day with Coffee and Good Meals
              </h1>

              <p className="text-lg lg:text-xl mt-10 max-w-xl">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>

              <button className="max-w-xs bg-yellow-500 hover:bg-yellow-300 text-xl mt-10 px-10 py-2 text-yellow-900 font-bold rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Jumbotron
