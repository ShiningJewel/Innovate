import React from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";


const Testimonial = () => {
  return (
    <section className='py-[200px] bg-[#F4FAFA]'>
      <Container>
        <div className='flex'>
          <div>
            <div>
            <h1 className='w-[594px] font-secondary font-bold text-[46px] leading-[58px]'>What they are talking about us?</h1>
            <p className='w-[503px] font-primary font-regular text-paraColor text-lg leading-8 mt-5 mb-10'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
            <button className=' bg-secondary py-[20px] px-12 font-priamry font-medium text-lg rounded-[6px] text-white'>Get Started</button>
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
          <div className='pt-[107px] pl-[35px]'>
            <div className='relative pt-[64px] px-[60px] pb-[50px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-white'>
              <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] border-[10px] border-[#F7F7FC] rounded-full bg-[#C4C4C4]'></div>
              <div>
                <p className='w-[567px] font-primary font-regular text-[22px] leading-[44px] text-paraColor pb-9'>
                  “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. 
                </p>
              </div>
              <div className='flex items-end'>
               <div>
                 <h3 className='w-[567px] font-secondary font-bold text-2xl leading-9 text-titleColor pb-1'>Robert Fox</h3>
                <p className='w-[120px] font-primary font-regular text-base leading-[26px] text-paraColor'>Digital Marketer</p>
               </div>
               <div className='flex text-[#FDB400] gap-x-[2px]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial
