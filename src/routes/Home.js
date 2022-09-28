import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TitleBar from '../components/Titlebar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <TitleBar />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home