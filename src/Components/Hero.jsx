import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import 'aos/dist/aos.css'
import './HeroStyles.css'

AOS.init();
const Hero = () => {
  return (
    <div className='w-full h-[550px] flex flex-col justify-between bg-cover bg-center bg-fixed bg-[url("https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg&_gl=1*2o9ohu*_ga*MzAyNTQzMjg0LjE2NjYwNjgwMDU.*_ga_8JE65Q40S6*MTY2NjI2MjU2Ni4yLjEuMTY2NjI2Mjg0NS4wLjAuMA..")]'>
        <div className='bg-[#f4e65434] w-full h-screen px-8 py-20'>
            <div className='grid md:grid-cols-2 py-12'>
                <div className='flex flex-col gap-2 justify-center md:items-start py-8' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1500'>
                    <h1 className='change font-bold text-[2rem] xl:text-5xl'>
                        THE PERFECT MOMENT TO LEARN SOMETHING NEW
                    </h1>
                    <p className='change1 font-medium text-[1.1rem] xl:text-[2rem]'>Getting the time to learn from teachers remotely for a better and perfect 
                    community in the next generation to come </p>
                    <button className='px-8 py-3 mt-5 bg-[#60bddc9e] rounded-3xl transition duration-300 hover:text-white hover:bg-[#1894f2dc]'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero