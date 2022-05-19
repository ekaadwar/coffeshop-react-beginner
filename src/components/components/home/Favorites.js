import React from 'react'

import { MdCheck } from 'react-icons/md'

import { hazelnutLatte, pinkyPromise, chikenWing } from '../../../assets/img'

import PictureCircle from '../PictureCircle'

const hazelnut = () => {
  return <img className="h-full" src={hazelnutLatte} alt="Hazelnut Latte" />
}

const pinky = () => {
  return <img className="h-full" src={pinkyPromise} alt="Pinky Promise" />
}

const chicken = () => {
  return <img className="h-full" src={chikenWing} alt="Chicken Wing" />
}

const favoriteData = [
  {
    name: 'Hazelnut Latte',
    price: 25000,
    img: hazelnut,
    imgSize: 36,
    category: 3,
    data: [
      'Hazelnut Syrup',
      'Vanilla Whiped Cream',
      'Ice/ Hot',
      'Slice Banana on Top',
    ],
  },
  {
    name: 'Pinky Promise',
    price: 30000,
    img: pinky,
    imgSize: 36,
    category: 3,
    data: [
      '1 Shot of Coffee',
      'Vanilla Whiped Cream',
      'Chocolate Biscuit',
      'Strawberry Syrup',
      'Slice Strawberry on Top',
    ],
  },
  {
    name: 'Chicken Wing',
    price: 40000,
    img: chicken,
    imgSize: 36,
    category: 4,
    data: [
      'Wings',
      'Drum Sticks',
      'Mayonnaise and Lemon',
      'Hot Fried',
      'Secret Recipe',
      'Buy 1 get 1 only on Dine in',
    ],
  },
]

export default function Favorites() {
  return (
    <section id="fevorite" className="favorite bg-gray-100 pb-10">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="font-bold text-3xl pt-20 mb-1.5">
            Here is People's Favorite
          </h3>

          <p className="mb-20">
            Let's choose and have a bit taste of people's favorite. It might be
            your tool
          </p>
        </div>

        <div className="overflow-auto no-scrollbar">
          <div className="item-wrapper mx-auto px-2">
            <div className="flex flex-row items-center">
              {favoriteData.map((item, id) => (
                <div key={id} className="flex-1 w-full flex justify-center">
                  <div className="flex flex-col w-full max-w-xs favo-sect border border-gray-300 rounded-xl hover:border-yellow-500 bg-white">
                    <div className="flex flex-1 items-center">
                      <PictureCircle
                        Img={item.img}
                        diametre={item.imgSize}
                        category={item.category}
                      />
                    </div>

                    <div className="list flex flex-row flex-1 justify-center">
                      <div className="leading-10">
                        <h1 className="text-xl font-bold text-center mb-2">
                          {item.name}
                        </h1>

                        <ul>
                          {item.data.map((data, index) => (
                            <li
                              key={index}
                              className="flex flex-row items-center"
                            >
                              <MdCheck size={20} color="#2FAB73" />
                              <p className="ml-5">{data}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="cost">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-3">
                          IDR. {item.price}
                        </h3>
                        <button className="text-l font-bold border-2 border-yellow-500 px-10 py-2 rounded-full focus:outline-none hover:border-transparent hover:bg-yellow-300">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
