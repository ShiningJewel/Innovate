import React from 'react'
import Container from '../Layout/Container'
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import frame3 from '../../assets/frame3.png'
import frame4 from '../../assets/frame4.png'
import frame5 from '../../assets/frame5.png'
import frame6 from '../../assets/frame6.png'
import frame7 from '../../assets/frame7.png'
import frame8 from '../../assets/frame8.png'

const Testimonial = () => {
  return (
    <section className='pt-[55px] pb-[300px]  bg-[#F4FAFA]'>
      <Container>
        <div className='pt-[124px] '>
         <div className='flex justify-between'>
           <div>
            <h4 className='font-primary font-medium text-xl text-[#FF7364]'>Integrations</h4>
            <h6 className='w-[587px] font-secondary font-bold text-[46px] leading-[58px] text-titleColor mt-[4px] mb-5 '>Easily integrate with your favorite apps</h6>
            <p  className='w-[533px] font-primary text-paraColor font-regular text-lg leading-[32px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
              <button className=' bg-secondary py-[20px] px-12 font-priamry font-medium text-lg rounded-[6px] text-white mt-10'>Get Started</button>
          </div>
          <div className='w-[752px] h-[544px] shadow-[px_4px_4px_rgba(0,0,0,0.25)]'>
            <div  className='flex justify-between'>
              <div className='flex justify-center items-center w-[332px] h-[143px] shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className=' w-[202px] m-auto' src={frame1} alt="#frame1" />
              </div>
              <div className='w-[332px] h-[143px] flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className=' m-auto' src={frame2} alt="#frame2" />
              </div>
            </div>
            <div className='flex justify-between mt-[35px] mb-[35px]'>
              <div className='w-[151px] h-[142px] flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className=' m-auto' src={frame3} alt="#frame3" />
              </div>
              <div className='w-[332px] h-[142px] flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className=' m-auto' src={frame4} alt="#frame4" />
              </div>
              <div className='w-[151px] h-[142px] flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className=' m-auto' src={frame5} alt="#frame5" />
              </div>
            </div>
            <div className='flex justify-between mb-0'>
              <div className='w-[290px] h-[142px] flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white mb-0'>
                <img className=' m-auto' src={frame6} alt="#frame6" />
              </div>
              <div className='w-[190px] h-[142px] flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className=' m-auto' src={frame7} alt="#frame7" />
              </div>
              <div className='w-[196px] h-[142px] flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className='  m-auto' src={frame8} alt="#frame8" />
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
