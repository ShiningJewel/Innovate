import React from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}



const TestimonialSlider = () => {

   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className='w-full max-w-[687px]'>
       <Slider {...settings}>
        <div className='pt-[107px] pl-[35px]'>
          <div className='relative pt-[64px] w-[687px] px-[60px] items-center pb-[50px] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] bg-[#FFFFFF]'>
         <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] border-[10px] border-[#F7F7FC]'></div>
        <div className=''>
          <p className='w-[567px] m-auto font-primary font-regular text-paraColor text-[22px] leading-[44px] '>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
        </div>
        <div className='mt-[37px] flex justify-between items-end'>
         <div>
           <h4 className='w-[128px] font-secondary font-bold text-2xl text-titleColor leading-9 mb-1'>Robert Fox</h4>
          <p className='w-[120px] font-primary font-regular text-base leading-[26px] text-paraColor'>Digital Marketer</p>
         </div>
         <div className='flex text-[#FFC34C] gap-x-1'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
         </div>
        </div>
      </div>
        </div>
        <div className='pt-[107px] pl-[35px]'>
          <div className='relative pt-[64px] w-[687px] px-[60px] items-center pb-[50px] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] bg-[#FFFFFF]'>
         <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] border-[10px] border-[#F7F7FC]'></div>
        <div className=''>
          <p className='w-[567px] m-auto font-primary font-regular text-paraColor text-[22px] leading-[44px] '>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
        </div>
        <div className='mt-[37px] flex justify-between items-end'>
         <div>
           <h4 className='w-[128px] font-secondary font-bold text-2xl text-titleColor leading-9 mb-1'>Robert Fox</h4>
          <p className='w-[120px] font-primary font-regular text-base leading-[26px] text-paraColor'>Digital Marketer</p>
         </div>
         <div className='flex text-[#FFC34C] gap-x-1'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
         </div>
        </div>
      </div>
        </div>
        <div className='pt-[107px] pl-[35px]'>
          <div className='relative pt-[64px] w-[687px] px-[60px] items-center pb-[50px] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] bg-[#FFFFFF]'>
         <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] border-[10px] border-[#F7F7FC]'></div>
        <div className=''>
          <p className='w-[567px] m-auto font-primary font-regular text-paraColor text-[22px] leading-[44px] '>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
        </div>
        <div className='mt-[37px] flex justify-between items-end'>
         <div>
           <h4 className='w-[128px] font-secondary font-bold text-2xl text-titleColor leading-9 mb-1'>Robert Fox</h4>
          <p className='w-[120px] font-primary font-regular text-base leading-[26px] text-paraColor'>Digital Marketer</p>
         </div>
         <div className='flex text-[#FFC34C] gap-x-1'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
         </div>
        </div>
      </div>
        </div>

      </Slider>
    </div>
  )
}

export default TestimonialSlider
