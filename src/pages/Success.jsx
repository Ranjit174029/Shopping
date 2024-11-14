import React from 'react'
import { MdOutlineDoneOutline } from "react-icons/md";

export default function Success() {
  return (
    <div className='flex items-center justify-center font-bold gap-2 text-2xl'><MdOutlineDoneOutline className='text-green-600'/> Order places successfully.</div>
  )
}
