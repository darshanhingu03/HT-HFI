import MenuItem from '../../components/MenuItem'
import React, { useState } from 'react'
import Navbar from '../../components/navigation/Navbar'
import Home from './Home/Home'


function index() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Home />
    </div>
  )
}

export default index
