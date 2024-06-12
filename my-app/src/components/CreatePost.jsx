"use client"
import React, { useEffect ,useState} from 'react'
import { Contract } from 'ethers';
import {ethers} from 'ethers'
import { abi,contractAddress } from '../constant';

const CreatePost = () => {
 const [Title, setTitle] = useState();
 const [content, setcontent] = useState();

 const createPost=async()=>{
  try {
    const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new Contract(contractAddress, abi, signer)

        const x=await contract.createAPost(Title,content)
        console.log(x)
    
  } catch (error) {
    console.log(error)
  }
 }
  return (
    <div className='p-8'>
        <h1 className='text-2xl font-bold'>Create Post</h1>
        <form className='mt-5'>
            <div className='mb-5'>
            <label className='block mb-2'>Title</label>
            <input type='text' className='w-full p-2 border border-gray-300 rounded text-black' 
            onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className='mb-5'>
            <label className='block mb-2'>Content</label>
            <textarea className='w-full p-2 border border-gray-300 rounded text-black' 
            onChange={(e)=>{setcontent(e.target.value)}}
            />
            </div>
            <button className='bg-green-600 text-white p-2 rounded'
            onClick={createPost}>Create Post</button>
        </form>
    </div>
  )
}

export default CreatePost