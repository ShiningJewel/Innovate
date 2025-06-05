import React from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section className='py-[200px] bg-[#F4FAFA]'>
      <Container>
       <div className='flex'>
         <div className='w-1/2'>
          <div className=''>
          <h3 className='w-[594px] font-secondary font-bold text-[46px] text-titleColor leading-[58px] '>What they are talking about us?</h3>
          <p className='w-[503px] font-primary font-regular text-lg text-paraColor leading-[32px] mt-5 mb-10'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
          <button className=' bg-secondary py-[20px] px-12 font-priamry font-medium text-lg rounded-[6px] text-white'>Get Started</button>
        </div>
        <div>
          <div className='flex mt-[85px]'>
          <div className='relative'>
            <div className='absolute top-0 left-0 w-[58px] h-[58px] bg-[#C4C4C4] rounded-full border-[2px] border-[#FFFFFF]'></div>
            <div className='absolute top-0 left-[30px] w-[58px] h-[58px] bg-[#C4C4C4] rounded-full border-[2px] border-[#FFFFFF]'></div>
            <div className='absolute top-0 left-[60px] w-[58px] h-[58px] bg-[#C4C4C4] rounded-full border-[2px] border-[#FFFFFF]'></div>
            <div className='absolute top-0 left-[90px] w-[58px] h-[58px] bg-[#C4C4C4] rounded-full border-[2px] border-[#FFFFFF]'></div>
        </div>
        <div className='flex flex-col ml-[180px]'>
          <div className='flex items-center'>
            <h3 className='w-[42px] font-secondary font-black text-2xl leading-9 text-primary'>4.5</h3>
          <span className='w-4 text-[#DADBE2] ml-[7px]'>|</span>
          <div className='flex text-[#FDB400]'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          </div>
          <div>
            <h4 className='w-[153px] font-primary font-medium text-lg leading-[32px] mt-[2px] text-paraColor'>280k Total Review</h4>
          </div>
        </div>
        </div>
        </div>
        </div>
        <div className='w-1/2'>
          <TestimonialSlider/>
        </div>
       </div>
      </Container>
    </section>
  )
}

export default Testimonial
