import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import Container from '../Layout/Container'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

const [show, setShow] = useState(false);
const [navScroll, setNavScroll] = useState (false)
const handleClick = () =>{
  setShow(true)
}

useEffect(()=>{

  function scrollFunction(){
    if(scrollY > 200){
      setNavScroll(true)
    }else{
      setNavScroll(false)
    }
  }


  window.addEventListener("scroll",scrollFunction)

},[])


  return (
    <div className={` ${navScroll ? "md:fixed bg-secondary pb-10" : "absolute"}  top-0 left-0 w-full py-[20px] md:py-10 px-5 md:px-0 z-[9999]` }>
      <Container>
                <div className='md:flex justify-between items-center'>
        <div className='flex items-center  justify-between'>
          <img className='md:h-0 h-[40px]' src={logo} alt="#logo" />
          <div>
            <FaBars onClick={handleClick} className='block md:hidden text-2xl text-white' />
          </div>
        </div>
        <div>
          <ul className='hidden md:flex items-center font-primary font-medium text-white text-lg gap-x-[50px]'>
            <li><a href="">Home</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </div>
        <div className='hidden md:flex items-center gap-x-[37px]'>
          <p className='font-priamry font-medium text-lg text-white '>Login</p>
         <div>
           <button href="https://github.com/ShiningJewel/innovate.git" className=' bg-primary py-[17px] px-12 font-priamry font-medium text-lg rounded-[6px] text-secondary'>Register</button>
         </div>
        </div>
        </div>
      </Container>
      {
        show &&
        <div className='bg-secondary w-full h-screen absolute flex top-0 left-0 text-center justify-center items-center z-[999]'>
          <div className='absolute top-0 left-0'>
          <RxCross2 onClick={()=>setShow(false)} className='text-3xl text-white' />
          </div>
                  <div>
          <ul className='items-center font-primary font-medium text-white text-lg'>
            <li className='mb-5'><a href="">Home</a></li>
            <li className='mb-5'><a href="">Features</a></li>
            <li className='mb-5'><a href="">Service</a></li>
            <li className='mb-5'><a href="">Pages</a></li>
            <li className='mb-5'><a href="">Blog</a></li>
          </ul>
          <div className=' items-center'>
          <p className='mb-5 font-priamry font-medium text-lg text-white '>Login</p>
         <div>
           <button className=' bg-primary py-[17px] px-12 font-priamry font-medium text-lg rounded-[6px] text-secondary'>Register</button>
         </div>
        </div>
        </div>
        
        </div>
      }
    </div>
  )
}

export default Navbar
