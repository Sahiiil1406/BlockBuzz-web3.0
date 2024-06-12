import React from 'react'
import Image from 'next/image'

const PostCard = (props) => {
  return (
    <div className='bg-slate-200 w-52 h-60 hover:w-54 hover:h-68 rounded-md hover:bg-slate-400 p-2 text-black'>
       <Image
      src="/body.png"
      width={520}
      height={1000}
      alt="Picture of the author"
    />
      <div><b>Title</b>{props.images}</div>
      <div><b>Content</b>:{props.title}</div>
      <br />
      <b className='bg-green-500 w-10 p-2 rounded-lg hover:bg-green-700'>Update Post</b>
      
    </div>
  )
}

export default PostCard