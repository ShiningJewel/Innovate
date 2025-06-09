import React from 'react'
import Container from '../Layout/Container'
import bannerShape from '../../assets/bannerShape.png'
import laptopScreen from '../../assets/laptopScreen.png'

const Banner = () => {
  return (
    <section className='bg-cover bg-no-repeat bg-center pt-[195px] pb-[558px]'
      style={{
        backgroundImage: `url(${bannerShape})`
      }}>
      <Container>
        <div className='relative'>
          <div className='text-center '>
            <h1 className='w-auto md:w-[796px] m-auto font-secondary font-bold text-[33px] md:text-[56px] leading-[50px] md:leading-[64px] text-white'>Get your work done with Management Tool</h1>
            <p className='w-auto md:w-[467px] m-auto font-secondary font-regular text-lg leading-8 text-white mt-5 mb-8'>The world's first project management platform that connects everything</p>
            <div className='relative'>
              <input type="text" className='w-[480px] outline-0 bg-white rounded-[6px] placeholder:text-[#B4B6C4] font-secondary font-regular text-base leading-[26px] pl-6 py-5' placeholder='Your business email' />
              <a className='absolute top-[4px] right-[475px] bg-primary py-[15px] px-7 font-priamry font-medium text-lg rounded-[6px] text-[#2C2643]'>Try for free</a>
            </div>
          </div>
          <div className='absolute mt-[50px] '>
            <img src={laptopScreen} alt="#laptopscreen" className='w-full' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner
