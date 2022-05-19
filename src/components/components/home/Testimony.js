import React from 'react'

import NavButton from '../NavButton'

import { MdStar } from 'react-icons/md'
import asianBeauty from '../../../assets/img/asianBeauty.png'

export default function Testimony() {
  return (
    <section id="testimony" className="testimony bg-gray-100 pb-52">
      <div className="container mx-auto text-center">
        <h3 className="font-bold text-xl md:text-3xl pt-20 px-4 lg:px-10 mx-auto mb-3 md:mb-5">
          Loved by Thousand of Happy Customer
        </h3>

        <p className="mx-auto px-4 lg:px-10 mb-10">
          These are the stories of our customer who have visited us with great
          pleasure.
        </p>

        <div className="h-72 overflow-x-auto no-scrollbar">
          <div className="test-bar flex justify-between px-4 lg:px-10">
            <div className="test-card border-2 border-gray-200 hover:border-yellow-800 p-8 rounded-2xl bg-white">
              <div className="head flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="h-9 w-9"
                    src={asianBeauty}
                    alt="Viezh Robert"
                  />

                  <div className="pl-5">
                    <h4 className="text-l font-bold">Yessica Christy</h4>
                    <h5>Shanxi, China</h5>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <span>4.5</span>
                  <MdStar color="#fbbf24" />
                </div>
              </div>

              <div className="flex items-center h-full">
                <p>
                  “Wow... I am very happy to spend my whole day here. the Wi-fi
                  is good, and the coffee and meals tho. I like it here!! Very
                  recommended!
                </p>
              </div>
            </div>

            <div className="test-card border-2 border-gray-200 hover:border-yellow-800 p-8 rounded-2xl bg-white">
              <div className="head flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="h-9 w-9"
                    src={asianBeauty}
                    alt="Viezh Robert"
                  />

                  <div className="pl-5">
                    <h4 className="text-l font-bold">Yessica Christy</h4>
                    <h5>Shanxi, China</h5>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <span>4.5</span>
                  <MdStar color="#fbbf24" />
                </div>
              </div>

              <div className="flex items-center h-full">
                <p>
                  “Wow... I am very happy to spend my whole day here. the Wi-fi
                  is good, and the coffee and meals tho. I like it here!! Very
                  recommended!
                </p>
              </div>
            </div>

            <div className="test-card border-2 border-gray-200 hover:border-yellow-800 p-8 rounded-2xl bg-white">
              <div className="head flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="h-9 w-9"
                    src={asianBeauty}
                    alt="Viezh Robert"
                  />

                  <div className="pl-5">
                    <h4 className="text-l font-bold">Yessica Christy</h4>
                    <h5>Shanxi, China</h5>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <span>4.5</span>
                  <MdStar color="#fbbf24" />
                </div>
              </div>

              <div className="flex items-center h-full">
                <p>
                  “Wow... I am very happy to spend my whole day here. the Wi-fi
                  is good, and the coffee and meals tho. I like it here!! Very
                  recommended!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center  px-4 lg:px-10">
          <div className="flex hidden">
            <div className="h-4 w-12 rounded-full bg-yellow-800 mr-3"></div>
            {/* {[...Array(3)].map((item, index) => (
              <div className="h-4 w-4 rounded-full bg-gray-300 mr-3"></div>
            ))} */}
          </div>

          <div className="flex">
            <NavButton content="arrowBack" />
            <NavButton content="arrowForward" />
          </div>
        </div>
      </div>
    </section>
  )
}
