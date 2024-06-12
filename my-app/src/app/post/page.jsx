"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Contract } from 'ethers'
import {ethers} from 'ethers'
import { abi,contractAddress } from '../../constant' 
import CreatePost from '../../components/CreatePost'
import PostCard from '../../components/PostCard'
import { get } from 'http'

function page() {
 const [post, setPost] = useState([])

  const getMyPost=async()=>{
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new Contract(contractAddress, abi, signer)
       
        const y=await signer.getAddress()
        console.log(y)
        const x=await contract.getPostByUser()
        
        const p=[]
        for(let i=0;i<x.length;i++){
          p.push(x[i]);
        }
        setPost(p)
        console.log("POST",post)
      
    } catch (error) {
      console.log(error)
    }
  }
  //getMyPost()

  useEffect(()=>{
    getMyPost()
    //console.log(post)
  },[])
  return (
    <div>
        <Navbar/>
        <div className='flex'>
          <div className='w-[60%] flex gap-8 flex-wrap p-8'>
            {
              post.map((i)=>{
                return <PostCard title={i.title} images={i.images}/>
              })
            }
          </div>
          <div className='w-[35%]'>
            <CreatePost/>
          </div>
        </div>
    </div>
  )
}

export default page