import React, { useState } from 'react'
import { FaUser, FaLock, FaEnvelope, FaUserGraduate, FaLandmark, FaBook, FaRegBuilding, } from 'react-icons/fa'

const RegisterInput = () => {

  //changing carrier useState
  const [showhide, setshowhide] = useState("")
  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setshowhide(getuser)
  }

  return (
    <div className='flex flex-col justify-center py-12'>
      <form className='max-w-[400px] w-full mx-auto bg-gradient-to-r from-blue-500 to-green-200 shadow-lg p-8 px-8 rounded-lg'>
          <h2 className='text-4xl text-white font-bold text-center mb-5'>Sign Up</h2>
          <div className='flex flex-row h-11 mt-3 bg-gray-200 items-center rounded-lg px-1 gap-2'>
            <i className='text-[#4a4848] text-2xl'> <FaUser/> </i>
            <input className='bg-transparent w-full text-black font-semibold outline-none placeholder:text-[#aaa] placeholder:font-semibold' type="text" placeholder='Username' />
          </div>
          <div className='flex flex-row h-11 mt-3 bg-gray-200 items-center rounded-lg px-1 gap-2'>
            <i className='text-#4a4848] text-2xl'> <FaEnvelope/> </i>
            <input className='bg-transparent w-full text-black font-semibold outline-none placeholder:text-[#aaa] placeholder:font-semibold' type="email" placeholder='Email Address' />
          </div>
          <div className='flex flex-row h-11 mt-3 bg-gray-200 items-center rounded-lg px-1 gap-2'>
            <i className='text-[#4a4848] text-2xl'> <FaLock/> </i>
            <input className='bg-transparent w-full text-black font-semibold outline-none placeholder:text-[#aaa] placeholder:font-semibold' type="password" placeholder='Password' />
          </div>
          <div className='flex flex-row h-11 mt-3 bg-gray-200 items-center rounded-lg px-1 gap-2'>
            <i className='text-[#4a4848] text-2xl'> <FaUserGraduate/> </i>
            <select className='w-full bg-transparent outline-none text-[#aaa] font-semibold' name="usertype" onChange={(e) => handleshowhide(e)}>
              <option className='text-[#1e1c1c] font-semibold' value="">Select your Profile</option>
              <option className='text-[#1e1c1c] font-semibold' value="1">Teacher</option>
              <option className='text-[#1e1c1c] font-semibold' value="2">Student</option>
            </select>
          </div>

          {showhide === "1" && (
            <div className='flex flex-row h-11 mt-3 bg-gray-200 items-center rounded-lg px-1 gap-2'>
              <i className='text-[#4a4848] text-2xl'> <FaBook/> </i>
            <input className='bg-transparent w-full text-black font-semibold outline-none placeholder:text-[#aaa] placeholder:font-semibold' type="text" placeholder='Course' />
          </div>
          )}

          {showhide === "2" && (
            <>
              <div className='flex flex-row h-11 mt-3 bg-gray-200 items-center rounded-lg px-1 gap-2'>
                <i className='text-[#4a4848] text-2xl'> <FaRegBuilding/> </i>
                <input className='bg-transparent w-full text-black font-semibold outline-none placeholder:text-[#aaa] placeholder:font-semibold' type="text" placeholder='Department' />
              </div>
              <div className='flex flex-row h-11 mt-3 bg-gray-200 items-center rounded-lg px-1 gap-2'>
                <i className='text-[#4a4848] text-2xl'> <FaLandmark/> </i>
                <input className='bg-transparent w-full text-black font-semibold outline-none placeholder:text-[#aaa] placeholder:font-semibold' type="text" placeholder='Class' />
              </div>
            </>
          )}

          <button className='w-full mt-16 py-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/40 text-white font-semibold rounded-lg'>Sign Up</button>
      </form>
    </div>
  )
}

export default RegisterInput