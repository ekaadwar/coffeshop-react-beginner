import React from 'react'

import IconCircle from '../IconCircle'

import { BsPersonFill } from 'react-icons/bs'
import { MdLocationOn, MdFavoriteBorder, MdCheckCircle } from 'react-icons/md'

import teamWork from '../../../assets/img/teamWork.png'

const personil = () => {
  return <BsPersonFill size={30} color="#78350f" />
}

const location = () => {
  return <MdLocationOn size={30} color="#78350f" />
}

const favorite = () => {
  return <MdFavoriteBorder size={30} color="#78350f" />
}

const advantagesData = [
  'High quality beans',
  'Healthy meals, you can request the ingredients',
  'Chat with our staff to get better experience for ordering',
  'Free member card a minimum purchase of IDR 200.000',
]

const flyingData = [
  {
    icon: personil(),
    value: 90,
    title: 'Staff',
  },
  {
    icon: location(),
    value: 30,
    title: 'Store',
  },
  {
    icon: favorite(),
    value: 800,
    title: 'Customers',
  },
]

export default function Advantages() {
  return (
    <section id="advantages">
      <div className="container mx-auto grid h-full w-full px-2 lg:px-10">
        <div className="flex flex-row space-y-0 justify-around -mt-20 h-40 w-full bg-white rounded-xl mx-auto shadow-xl">
          {flyingData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row justify-center items-center sm:space-x-5"
            >
              <IconCircle icon={item.icon} diametre={12} />

              <div className="text-center sm:text-left mt-3">
                <h1>{item.value}+</h1>
                <p className="text-xs sm:text-base">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center my-20 ">
          <div className="hidden lg:inline-block flex-1 h-full">
            <img
              className="w-full self-center"
              src={teamWork}
              alt="Team Work"
            />
          </div>

          <div className="flex-1 sm:px-10">
            <div className="self-center">
              <h1 className="text-4xl font-bold mb-5 max-w-md">
                We Provide Good Coffee and Healthy Meals
              </h1>

              <p className="mb-5">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>

              <ul>
                {advantagesData.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-row items-start mb-3 space-x-3"
                  >
                    <div>
                      <MdCheckCircle size={20} color="#2FAB73" />
                    </div>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
