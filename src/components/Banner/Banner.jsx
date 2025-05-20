import React from 'react'
import Container from '../Layout/Container'

const Banner = () => {
  return (
    <div className='bg-secondary py-[96px]'>
     <Container>
       <div className='text-center'>
        <h1 className='w-[796px] font-secondary font-bold text-[56px] leading-[64px] m-auto text-white'>Get your work done with Management Tool</h1>
        <p className='mt-5  w-[467px] font-primary font-regular text-lg leading-8 m-auto text-white'>The world's first project management platform that connects everything</p>
        <div className='relative mt-[32px]'>
          <input type="text" className=' w-[480px] py-6 pl-6 outline-0 rounded-[6px] bg-white placeholder:text-gray-500' placeholder="Your business email"/>
        <a className='absolute top-[5.5px] right-[472px] bg-primary rounded-[6px] font-primary text-lg font-medium py-[17px] px-12 text-[#2C2643]'>Try for free</a>
        </div>
       </div>
     </Container>
    </div>
  )
}

export default Banner
