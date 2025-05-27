import React from 'react'
import Container from '../Layout/Container'
import features from '../../assets/features.png'
import featuresicon1 from '../../assets/featuresicon1.png'
import featuresicon2 from '../../assets/featuresicon2.png'
import featuresicon3 from '../../assets/featuresicon3.png'
const Features = () => {
    return (
        <div className='pt-[160px]'>
            <Container>
                <div className='flex justify-between'>
                    <div>
                        <img src={features} alt="" />
                    </div>
                    <div>
                        <div>
                            <h3 className='w-[553px] font-secondary font-bold text-[46px] text-titleColor leading-[58px]'>We provide features for your Business</h3>
                            <div className='flex justify-between mt-[64px]'>
                                <div>
                                    <img src={featuresicon1} alt="#featuresicon1" />
                                    <h4 className='font-secondary font-bold text-[22px] leading-[32px] mt-[14px] mb-[6px]'>Fast and Easy to use</h4>
                                    <p className='w-[212px] font-primary text-paraColor font-regular text-lg leading-[32px]'>Easily to convert API with just a few clicks</p>
                                </div> 
                                <div>
                                    <img src={featuresicon2} alt="#featuresicon2" />
                                    <h4 className='font-secondary font-bold text-[22px] leading-[32px] mt-[14px] mb-[6px]'>Safely Security</h4>
                                    <p className='w-[212px] font-primary text-paraColor font-regular text-lg leading-[32px]'>All customer data is encrypted</p>
                                </div>
                            </div>                            
                            <div className='flex justify-between mt-[64px]'>
                                <div>
                                    <img src={featuresicon3} alt="#featuresicon3" />
                                    <h4 className='font-secondary font-bold text-[22px] leading-[32px] mt-[14px] mb-[6px]'>Get Organized</h4>
                                    <p className='w-[212px] font-primary text-paraColor font-regular text-lg leading-[32px]'>From lists to boards, organize work your way. </p>
                                </div> 
                                <div className='mt-[94px]'>
                                    <a className=' bg-secondary py-[20px] px-12 font-priamry font-medium text-lg rounded-[6px] text-white'>Get Started</a>
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
