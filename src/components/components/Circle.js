import React from 'react'

function Circle({
  size = 20,
  text = 'Text',
  bgColor = 'gray',
  bgColorLevel = '200',
}) {
  return (
    <div
      className={`flex justify-center items-center h-${size} w-${size} bg-${bgColor}-${bgColorLevel} rounded-full`}
    >
      {text}
    </div>
  )
}

export default Circle
