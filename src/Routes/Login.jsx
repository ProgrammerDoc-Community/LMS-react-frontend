import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo.png'
import LoginInput from '../Components/LoginInput'

const Login = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-fixed bg-[url("https://images.pexels.com/photos/207700/pexels-photo-207700.jpeg?cs=srgb&dl=pexels-pixabay-207700.jpg&fm=jpg&_gl=1*104bd16*_ga*MzAyNTQzMjg0LjE2NjYwNjgwMDU.*_ga_8JE65Q40S6*MTY2NjM1ODU3Ny41LjEuMTY2NjM1ODg4MC4wLjAuMA..")]'>
        <div className='bg-black/70 w-full h-screen px-8 py-3'>
            <Link to='/' className="flex gap-4 items-center">
                <img className='w-[40px]' src={Logo} alt="Logo" />
                <span className='text-white'>Learning Management System</span>
            </Link>
            <LoginInput />
            <span className="flex justify-center text-white text-center">© 2022 LMS. All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Login