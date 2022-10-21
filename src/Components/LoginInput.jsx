import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'

const LoginInput = () => {
  return (
    <div className='flex flex-col h-[80vh] justify-center space-y-2'>
        <center>
            <h2 className="text-white text-3xl font-bold">Sign In</h2>
        </center>
        <center>
            <div className='flex flex-row w-[390px] h-11 mt-3 bg-[#bababa] items-center rounded-lg px-1 gap-2'>
                <i className='text-[#4a4848] text-2xl'> <FaUser/> </i>
                <input className='w-full p-2 px-3 bg-transparent placeholder:text-[#efefef] outline-none rounded-lg text-black font-semibold' type="text" placeholder='Username' />
            </div>  
        </center>
        <center>
            <div className='flex flex-row w-[390px] h-11 mt-3 bg-[#bababa] items-center rounded-lg px-1 gap-2'>
                <i className='text-[#4a4848] text-2xl'> <FaLock/> </i>
                <input className='w-full p-2 px-3 bg-transparent placeholder:text-[#efefef] outline-none rounded-lg text-black font-semibold' type="password" placeholder='Password' />
            </div>
        </center>
        <center>
            <input className='w-96 p-2 px-3 mt-12 bg-[#3992df] border border-white outline-none rounded-lg text-black font-semibold hover:bg-[#47cdee] hover:text-white duration-300' type="submit" value="Sign In" />
        </center>
        <center>
            <h4 className='text-white mt-7 hover:text-blue-700 cursor-pointer duration-300'>
                <Link to='/register'>CREATE ACCOUNT</Link>
            </h4>
        </center>
    </div>
  )
}

export default LoginInput