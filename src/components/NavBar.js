import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

import Logo from '../assets/logo.png';
import './NavbarStyles.css';

const Navbar = () => {
  const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor = () => {
            if(window.scrollY >= 100){
                setColor(true)
            }else{
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)


  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/'> <span> <img src={Logo} alt='Logo' /> Learning Management System</span> </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/register'>SIGN IN</Link>
            </li>
            <li>
                <Link to='/register'>REGISTER</Link>
            </li>
        </ul>

        <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : <FaBars size={20} style={{color: '#fff'}} />}
        </div>
    </div>
  )
}

export default Navbar