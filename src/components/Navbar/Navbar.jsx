import React from 'react'
import logo from '../../assets/logo.png'
import Container from '../Layout/Container'
const Navbar = () => {
  return (
    <div className='bg-secondary py-10'>
      <Container>
                <div className='flex justify-between items-center'>
        <div>
          <img src={logo} alt="#logo" />
        </div>
        <div>
          <ul className='flex items-center font-primary font-medium text-white text-lg gap-x-[50px]'>
            <li><a href="">Home</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </div>
        <div className='flex items-center gap-x-[37px]'>
          <p className='font-priamry font-medium text-lg text-white '>Login</p>
          <a className=' bg-primary py-[17px] px-12 font-priamry font-medium text-lg rounded-[6px] text-secondary'>Register</a>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
