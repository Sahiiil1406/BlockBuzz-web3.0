"use client"

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-slate-500 w-screen h-[70px] text-white '>
        <div className='flex justify-between items-center h-full px-10 gap-4'>
            <div className='text-2xl font-bold'>Dapp</div>
            <div className='flex space-x-5'>
            <Link href='/home'><div>Home</div></Link>
            <Link href='/post'><div>MyPost</div></Link>
            <Link href='/profile'><div>Profile</div></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar