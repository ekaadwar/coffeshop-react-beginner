import React from 'react'

import logoSportify from '../../../assets/img/logoSportify.png'
import logoAmazon from '../../../assets/img/logoAmazon.png'
import logoDiscord from '../../../assets/img/logoDiscord.png'
import logoNetflix from '../../../assets/img/logoNetflix.png'
import logoReddit from '../../../assets/img/logoReddit.png'

const logo = [
  {
    name: 'Sportify',
    image: logoSportify,
  },
  {
    name: 'Amazon',
    image: logoAmazon,
  },
  {
    name: 'Discord',
    image: logoDiscord,
  },
  {
    name: 'Netflix',
    image: logoNetflix,
  },
  {
    name: 'Reddit',
    image: logoReddit,
  },
]

export default function Partners() {
  return (
    <section id="partner" className="bg-gray-100 pb-10 px-4 lg:px-10">
      <div className="container mx-auto text-center">
        <h3 className="font-bold text-xl md:text-3xl pt-20 mx-auto mb-5 sm:mb-16 mb-3 md:mb-5">
          Our Partner
        </h3>

        <div className="flex justify-around space-x-3 sm:space-x-16 flex-wrap">
          {logo.map((value, idx) => {
            return (
              <div key={idx} className="flex-1">
                <img src={value.image} alt={value.name} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
