"use client"
import React, { useState } from 'react'
import { Contract} from 'ethers'
import { ethers } from 'ethers'
import social from '../../../public/socialMediacontract.json'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

const contractAddress='0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
const abi=social.abi
export let helper='';
const page = 
() => {
  const [contract,setContract]=useState(null)

const connectContract = async () => {
    if(window.ethereum!==undefined){
        const account=await ethereum.request({method:'eth_requestAccounts'})
        console.log(account)
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new Contract(contractAddress, abi, signer)
        const x=await contract.deploy()
        console.log(x)
        const y=await contract.createUser("sahil","bio")
        console.log(y)

    }else{
        console.log("Install Metamask")
    
    }

} 
 

  return (
    <div>
        <Navbar />
        <div className='flex'>
            <div className='flex-1 p-44'>
                <b className='bg-red-600 p-3 mb-5  rounded-xl hover:bg-red-800' onClick={connectContract}> {
                    contract ? "Connected" : "Connect Wallet"
}</b>
                <br />
                <br />
                <br />
                <Link href='/createAccount'>
                <b className='bg-red-600 p-3 mt-5 rounded-xl  hover:bg-red-800' 
            >Create An Account</b></Link>
            </div>
            <div className=' w-[65%] h-[110%]'>
                <img src="body.png" alt="" />
            </div>
        </div>
        <br />
        <br />
        <br />
        <Footer/>
    </div>
  )
}

export default page