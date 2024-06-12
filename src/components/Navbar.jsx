import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full h-[12vh] flex items-center bg-zinc-900 py-2 px-4 fixed z-[99] '>
      <div className='text-white flex gap-6 items-center w-full'>
        <img className='w-[3%]' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="" />
        {
        ['home', 'explore', 'create'].map((item, index) => {
          if (item === 'home') {
              return (
                  <Link key={index} to='/'>
                      <h1 className='text-xl capitalize font-bold'>{item}</h1>
                  </Link>
              );
          } else {
              return (
                  <Link key={index} to={item}>
                      <h1 className='text-xl capitalize font-bold'>{item}</h1>
                  </Link>
              );
          }
      })
      
        }
        <div className='w-full'>
          <input className='w-[80%] outline-none rounded-full py-3 px-3 text-[1rem] h-full bg-zinc-700' type="text" placeholder='Search'/>
        </div>
         <Link to='/account'>
         <h1 className='text-2xl font-bold mx-4 cursor-pointer'>Account</h1>
         </Link>
      </div>
    </div>
  )
}

export default Navbar