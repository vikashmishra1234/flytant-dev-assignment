import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-20'>
        <div className='h-full flex items-center justify-start w-[100%] gap-3'>
        <img className='h-[60%] sm:h-[70%]' src="/Microsoft_To-Do_icon.png" alt="Logo" />
        <span className='text-[20px]'>TODO</span>
        </div>
    </nav>
  )
}

export default Navbar