import React from 'react'

function contentDefault() {
  return <p>Text</p>
}

function ButtonSquare({
  content = contentDefault,
  primary = false,
  secondary = false,
  py = 3,
  px = 0,
  w = 'full',
  h = 'auto',
  rounded = 'xl',
  bg = 'bg-gray-400',
  bgHover = '',
  bgFocus = '',
  textColor = '',
  textHoverColor = '',
  textFocusColor = '',
}) {
  if (primary === true) {
    bg = 'bg-yellow-400'
    bgHover = 'bg-yellow-200'
  }

  if (secondary === true) {
    bg = 'bg-yellow-900'
    bgHover = 'bg-yellow-800'
  }

  return (
    <button
      className={`focus:outline-none py-${py} px-${px} w-${w} h-${h} ${bg} hover:${bgHover} focus:${bgFocus} rounded-${rounded} ${textColor} hover:${textHoverColor} focus:${textFocusColor}`}
      value="oke"
    >
      {content()}
    </button>
  )
}

export default ButtonSquare
