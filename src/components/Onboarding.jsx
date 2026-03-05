import React, { useEffect } from 'react'
import { FaShopify } from 'react-icons/fa'

export default function Onboarding() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = '/signin'
        }, 2000)
    }, [])
  return (
    <div className='bg-[#e48045] h-screen flex justify-center items-center flex-col gap-5'>
        <FaShopify className='text-white text-8xl animate-dropdown' />
      <h1 className='text-white text-3xl font-bold mb-2.5 animate-slideIn'>Welcome to OUTFYT</h1>
    </div>
  )
}
