"use client"
import React, { useEffect } from 'react'
import SignUpForm from '../../components/SignUpForm'
import { helper } from '../Homepage/page'

const page = () => {
  
  useEffect(() => {
    
    
  }, [])
  return (
    <div className='flex'>
        <SignUpForm/>
        <div>
          <img src="body.png" alt="" />
        </div>
    </div>
  )
}

export default page