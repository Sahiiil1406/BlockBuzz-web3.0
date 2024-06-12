"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import PostCard from '../../../components/PostCard'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ethers } from 'ethers'
import { Contract } from 'ethers'
import { abi, contractAddress } from '../../../constant'


const Test = () => {
    const [name, setname] = useState();
    const [bio,setbio]=useState();
    const [amount, setamount] = useState();
    const [posts, setposts] = useState();

    const { id } = useParams();
    
    const getUser=async()=>{
        try {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            const contract = new Contract(contractAddress, abi, signer)
            
            const x=await contract.addressToUser(id)
            setname(x.name)
            setbio(x.bio)
            setamount(String(x.amount))
        } catch (error) {
            console.log(error)
        }
    }


    const getUserPost=async()=>{
        try {
          const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            const contract = new Contract(contractAddress, abi, signer)

            const x=await contract.getUserPostByAdress(id)
            console.log(x)
            
            const p=[]
            for(let i=0;i<x.length;i++){
              p.push(x[i]);
            }
            setposts(p)
          
        } catch (error) {
          console.log(error)
        }
      }
    useEffect(()=>{
        getUser()
        getUserPost()
    },[])
  return (
    <div>
        <Navbar/>
        <div className='flex '>
            <div className='w-[35%] p-4'>
            <Image className='p-5'
      src="/profile.png"
      width={350}
      height={300}
      alt="Picture of the author"
    />
                <br />
                <br />
                <div className='p-6'>
                    <div><b>Username</b>:{name}</div>
                    <div><b>Bio</b>:{bio}</div>
                    <div><b>Amount</b>:{amount}</div>
                    <div><b>Address</b>:{id}</div>


                </div>
            </div>
            <div className='p-4'>
                <h1 className='text-4xl hover:underline p-4'><b>MY POSTS</b></h1>
                <div className='flex flex-wrap gap-8'>
                    {posts && posts.map((post,index)=>{
                        return <PostCard key={index} title={post.title} images={post.images} />
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Test