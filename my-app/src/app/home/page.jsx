"use client"
import React, { useEffect,useState } from 'react'
import Navbar from '../../components/Navbar'
import Usercard from '../../components/UserCard'
import { Contract } from 'ethers'
import {ethers} from 'ethers'
import { abi,contractAddress } from '../../constant'

const page = () => {
  const [userList,setUserList]=useState([])

  const getUserList=async()=>{
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new Contract(contractAddress, abi, signer)
       
        const x=await contract.getAllUser()
        
        const p=[]
        for(let i=0;i<x.length;i++){
          p.push(x[i]);
        }

        setUserList(p)
        console.log(p)

      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserList()
  },[])
  return (
    <div>
        <Navbar/>
        <div className='flex flex-wrap gap-8'>
          {userList.map((user,index)=>{
            return <Usercard key={index} name={user.name} bio={user.bio} address={user.add} />
          })}
        </div>
    </div>
  )
}

export default page
