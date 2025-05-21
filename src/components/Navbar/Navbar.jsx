import React from 'react'
import logo from '../../assets/logo.png'
import Container from '../Layout/Container'
const Navbar = () => {
  return (
        <div className='bg-secondary py-[10px] '>
          <Container>
                    <div className='flex justify-between items-center'>
              <div>
                <img src={logo} alt="#logo" />
              </div>
              <div>
                <ul className='flex gap-x-[50px] items-center font-primary text-lg font-medium text-white'>
                  <li><a href="">Home</a></li>
                  <li><a href="">Features</a></li>
                  <li><a href="">Service</a></li>
                  <li><a href="">Pages</a></li>
                  <li><a href="">Blog</a></li>
                </ul>
              </div>
              <div className='flex items-center gap-x-9'>
                <p className='font-primary text-lg font-medium text-white'>Login</p>
                <a className='bg-primary rounded-[6px] font-primary text-lg font-medium py-[17px] px-12 text-secondary'>Register</a>
              </div>
            </div>
          </Container>
        </div>
  )
}

export default Navbar