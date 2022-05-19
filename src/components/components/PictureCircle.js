import React from 'react'

import coffee from '../../assets/flatIcons/coffee.png'
import nonCoffe from '../../assets/flatIcons/non-coffee.png'
import food from '../../assets/flatIcons/food.png'
import addOn from '../../assets/flatIcons/add-on.png'

const PictureDefault = ({ category = 1 }) => {
  let icon

  switch (category) {
    case 2:
      icon = coffee
      break
    case 3:
      icon = nonCoffe
      break
    case 4:
      icon = food
      break
    default:
      icon = addOn
  }

  return <img className="h-full" src={icon} alt="coffee" />
}

const PictureCircle = ({
  Img = PictureDefault,
  category = 5,
  diametre = 24,
}) => {
  const diametreStr = diametre.toString()
  const height = 'h-' + diametreStr
  const width = 'w-' + diametreStr

  return (
    <div
      className={
        'flex justify-center items-center bg-yellow-200 rounded-full mx-auto overflow-hidden ' +
        height +
        ' ' +
        width
      }
    >
      <Img category={category} />
    </div>
  )
}

export default PictureCircle
