import React from 'react'
import Navbar from './components/Navbar'
import Display from './components/Display'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-zinc-900'>
      <Navbar />
      <Display />
    </div>
  )
}

export default App