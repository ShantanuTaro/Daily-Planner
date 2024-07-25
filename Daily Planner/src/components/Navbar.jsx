import React from 'react'

const Navbar = () => {
  return (
    <nav className='container mx-auto rounded-xl flex justify-between bg-slate-800 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-3xl mx-8'>Planner</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all text-xl'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all text-xl'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar

