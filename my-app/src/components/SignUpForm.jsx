"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Contract} from 'ethers'
import { ethers } from 'ethers'
import { contractAddress, abi } from '../constant'

const SignUpForm = () => {
    const router=useRouter()
    const [Name,setName]=useState("")
    const [Bio,setBio]=useState("")
  const createAccount=async()=>{
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new Contract(contractAddress, abi, signer)

        const x=await contract.createUser(Name,Bio)
        console.log(x)

        router.push('/profile')
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='flex justify-center items-center flex-col
     p-12 mt-60  h-[40%] w-[50%]  rounded-xl'>
      <div><b>Username</b></div>
        <input type="text" placeholder='username' className='text-black rounded-lg w-60 h-8' onChange={(e)=>{setName(e.target.value)}} />
        <br />
        <div><b>Bio</b></div>
        <input type="text" placeholder='bio' className='text-black rounded-lg w-60 h-8' onChange={(e)=>{setBio(e.target.value)}}/>
        <br />
        <b className='bg-red-600 hover:bg-red-800 p-3 rounded-xl' onClick={createAccount}> Submit</b>
    </div>
  )
}

export default SignUpForm