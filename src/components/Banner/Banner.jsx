import React from 'react'
import Container from '../Layout/Container'

const Banner = () => {
  return (
    <div className='bg-secondary py-[95px]'>
      <Container>
        <div className='text-center '>
          <h1 className='w-[796px] m-auto font-secondary font-bold text-[56px] leading-[64px] text-white'>Get your work done with Management Tool</h1>
          <p className='w-[467px] m-auto font-secondary font-regular text-lg leading-8 text-white mt-5 mb-8'>The world's first project management platform that connects everything</p>
          <div className='relative'>
            <input type="text" className='w-[480px] outline-0 bg-white rounded-[6px] placeholder:text-[#B4B6C4] font-secondary font-regular text-base leading-[26px] pl-6 py-5' placeholder='Your business email' />
             <a className='absolute top-[4px] right-[475px] bg-primary py-[15px] px-7 font-priamry font-medium text-lg rounded-[6px] text-[#2C2643]'>Try for free</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
