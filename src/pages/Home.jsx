import React from 'react'
import Navbar from '../reusable/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="content-div">
        <h1>Home page</h1>
        <p>This is home page data</p>
        </div>
    </div>
  )
}

export default Home