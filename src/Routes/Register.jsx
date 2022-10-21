import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo.png'
import RegisterInput from '../Components/RegisterInput'
const Register = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full'>
        <div className='hidden md:block md:bg-cover md:bg-center md:bg-[url("https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?cs=srgb&dl=pexels-julia-m-cameron-4144294.jpg&fm=jpg&_gl=1*rtv23e*_ga*MzAyNTQzMjg0LjE2NjYwNjgwMDU.*_ga_8JE65Q40S6*MTY2NjI3NDEwOC4zLjEuMTY2NjI3NDE2OC4wLjAuMA..")]'>
            
        </div>

        <div className="bg-gray-100 text-center">
          <div className="flex justify-between items-center p-3 my-8">
            <Link to='/' className="flex gap-4 items-center">
                    <img className='w-[40px]' src={Logo} alt="Logo" />
                    <span className='text-black'>Learning Management System</span>
                </Link>
            <h2 className="text-[25px] md:text-sm lg:text-[25px] text-[#73c2f0] font-semibold">
              <Link to='/login'>Sign In</Link>
            </h2>
          </div>
          <RegisterInput />
          <span className='flex justify-center mt-20'>© 2022 LMS. All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Register