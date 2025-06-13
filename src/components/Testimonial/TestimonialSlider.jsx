import React from 'react'
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <div
      className='w-[30px] h-[30px] md:w-[58px] md:h-[58px] bg-[#FAEAE8] rounded-full absolute top-[350px] left-[20px] md:top-[250px] md:left-[-4%]'
      onClick={onClick}
    />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='w-[30px] h-[30px] md:w-[58px] md:h-[58px] bg-[#FAEAE8] rounded-full absolute top-[350px] right-[20px] md:top-[250px] md:right-[-4%] z-[9999]'
      onClick={onClick}
    />
  );
}



const TestimonialSlider = () => {

   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (




    <div className='w-full max-w-[687px]'>
      
 <Slider {...settings}>
        <div>
              <div className=' pt-[107px] pb-[37px]'>
      <div className='ml-[20px] md:ml-0 w-[350px] h-[250px] md:w-[687px] md:h-[346px] relative bg-[#FFFFFF] pt-[40px] pb-[10px] md:pt-[64px] md:pb-[50px] md:px-[60px] justify-center rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]'>
        <div className='absolute top-[-50px] left-[40px] md:top-[-80px] md:left-[48px] border-[8px] md:border-[10px] border-[#F7F7FC] w-[80px] h-[80px] md:w-[124px] md:h-[124px] rounded-full bg-[#C4C4C4]'></div>
     <div className='ml-[15px] md:ml-0'>
          <p className='w-[330px] md:w-[567px] font-primary text-paraColor font-regular text-[12px] md:text-[22px] md:leading-[44px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.</p>
    <div className='mt-[20px] md:mt-[37px] flex justify-between items-end'>
      <div>
        <h4 className='w-auto md:w-[128px] font-secondary font-bold text-titleColor font-regular text-[14px] md:text-[22px] leading-[36px]'>Robert Fox</h4>
      <p className='w-auto md:w-[120px] font-primary text-paraColor font-regular text-[12px] md:text-[16px] leading-[26px] mt-[2px] md:mt-[4px]'>Digital Marketer</p>
      </div>
      <div className='mr-[10px] md:ml-0 flex items-center gapx-[1px] text-[#FFC34C]'>
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
        </div>
        <div>
              <div className=' pt-[107px] pb-[37px]'>
      <div className='ml-[20px] md:ml-0 w-[350px] h-[250px] md:w-[687px] md:h-[346px] relative bg-[#FFFFFF] pt-[40px] pb-[10px] md:pt-[64px] md:pb-[50px] md:px-[60px] justify-center rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]'>
        <div className='absolute top-[-50px] left-[40px] md:top-[-80px] md:left-[48px] border-[8px] md:border-[10px] border-[#F7F7FC] w-[80px] h-[80px] md:w-[124px] md:h-[124px] rounded-full bg-[#C4C4C4]'></div>
     <div className='ml-[15px] md:ml-0'>
          <p className='w-[330px] md:w-[567px] font-primary text-paraColor font-regular text-[12px] md:text-[22px] md:leading-[44px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.</p>
    <div className='mt-[20px] md:mt-[37px] flex justify-between items-end'>
      <div>
        <h4 className='w-auto md:w-[128px] font-secondary font-bold text-titleColor font-regular text-[14px] md:text-[22px] leading-[36px]'>Robert Fox</h4>
      <p className='w-auto md:w-[120px] font-primary text-paraColor font-regular text-[12px] md:text-[16px] leading-[26px] mt-[2px] md:mt-[4px]'>Digital Marketer</p>
      </div>
      <div className='mr-[10px] md:ml-0 flex items-center gapx-[1px] text-[#FFC34C]'>
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
        </div>
        <div>
              <div className=' pt-[107px] pb-[37px]'>
      <div className='ml-[20px] md:ml-0 w-[350px] h-[250px] md:w-[687px] md:h-[346px] relative bg-[#FFFFFF] pt-[40px] pb-[10px] md:pt-[64px] md:pb-[50px] md:px-[60px] justify-center rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]'>
        <div className='absolute top-[-50px] left-[40px] md:top-[-80px] md:left-[48px] border-[8px] md:border-[10px] border-[#F7F7FC] w-[80px] h-[80px] md:w-[124px] md:h-[124px] rounded-full bg-[#C4C4C4]'></div>
     <div className='ml-[15px] md:ml-0'>
          <p className='w-[330px] md:w-[567px] font-primary text-paraColor font-regular text-[12px] md:text-[22px] md:leading-[44px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.</p>
    <div className='mt-[20px] md:mt-[37px] flex justify-between items-end'>
      <div>
        <h4 className='w-auto md:w-[128px] font-secondary font-bold text-titleColor font-regular text-[14px] md:text-[22px] leading-[36px]'>Robert Fox</h4>
      <p className='w-auto md:w-[120px] font-primary text-paraColor font-regular text-[12px] md:text-[16px] leading-[26px] mt-[2px] md:mt-[4px]'>Digital Marketer</p>
      </div>
      <div className='mr-[10px] md:ml-0 flex items-center gapx-[1px] text-[#FFC34C]'>
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
        </div>
      </Slider>
    </div>
  )
}

export default TestimonialSlider
