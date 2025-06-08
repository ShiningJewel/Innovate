import React from 'react'
import Container from '../Layout/Container'
import testimonial from '../../assets/testimonial.png'
import footerlogo from '../../assets/footerlogo.png'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className='mt-[309px] bg-[#F7F7FC] pb-[0] shadow-[0_0_0_rgba(0,0,0,0.25)]'>
                
      <Container>
      <div className='relative top-[-149px] bg-cover bg-center w-full h-[316px] flex items-start justify-center text-white' style={{ backgroundImage: `url(${testimonial})` }}>
        <div className='absolute top-0 left-0'>
          <div className='flex my-[100px] justify-center items-center'>
            <h3 className='w-[577px] ml-[102px] font-secondary font-bold text-[46px] leading-[58px]'>Don’t find the answer? contact us for any query.</h3>
         <div className='ml-[437px]'>
           <a className=' bg-primary py-[17px] px-12 font-priamry font-medium text-lg rounded-[6px] text-secondary'>Contact Us</a>
         </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
         <img  className='w-[111px]' src={footerlogo} alt="#logo" />
          <p className='w-[263px] font-primary font-regular text-paraColor text-[16px] leading-[28px] mt-[26px] mb-[24px]'>Build a modern and creative website with Innovate.</p>
          <div className='flex gap-x-[6px] '>
            <div className='flex justify-center text-paraColor items-center w-[42px] h-[42px] rounded-full bg-[#EEEEEE]'>
              <FaGoogle />
            </div>
            <div className='flex justify-center text-paraColor items-center w-[42px] h-[42px] rounded-full bg-[#EEEEEE]'>
              <FaTwitter />
            </div>
            <div className='flex justify-center text-paraColor items-center w-[42px] h-[42px] rounded-full bg-[#EEEEEE]'>
              <FaInstagram />
            </div>
            <div className='flex justify-center text-paraColor items-center w-[42px] h-[42px] rounded-full bg-[#EEEEEE]'>
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className='flex justify-between gap-x-[84px]'>
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
        <p className='w-[285px] font-primary font-regular text-[16px] leading-[26px] text-paraColor mt-5 mb-8'>Subscribe to our newsletter and get many interesting things every week</p>
        <div className='relative'>
          <input type="text" className='w-[269px] outline-0 bg-white rounded-[6px] placeholder:text-[#B4B6C4] font-secondary font-regular text-base leading-[26px] pl-6 py-5' placeholder='Your Email Address' />
          <a className='absolute top-[19px] right-[24px] bg-secondary py-[6px] px-[10px] font-priamry font-medium text-lg rounded-[6px] text-[#FFFFFF]'>
            <FaPaperPlane />
          </a>
        </div>
         </div>
      </div>
      <div className='mt-[86px]'>
        <div className='w-[1409px] border-[1px] border-[#D2D2D2]'></div>
        <p className='font-primary font-regular text-[16px] leading-[26px] text-[#645E76] pt-[24px] pb-[30px] opacity-[80%]'>© 2024 Innovate - All Right Reserved</p>
      </div>
      </Container>
    </section>
  )
}

export default Footer
