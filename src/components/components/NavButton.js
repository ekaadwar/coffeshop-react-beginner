import React from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

export default function NavButton({ content }) {
  return (
    <div className="flex justify-center items-center h-16 w-16 rounded-full border-4 border-yellow-800 hover:bg-yellow-800 text-yellow-800 hover:text-white ml-2 text-2xl">
      {content === 'arrowForward' && <MdArrowForward />}
      {content === 'arrowBack' && <MdArrowBack />}
    </div>
  )
}
