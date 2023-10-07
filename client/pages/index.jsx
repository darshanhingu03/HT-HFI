import React from 'react';
import Home from "./home/Home"
import Navbar from "../components/Navbar/Navbar"

function index() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Home />
    </div>
  )
}

export default index
