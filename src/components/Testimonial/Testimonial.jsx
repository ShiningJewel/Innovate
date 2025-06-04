import React from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";
import TestimonialSlider from './TestimonialSlider';


const Testimonial = () => {
  return (
    <section className='py-[200px] bg-[#F4FAFA]'>
      <Container>
        <div className='flex'>
          <div>
            <div>
            <h1 className='w-[594px] font-secondary font-bold text-[46px] leading-[58px]'>What they are talking about us?</h1>
            <p className='w-[503px] font-primary font-regular text-paraColor text-lg leading-8 mt-5 mb-10'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
            <button className=' bg-secondary py-[20px] px-12 font-primary font-medium text-lg rounded-[6px] text-white'>Get Started</button>
          </div>
          <div>
            <div className='flex mt-[85px]'>
              <div className='relative'>
              <div className='absolute top-0 left-0 w-[58px] h-[58px] rounded-full border-[2px] border-[#FFFFFF] bg-[#C4C4C4]'></div>
              <div className='absolute top-0 left-[30px] w-[58px] h-[58px] rounded-full border-[2px] border-[#FFFFFF] bg-[#C4C4C4]'></div>
              <div className='absolute top-0 left-[60px] w-[58px] h-[58px] rounded-full border-[2px] border-[#FFFFFF] bg-[#C4C4C4]'></div>
              <div className='absolute top-0 left-[90px] w-[58px] h-[58px] rounded-full border-[2px] border-[#FFFFFF] bg-[#C4C4C4]'></div>

            </div>
            <div className=' flex flex-col ml-[200px]'>
              <div className='flex items-center'>
              <h3 className='w-[42px] font-secondary font-black text-primary text-2xl leading-9'>4.5</h3>
              <span className='w-[16px] text-[#DADBE2] '>|</span>
            <div className='flex text-[#FDB400] gap-x-[2px]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            </div>
              <p className='w-[153px] font-primary font-regular text-paraColor text-lg leading-8'>280k Total Review</p>
            </div>
            </div>
          </div>
          </div>
          <div>
            <TestimonialSlider/>    
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial
