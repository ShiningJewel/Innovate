import React from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section className='py-[70px] md:py-[200px] bg-[#F4FAFA]'>
      <Container>
       <div className='md:flex'>
         <div className='md:w-1/2'>
          <div className=' ml-[20px] md:ml-0'>
          <h3 className='w-auto md:w-[594px] font-secondary font-bold text-[25px] md:text-[46px] text-titleColor md:leading-[58px] '>What they are talking about us?</h3>
          <p className='w-[350px] md:w-[503px] font-primary font-regular text-[14px] md:text-lg text-paraColor md:leading-[32px] mt-2 mb-5 md:mt-5 md:mb-10'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
          <button className=' bg-secondary py-[20px] px-12 font-priamry font-medium text-lg rounded-[6px] text-white'>Get Started</button>
        </div>
        <div>
          <div className='ml-[20px] md:ml-0 flex mt-[80px]'>
          <div className='relative'>
            <div className='absolute top-0 left-0 w-[58px] h-[58px] bg-[#C4C4C4] rounded-full border-[2px] border-[#FFFFFF]'></div>
            <div className='absolute top-0 left-[30px] w-[58px] h-[58px] bg-[#C4C4C4] rounded-full border-[2px] border-[#FFFFFF]'></div>
            <div className='absolute top-0 left-[60px] w-[58px] h-[58px] bg-[#C4C4C4] rounded-full border-[2px] border-[#FFFFFF]'></div>
            <div className='absolute top-0 left-[90px] w-[58px] h-[58px] bg-[#C4C4C4] rounded-full border-[2px] border-[#FFFFFF]'></div>
        </div>
        <div className='ml-[180px]'>
          <div className='flex items-center'>
            <h3 className='w-[35px] md:w-[42px] font-secondary font-black text-2xl leading-9 text-primary'>4.5</h3>
          <span className='w-[10px] md:w-4 text-[#DADBE2] ml-[7px]'>|</span>
          <div className='flex text-[#FDB400]'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          </div>
          <div>
            <h4 className='w-auto md:w-[153px] font-primary font-medium text-[16px] md:text-lg leading-[32px] mt-[2px] text-paraColor'>280k Total Review</h4>
          </div>
        </div>
        </div>
        </div>
        </div>
        <div className='md:w-1/2'>
          <TestimonialSlider/>
        </div>
       </div>
      </Container>
    </section>
  )
}

export default Testimonial
