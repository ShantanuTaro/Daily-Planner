import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-200 min-h-[80vh]">

      <div className="addTodo">
        <h2 className='text-lg font-bold'>Add new Todo</h2>
        <input type="text" />
        <button className='bg-slate-600 hover:bg-slate-800 p-3 py-1 text-white rounded-md mx-6'>Add</button>
      </div>
      <h1 className='text-xl font-bold'>Todo</h1>

      <div className="todo flex">
        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <div className="buttons">
          <button className='bg-slate-600 hover:bg-slate-800 p-3 py-1 text-white rounded-md mx-2'>Edit</button>
          <button className='bg-slate-600 hover:bg-slate-800 p-3 py-1 text-white rounded-md mx-2'>Delete</button>
        </div>

      </div>
      
    </div>
    </>
  );
}

export default App;
