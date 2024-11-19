"use client"
import React from 'react'

const Button = () => {
  return (
    <div>
    <button className='bg-green-500 rounded-sm px-4 py-1'
    onClick={()=>alert('button pressed')}>
      Press
    </button>
  </div>
  )
}

export default Button