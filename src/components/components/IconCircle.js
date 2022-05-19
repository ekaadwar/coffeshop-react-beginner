import React from 'react'
import { FaReact } from 'react-icons/fa'

function IconDefault() {
  return <FaReact color="#6A4029" />
}

function IconCircle({ icon = IconDefault(), diametre = 8 }) {
  return (
    <div
      className={
        'flex justify-center items-center h-' +
        diametre +
        ' w-' +
        diametre +
        ' bg-yellow-500 rounded-full'
      }
    >
      {icon}
    </div>
  )
}

export default IconCircle
