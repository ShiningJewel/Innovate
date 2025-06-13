import React from 'react'
import Container from '../Layout/Container'
import bannerShape from '../../assets/bannerShape.png'
import laptopScreen from '../../assets/laptopScreen.png'

const Banner = () => {
  return (
    <section className='bg-cover bg-no-repeat bg-center pt-[110px] md:pt-[195px] pb-[175px] md:pb-[558px]'
      style={{
        backgroundImage: `url(${bannerShape})`
      }}>
      <Container>
        <div className='relative'>
          <div className='text-center '>
            <h1 className='w-[340px] md:w-[796px] m-auto font-secondary font-bold text-[35px] md:text-[56px] leading-[45px] md:leading-[64px] text-white'>Get your work done with Management Tool</h1>
            <p className='w-[350px] md:w-[467px] m-auto font-secondary text-center font-regular md:text-lg leading-8 text-white mt-5 mb-8'>The world's first project management platform that connects everything</p>
            <div className='relative'>
              <input type="text" className='w-[320px] md:w-[480px] outline-0 bg-white rounded-[6px] placeholder:text-[#B4B6C4] font-secondary font-regular text-[14px] md:text-base leading-[26px] pl-3 md:pl-6 py-3 md:py-5' placeholder='Your business email' />
              <div>
                <a className='mt-[20px] md:mt-0 absolute top-[-18px] right-10 md:top-[4px] md:right-[475px] bg-primary py-[9px] md:py-[15px] px-7 font-priamry font-medium text-lg rounded-[6px] text-[#2C2643] inline-block'>Try for free</a>
              </div>
            </div>
          </div>
          <div className='absolute top-[300px] left-[-20px] translate-[-12px] mt-[50px] '>
            <img src={laptopScreen} alt="#laptopscreen" className='w-full' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner
