"use client"
import React, { useEffect,useState } from 'react'
import Navbar from '../../components/Navbar'
import { ethers } from 'ethers'
import { Contract} from 'ethers'
import { abi,contractAddress } from '../../constant'

const page = () => {
  const [Name, setName] = useState('')
  const [Amount, setAmount] = useState('')
  const [Id, setId] = useState('')
  const [Address, setAddress] = useState('')
  const [Bio, setBio] = useState('')


  const myProfile = async () => {
    try {
       const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new Contract(contractAddress, abi, signer)
         
        const y=await signer.getAddress()
        console.log(y)
         const x=await contract.addressToUser(y)
        console.log(x)
        setName(x.name)
        setAmount(String(x.amount))
        
        setId(String(x.id))
        setAddress(y)
        setBio(x.bio)

      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    myProfile()
  }, [])
  return (
    <div>
        <Navbar/>
        <div className='flex'>
        <div className='w-[50%]  p-2 ml-20'>
            <br />
            <br />
            <h1 className='text-4xl'>Welcome...</h1>
            <br />
            <h2 className='text-6xl'>{Name}</h2>
            <br />
            <p><b>Bio</b>={Bio}</p>
            <br />
            <p className='text-2xl'><b>Amount</b>={Amount}</p>
            <br />
            <p className='text-2xl'><b>MyId</b>={Id}</p>
            <br />
            <p className='text-2xl'><b>My Account Address</b>=
            {Address}</p>

        </div>
        <div className=' absolute right-2 top-30'>
            <img src="profile.png" className='w-[200%] h-[600px]'alt="" />
        </div>
        </div>
    </div>
  )
}

export default page