import React from 'react'
import { FaStar } from 'react-icons/fa'
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };


  return (




    <div className='w-full max-w-[687px]'>
      <Slider {...settings}>
        <div className='relative pt-[107px] pl-[35px]'>
          <div className='relative pt-[64px] px-[60px] pb-[50px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-white'>
            <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] border-[10px] border-[#F7F7FC] rounded-full bg-[#C4C4C4]'></div>
            <div>
              <p className='w-[567px] font-primary font-regular text-[22px] leading-[44px] text-paraColor '>
                “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.
              </p>
            </div>
            <div className='flex justify-between items-end mt-[37px]'>
              <div>
                <h3 className='w-[567px] font-secondary font-bold text-2xl leading-9 text-titleColor pb-1'>Robert Fox</h3>
                <p className='w-[120px] font-primary font-regular text-base leading-[26px] text-paraColor'>Digital Marketer</p>
              </div>
              <div className='flex text-[#FDB400] gap-x-[2px]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </Slider>

    </div>



  )
}

export default TestimonialSlider
