import React from 'react'

import map from '../../../img/general/map.png'

export default function Spots() {
  return (
    <section id="spot" className="bg-gray-100 pb-10">
      <div className="container mx-auto text-center px-2">
        <h3 className="max-w-sm font-bold text-xl md:text-3xl pt-20 mx-auto mb-3 md:mb-5">
          Visit Our Store in the Spot on the Map Below
        </h3>

        <p className="max-w-lg mx-auto mb-20">
          See our store in every city on the spot and spen your good day there.
          See you soon!
        </p>
        <img className="mx-auto" src={map} alt="Spot Area Coffee Shop" />
      </div>
    </section>
  )
}
