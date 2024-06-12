"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const UserCard = (props) => {
  const router = useRouter()
  const handleClick = (id) => {
    router.push(`/users/${id}`)
  }
  return (
    <div className=' w-60 p-8'>
      <div className='flex '>
        <div className='flex flex-col items-center'>
          <img src='body.png' className='w-32 h-32 rounded-full' />
          <h2 className='font-bold text-xl mt-3'>{props.name}</h2>
          <p className='text-gray-500'>@{props.name}</p>
          <p className='text-gray-500'>
            {props.bio}
          </p>
          <p className='text-gray-500'>
            {props.address.slice(0,10)}
          </p>
          <div className='flex gap-3 mt-5'>
            <button className='bg-blue-500 text-white p-2 rounded' onClick={()=>{
              handleClick(props.address)
            }}>View</button>
            <button className='bg-gray-200 text-black p-2 rounded'>Message</button>
           </div> 
    </div>
    </div>
    </div>
  )
}

export default UserCard