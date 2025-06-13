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
import intergrationshadow from '../../assets/intergrationshadow.png'

const Intergration = () => {
  return (
    <section className='mt-[50px] md:mt-0 pt-[1px] md:pt-[55px]  bg-[#F4FAFA]'>
      <Container>
        <div className='relative'>
          <div className='absolute bottom-[61px] left-[-156px]'>
            <img src={intergrationshadow} alt="" />
          </div>
         <div className='ml-[20px] md:ml-0 md:flex md:justify-between'>
           <div className='md:w-1/2 mt-[173px]'>
            <h4 className='font-primary font-medium text-[20px] md:text-xl text-[#FF7364]'>Integrations</h4>
            <h6 className='w-auto md:w-[587px] font-secondary font-bold text-[30px] md:text-[46px] md:leading-[58px] text-titleColor mt-[4px] mb-5 '>Easily integrate with your favorite apps</h6>
            <p  className='w-[360px] md:w-[533px] font-primary text-paraColor font-regular md:text-lg md:leading-[32px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
              <button className=' bg-secondary py-[20px] px-12 font-priamry font-medium text-lg rounded-[6px] text-white mt-7 md:mt-10'>Get Started</button>
          </div>
          <div>
            <div className='md:w-1/2 mt-[124px] mb-[120px]'>
            <div className='w-auto md:w-[752px] h-[544px] shadow-[0_0_0_rgba(0,0,0,0.25)]'>
            <div  className='flex md:justify-between'>
              <div className='flex justify-center items-center py-[30px] px-[35px] md:py-0 md:px-0 md:w-[332px] md:h-[143px] shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className='w-[90px] md:w-[202px] m-auto' src={frame1} alt="#frame1" />
              </div>
              <div className='py-[30px] px-[35px] ml-[30px] md:ml-0 md:py-0 md:px-0 md:w-[332px] md:h-[143px] flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className='w-[90px] md:w-auto m-auto' src={frame2} alt="#frame2" />
              </div>
            </div>
            <div className='flex md:justify-between mt-[35px] mb-[35px]'>
              <div className='md:w-[151px] md:h-[142px] py-[10px] px-[20px] md:py-0 md:px-0 flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className='w-[60px] md:w-auto m-auto' src={frame3} alt="#frame3" />
              </div>
              <div className='md:w-[332px] md:h-[142px] ml-[25px] md:ml-0 mr-[25px] md:mr-0 py-[10px] px-[20px] md:py-0 md:px-0 flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className='w-[60px] md:w-auto m-auto' src={frame4} alt="#frame4" />
              </div>
              <div className='md:w-[151px] md:h-[142px] py-[10px] px-[20px] md:py-0 md:px-0 flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className='w-[60px] md:w-auto m-auto' src={frame5} alt="#frame5" />
              </div>
            </div>
            <div className='flex md:justify-between mb-0'>
              <div className='md:w-[290px] md:h-[142px] py-[10px] px-[15px] md:py-0 md:px-0 flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white mb-0'>
                <img className='w-[60px] md:w-auto m-auto' src={frame6} alt="#frame6" />
              </div>
              <div className='md:w-[190px] md:h-[142px] py-[10px] px-[15px] md:py-0 md:px-0 ml-[25px] md:ml-0 mr-[25px] md:mr-0 flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className='w-[60px] md:w-auto m-auto' src={frame7} alt="#frame7" />
              </div>
              <div className='md:w-[196px] md:h-[142px] py-[10px] px-[15px] md:py-0 md:px-0 flex justify-center items-center shadow-[0px_0px_0px_rgba(0,0,0,0.25)] bg-white'>
                <img className='w-[90px] md:w-auto  m-auto' src={frame8} alt="#frame8" />
              </div>
            </div>
          </div>
          </div>
          </div>
         </div>
        </div>
      </Container>
    </section>
  )
}

export default Intergration
