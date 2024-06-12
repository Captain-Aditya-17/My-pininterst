import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ image, name,id,width,height }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`album/${id}`)}  className='cursor-pointer transition-all hover:bg-zinc-800 p-2'>
      <div>
        <img className='w-full  rounded-[20px]' src={image} alt="" />
      </div>
    </div>
  )
}

export default Card