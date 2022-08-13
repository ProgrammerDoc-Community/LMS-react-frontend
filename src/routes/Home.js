import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import TitleBar from '../components/Titlebar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <TitleBar />
        <Cards />
    </div>
  )
}

export default Home