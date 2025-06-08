import React from 'react'
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
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (




    <div className='w-full max-w-[687px]'>
      
 <Slider {...settings}>
        <div>
              <div className=' pt-[107px] pb-[37px]'>
      <div className='relative bg-[#FFFFFF] pt-[64px] pb-[50px] px-[60px] justify-center rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]'>
        <div className='absolute top-[-80px] left-[48px] border-[10px] border-[#F7F7FC] w-[124px] h-[124px] rounded-full bg-[#C4C4C4]'></div>
    <p className='w-[567px] font-primary text-paraColor font-regular text-[22px] leading-[44px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.</p>
    <div className='mt-[37px] flex justify-between items-end'>
      <div>
        <h4 className='w-[128px] font-secondary font-bold text-titleColor font-regular text-[22px] leading-[36px]'>Robert Fox</h4>
      <p className='w-[120px] font-primary text-paraColor font-regular text-[16px] leading-[26px] mt-[4px]'>Digital Marketer</p>
      </div>
      <div className='flex items-center gapx-[1px] text-[#FFC34C]'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
      </div>
    </div>
    </div>
    </div>
        </div>
        <div>
              <div className=' pt-[107px] pb-[37px]'>
      <div className='relative bg-[#FFFFFF] pt-[64px] pb-[50px] px-[60px] justify-center rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]'>
        <div className='absolute top-[-80px] left-[48px] border-[10px] border-[#F7F7FC] w-[124px] h-[124px] rounded-full bg-[#C4C4C4]'></div>
    <p className='w-[567px] font-primary text-paraColor font-regular text-[22px] leading-[44px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.</p>
    <div className='mt-[37px] flex justify-between items-end'>
      <div>
        <h4 className='w-[128px] font-secondary font-bold text-titleColor font-regular text-[22px] leading-[36px]'>Robert Fox</h4>
      <p className='w-[120px] font-primary text-paraColor font-regular text-[16px] leading-[26px] mt-[4px]'>Digital Marketer</p>
      </div>
      <div className='flex items-center gapx-[1px] text-[#FFC34C]'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
      </div>
    </div>
    </div>
    </div>
        </div>
        <div>
              <div className=' pt-[107px] pb-[37px]'>
      <div className='relative bg-[#FFFFFF] pt-[64px] pb-[50px] px-[60px] justify-center rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]'>
        <div className='absolute top-[-80px] left-[48px] border-[10px] border-[#F7F7FC] w-[124px] h-[124px] rounded-full bg-[#C4C4C4]'></div>
    <p className='w-[567px] font-primary text-paraColor font-regular text-[22px] leading-[44px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.</p>
    <div className='mt-[37px] flex justify-between items-end'>
      <div>
        <h4 className='w-[128px] font-secondary font-bold text-titleColor font-regular text-[22px] leading-[36px]'>Robert Fox</h4>
      <p className='w-[120px] font-primary text-paraColor font-regular text-[16px] leading-[26px] mt-[4px]'>Digital Marketer</p>
      </div>
      <div className='flex items-center gapx-[1px] text-[#FFC34C]'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
      </div>
    </div>
    </div>
    </div>
        </div>
      </Slider>
    </div>

  )
}

export default TestimonialSlider
