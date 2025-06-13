import React from 'react'
import Container from '../Layout/Container'
import features from '../../assets/features.png'
import featuresicon1 from '../../assets/featuresicon1.png'
import featuresicon2 from '../../assets/featuresicon2.png'
import featuresicon3 from '../../assets/featuresicon3.png'
const Features = () => {
    return (
        <div className='mt-[-70px] md:mt-0 md:pt-[160px]'>
            <Container>
                <div className='md:flex md:justify-between'>
                    <div>
                        <img src={features} alt="" />
                    </div>
                    <div>
                        <div>
                            <h3 className='w-[400px] md:w-[553px] font-secondary font-bold text-[24px] md:text-[46px] text-titleColor leading-[40px] md:leading-[58px] ml-[20px] md:ml-0'>We provide features for your Business</h3>
                            <div className='ml-[20px] md:ml-0'>
                                <div className='md:flex md:justify-between mt-[64px]'>
                                <div>
                                    <img src={featuresicon1} alt="#featuresicon1" />
                                    <h4 className='font-secondary font-bold md:text-[22px] md:leading-[32px] mt-[14px] mb-[6px]'>Fast and Easy to use</h4>
                                    <p className='w-auto md:w-[212px] font-primary text-paraColor font-regular md:text-lg md:leading-[32px]'>Easily to convert API with just a few clicks</p>
                                </div>
                                <div className='mt-[35px] md:mt-0'>
                                    <img src={featuresicon2} alt="#featuresicon2" />
                                    <h4 className='font-secondary font-bold md:text-[22px] md:leading-[32px] mt-[14px] mb-[6px]'>Safely Security</h4>
                                    <p className='w-auto md:w-[212px] font-primary text-paraColor font-regular md:text-lg md:leading-[32px]'>All customer data is encrypted</p>
                                </div>
                            </div>
                            <div className='md:flex md:justify-between mt-[40px] md:mt-[64px]'>
                                <div>
                                    <img src={featuresicon3} alt="#featuresicon3" />
                                    <h4 className='font-secondary font-bold md:text-[22px] md:leading-[32px] mt-[14px] mb-[6px]'>Get Organized</h4>
                                    <p className='w-auto md:w-[212px] font-primary text-paraColor font-regular md:text-lg md:leading-[32px]'>From lists to boards, organize work your way. </p>
                                </div>
                                <div className='ml-[45px] md:ml-0 mt-[50px] md:mt-[94px]'>
                                    <a className=' bg-secondary py-[10px] md:py-[20px] px-20 md:px-12 font-priamry font-medium text-lg rounded-[6px] text-white'>Get Started</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Features
