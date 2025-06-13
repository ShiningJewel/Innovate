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
      <div className='relative top-[-149px] px-[0px] py-[140px]  md:px-[102px] md:py-[150px] bg-cover bg-center w-full  flex items-start justify-center text-white' style={{ backgroundImage: `url(${testimonial})` }}>
        <div className='absolute top-0 left-0'>
          <div className='flex my-[100px] px-[20px] md-px-0 justify-center items-center'>
            <h3 className='w-[150px] md:w-[577px] md:ml-[102px] font-secondary font-bold text-[18px] md:text-[46px] md:leading-[58px]'>Don’t find the answer? contact us for any query.</h3>
         <div className='ml-[20px] md:ml-0'>
           <a className='ml-[45px] md:ml-[407px] bg-primary py-[10px] px-[10px] md:py-[17px] md:px-12 font-priamry font-medium text[16px] md:text-lg rounded-[6px] text-secondary'>Contact Us</a>
         </div>
          </div>
        </div>
      </div>
      <div className='ml-[20px] md:ml-0 md:flex justify-between'>
        <div>
         <img  className='w-[111px]' src={footerlogo} alt="#logo" />
          <p className='w-[263px] font-primary font-regular text-paraColor text-[14px] md:text-[16px] md:leading-[28px] mt-[26px] mb-[24px]'>Build a modern and creative website with Innovate.</p>
          <div className='flex gap-x-[6px] '>
            <div className='flex justify-center text-paraColor items-center h-[30px] w-[30px] md:w-[42px] md:h-[42px] rounded-full bg-[#EEEEEE]'>
              <FaGoogle />
            </div>
            <div className='flex justify-center text-paraColor items-center h-[30px] w-[30px] md:w-[42px] md:h-[42px] rounded-full bg-[#EEEEEE]'>
              <FaTwitter />
            </div>
            <div className='flex justify-center text-paraColor items-center h-[30px] w-[30px] md:w-[42px] md:h-[42px] rounded-full bg-[#EEEEEE]'>
              <FaInstagram />
            </div>
            <div className='flex justify-center text-paraColor items-center h-[30px] w-[30px] md:w-[42px] md:h-[42px] rounded-full bg-[#EEEEEE]'>
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className=' md:flex justify-between gap-x-[84px]'>
          <div className='mt-[20px] md:mt-0'>
            <h5 className='font-primary font-medium text-[16px] md:text-lg md:leading-8 text-titleColor mb-5'>Product</h5>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>Landingpages</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>Pricing</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>Benefits</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor'>Features</p>
          </div>
          <div className='mt-[20px] md:mt-0'>
            <h5  className='font-primary font-medium text-[16px] md:text-lg md:leading-8 text-titleColor mb-5'>Company</h5>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>About</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>Privacy Policy</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>Terms & Conditions</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>Partners</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor'>Contact</p>
          </div>
          <div className='mt-[20px] md:mt-0'>
            <h5  className='font-primary font-medium text-[16px] md:text-lg md:leading-8 text-titleColor mb-5'>Resources</h5>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>Guides and resources</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>Blog</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mb-1 md:mb-3'>Tools</p>
            <p className='font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor'>Support</p>
          </div>
        </div>
        <div className='mt-[20px] md:mt-0'>
       <h5 className='font-primary font-medium text-[16px] md:text-lg md:leading-8 text-titleColor '>Get Latest Updates</h5>
        <p className='w-[285px] font-primary font-regular text-[12px] md:text-[16px] md:leading-[26px] text-paraColor mt-2 mb-8 md:mt-5 md:mb-8'>Subscribe to our newsletter and get many interesting things every week</p>
        <div className='relative'>
          <input type="text" className='w-[269px] outline-0 bg-white rounded-[6px] placeholder:text-[#B4B6C4] font-secondary font-regular text-base leading-[26px] pl-6 py-5' placeholder='Your Email Address' />
          <a className='absolute top-[19px] right-[24px] bg-secondary py-[6px] px-[10px] font-priamry font-medium text-lg rounded-[6px] text-[#FFFFFF]'>
            <FaPaperPlane />
          </a>
        </div>
         </div>
      </div>
      <div className='mt-[50px] md:mt-[86px]'>
        <div className='w-[1409px] border-[1px] border-[#D2D2D2]'></div>
        <p className='font-primary font-regular text-[16px] leading-[26px] text-[#645E76] pt-[16px] pb-[20px] md:pt-[24px] md:pb-[30px] opacity-[80%]'>© 2024 Innovate - All Right Reserved</p>
      </div>
      </Container>
    </section>
  )
}

export default Footer
