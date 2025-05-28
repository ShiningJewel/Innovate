import React from 'react'
import Container from '../Layout/Container'
import testimonial from '../../assets/testimonial.png'
import logo from '../../assets/logo.png'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <section className='pt-[309px] pb-[0] bg-red-300 shadow-[0_0_0_rgba(0,0,0,0.25)]'>
                
      <Container>
      <div className='relative top-[-471px] bg-cover bg-center w-full h-[316px] flex items-start justify-center text-white' style={{ backgroundImage: `url(${testimonial})` }}>
      </div>
      <div className='flex justify-between items-center'>
        <div>
         <img  className='w-[111px]' src={logo} alt="#logo" />
          <p className='w-[263px] font-primary font-regular text-[16px] leading-[28px] mt-[26px] mb-[24px]'>Build a modern and creative website with Innovate.</p>
          <div className='flex gap-x-[6px] '>
            <div className='flex justify-center items-center w-[42px] h-[42px] rounded-full bg-white'>
              <FaGoogle />
            </div>
            <div className='flex justify-center items-center w-[42px] h-[42px] rounded-full bg-white'>
              <FaTwitter />
            </div>
            <div className='flex justify-center items-center w-[42px] h-[42px] rounded-full bg-white'>
              <FaInstagram />
            </div>
            <div className='flex justify-center items-center w-[42px] h-[42px] rounded-full bg-white'>
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className='flex justify-between text-center'>
          <div>
            <h5 className='font-primary font-medium text-lg leading-8 text-titleColor mb-5'>Product</h5>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>Landingpages</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>Pricing</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>Benefits</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor'>Features</p>
          </div>
          <div>
            <h5  className='font-primary font-medium text-lg leading-8 text-titleColor mb-5'>Company</h5>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>About</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>Privacy Policy</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>Terms & Conditions</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>Partners</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor'>Contact</p>
          </div>
          <div>
            <h5  className='font-primary font-medium text-lg leading-8 text-titleColor mb-5'>Resources</h5>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>Guides and resources</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>Blog</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mb-3'>Tools</p>
            <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor'>Support</p>
          </div>
        </div>
        <div>
        <h5 className='font-primary font-medium text-lg leading-8 text-titleColor '>Get Latest Updates</h5>
        <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mt-5 mb-8'>Subscribe to our newsletter and get many interesting things every week</p>
         </div>
      </div>
      <div>
        <p className='font-primary font-regular text-[16px] leading-[26px] text-paraColor mt-[24px] opacity-[80%]'>© 2024 Innovate - All Right Reserved</p>
      </div>
      </Container>
    </section>
  )
}

export default Footer
