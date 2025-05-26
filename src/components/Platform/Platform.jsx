import React from 'react'
import Container from '../Layout/Container'
import platformicon1 from '../../assets/platformicon1.png'
import platformicon2 from '../../assets/platformicon2.png'
import platformicon3 from '../../assets/platformicon3.png'
const Platform = () => {

  const platformData = [
    {
      img: platformicon1,
      title: "Login or sign up to be able use our platform",
      description: `This quickstart shows you how to use Identity Platform to sign in a user with an email and password.`
    },
    {
      img: platformicon2,
      title: "Connect your website with just a few click",
      description: `Once your website is online, you can configure it, I will show you how to put your website online`
    },
    {
      img: platformicon3,
      title: "Take some sales data that you want",
      description: `Sell your data directly: The most straightforward method is to sell your data directly to another`
    }
  ]
  
  return (
    <div className='pt-[439px] pb-[160px]'>
      <Container>
        <div className='px-[60px]'>
        <div className='flex justify-between'>
          <h3 className='w-[504px] font-secnodary text-titleColor font-bold text-[46px] leading-[58px]'>How simple is it to use our platform?</h3>
          <p className='w-[530px] font-primary text-paraColor font-regular text-lg leading-[32px]'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
        </div>
        <div className='flex justify-between'>

        {
          platformData.map((item)=>(
            <div className='w-[300px] flex flex-col text-center pt-[116px]'>
              <img className='w-[110px] m-auto' src={item.img} alt="#platformicon1" />
              <h3  className='w-[300px] font-secondary font-bold text-2xl text-titleColor leading-9 pt-[26px] pb-3'>{item.title}</h3>
            <p className='w-[300px] font-primary text-paraColor font-regular text-lg leading-[32px]'>{item.description} </p>
            </div>
          ))
        }



          {/* <div className='w-[300px] flex flex-col text-center'>
            <img className='w-[110px] m-auto' src={platformicon1} alt="#platformicon1" />
            <h3 className='w-[300px] font-secondary font-bold text-2xl text-titleColor leading-9 pt-[26px] pb-3'>Login or sign up to be able use our platform</h3>
            <p className='w-[300px] font-primary text-paraColor font-regular text-lg leading-[32px]'>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
          </div>
          <div className='w-[300px] flex flex-col text-center'>
            <img className='w-[110px] m-auto' src={platformicon2} alt="#platformicon1" />
            <h3 className='w-[300px] font-secondary font-bold text-2xl text-titleColor leading-9 pt-[26px] pb-3'>Connect your website with just a few click</h3>
            <p className='w-[300px] font-primary text-paraColor font-regular text-lg leading-[32px]'>Once your website is online, you can configure it, I will show you how to put your website online </p>
          </div>
          <div className='w-[300px] flex flex-col text-center'>
            <img className='w-[110px] m-auto' src={platformicon3} alt="#platformicon1" />
            <h3 className='w-[300px] font-secondary font-bold text-2xl text-titleColor leading-9 pt-[26px] pb-3'>Take some sales data that you want</h3>
            <p className='w-[300px] font-primary text-paraColor font-regular text-lg leading-[32px]'>Sell your data directly: The most straightforward method is to sell your data directly to another</p>
          </div> */}
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Platform
