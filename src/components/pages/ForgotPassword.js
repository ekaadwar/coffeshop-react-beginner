import React from 'react'
import { BiSearch } from 'react-icons/bi'

import ButtonSquare from '../components/ButtonSquare'

class ForgotPassword extends React.Component {
  state = { onAuth: true }

  componentDidMount() {
    this.props.change(this.state.onAuth)
  }

  render() {
    return (
      <section className="forgot">
        <div className="container mx-auto  px-2 py-32">
          <div className="flex flex-col items-center max-w-5xl mx-auto space-y-10 lg:space-y-28">
            <div className="text-white font-bold space-y-3">
              <h1 className="text-center text-3xl lg:text-6xl">
                Forgot your password?
              </h1>
              <h3 className="text-center text-xl lg:text-2xl">
                Dont worry, we got your back!
              </h3>
            </div>

            <div className="text-xs sm:text-lg lg:text-3xl w-full">
              <form onSubmit={(event) => event.preventDefault()}>
                <div className="grid grid-cols-4 gap-1 sm:gap-5  h-16 lg:h-24">
                  <div className="col-span-3 ">
                    <input
                      className="focus:outline-none px-1 sm:px-5 w-full h-full rounded-xl"
                      type="email"
                      placeholder="Enter your email adress to get link"
                    />
                  </div>

                  <div className="">
                    <ButtonSquare
                      primary
                      py={0}
                      h="full"
                      content={() => (
                        <div>
                          <p className="hidden sm:block font-bold text-yellow-900">
                            Send
                          </p>
                          <div className="flex justify-center sm:hidden">
                            <BiSearch color="#713f12" size={25} />
                          </div>
                        </div>
                      )}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="flex flex-col items-center text-white text-xl lg:text-3xl font-bold space-y-3">
              <h3 className="text-center">
                Click here if you didnt receive any link in 2 minutes
              </h3>

              <div className="w-full max-w-xs lg:max-w-md h-16 lg:h-24">
                <ButtonSquare
                  secondary
                  py={0}
                  h="full"
                  content={() => <p className="font-bold">Resend Link</p>}
                />
              </div>

              <h3 className="text-center">01:54</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ForgotPassword
