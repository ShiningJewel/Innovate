import React from 'react'
import Container from '../Layout/Container'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const OurServices = () => {
  return (
    <section   className='mt-[-30px] md-mt-0 md:pt-[140px]'>
      <Container>
        <div>
        <div className=' flex flex-col text-center justify-center'>
            <p className='w-auto md:w-[121px] m-auto font-primary text-[#FF7364] font-medium text-[14px] md:text-xl'>Our Services</p>
              <h3  className='w-auto md:w-[304px] m-auto font-secondary font-bold text-[30px] md:text-[46px] leading-[58px] text-titleColor '>How It Works</h3>
            </div>
            <div  className='mt-[80px] ml-[30px] md:ml-0 md:flex justify-between'>
            <div>
              <div className='py-[36px] w-[330px] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] md:bg-white bg-secondary group md:hover:bg-secondary transition-all duration-500'>
                <div className='ml-[26px] relative flex justify-center items-center w-[92px] h-[92px] rounded-full bg-white md:bg-[#FAEAE8] md:group-hover:text-white transition-all duration-500'>
                  {/* <img className='absolute w-[50px]' src={card1} alt="#card1" /> */}
                  
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_714)">
<path d="M49.2188 9.375C49.2188 8.08281 48.1672 7.03125 46.875 7.03125H8.59375V4.6875C8.59375 2.53359 6.84141 0.78125 4.6875 0.78125C2.53359 0.78125 0.78125 2.53359 0.78125 4.6875V22.0172L2.90078 27.668C3.08203 28.1516 3.45234 28.5273 3.90625 28.7328V39.8438H21.875V44.5312H17.1875C15.4641 44.5312 14.0625 45.9328 14.0625 47.6562V49.2188H37.5V47.6562C37.5 45.9328 36.0984 44.5312 34.375 44.5312H29.6875V39.8438H47.6562V11.7188H49.2188V9.375ZM7.03125 21.0938H5.46875V7.03125H7.03125V21.0938ZM2.34375 21.0938V7.03125H3.90625V21.0938H2.34375ZM4.6875 2.34375C5.97969 2.34375 7.03125 3.39531 7.03125 4.6875V5.46875H2.34375V4.6875C2.34375 3.39531 3.39531 2.34375 4.6875 2.34375ZM2.68984 22.6562H6.68516L5.0125 27.1188C4.91016 27.3875 4.46406 27.3875 4.36328 27.1188L2.68984 22.6562ZM35.9375 47.6562H15.625C15.625 46.7945 16.3258 46.0938 17.1875 46.0938H34.375C35.2367 46.0938 35.9375 46.7945 35.9375 47.6562ZM28.125 44.5312H23.4375V39.8438H28.125V44.5312ZM46.0938 38.2812H5.46875V28.7336C5.92266 28.5281 6.29297 28.1516 6.47422 27.6688L8.59375 22.0172V11.7188H46.0938V38.2812ZM47.6562 10.1562H8.59375V8.59375H46.875C47.3063 8.59375 47.6562 8.94375 47.6562 9.375V10.1562Z" fill="#FF7364" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M24.2188 25.6375V35.1562H29.6875C29.6875 36.018 30.3883 36.7188 31.25 36.7188H39.0625C39.9242 36.7188 40.625 36.018 40.625 35.1562V33.5938C40.625 32.732 39.9242 32.0312 39.0625 32.0312H35.9375V30.4688H44.5312V14.8438H41.4062V13.2812H28.9062V14.8438H24.2188V21.2375C23.3117 21.5609 22.6562 22.4203 22.6562 23.4375C22.6562 24.4547 23.3117 25.3141 24.2188 25.6375ZM39.0641 35.1562H31.25V33.5938H39.0625L39.0641 35.1562ZM31.25 32.0312C30.3883 32.0312 29.6875 32.732 29.6875 33.5938H25.7812V25.6375C26.443 25.4016 26.9641 24.8805 27.2 24.2188H30.232L34.375 26.9805V32.0312H31.25ZM35.1562 21.2516L38.4352 23.4375L35.1562 25.6234L31.8773 23.4375L35.1562 21.2516ZM42.9688 16.4062V28.9062H35.9375V26.9805L41.2523 23.4375L35.9375 19.8945V17.9688H41.4062V16.4062H42.9688ZM30.4688 14.8438H39.8438V16.4062H30.4688V14.8438ZM28.9062 16.4062V17.9688H34.375V19.8945L30.232 22.6562H27.2C26.9641 21.9945 26.443 21.4734 25.7812 21.2375V16.4062H28.9062ZM25 22.6562C25.4313 22.6562 25.7812 23.0063 25.7812 23.4375C25.7812 23.8687 25.4313 24.2188 25 24.2188C24.5688 24.2188 24.2188 23.8687 24.2188 23.4375C24.2188 23.0063 24.5688 22.6562 25 22.6562Z" fill="#FF7364"
className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M10.1562 13.2812H21.0938V14.8438H10.1562V13.2812Z" fill="#FF7364" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M18.75 16.4062H21.0938V17.9688H18.75V16.4062Z" fill="#FF7364" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M10.1562 16.4062H17.1875V17.9688H10.1562V16.4062Z" fill="#FF7364"
className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M10.1562 19.5312H21.0938V21.0938H10.1562V19.5312Z" fill="#FF7364"
className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M10.1562 22.6562H21.0938V24.2188H10.1562V22.6562Z" fill="#FF7364" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M8.59375 36.7188H21.0938V25.7812H8.59375V36.7188ZM10.1562 27.3438H19.5312V35.1562H10.1562V27.3438Z" fill="#FF7364" className='md:group-hover:fill-secondary transition-all duration-500'/>
</g>
<defs>
<clipPath id="clip0_3_714">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>

                </div>
                <div className='justify-center ml-[26px]'>
                  <h3  className='w-[258px] font-secondary font-bold text-[22px] text-white md:text-titleColor md:group-hover:text-white transition-all duration-500 leading[34px] mt-[26px]'>Plan Product Roadmap</h3>
                  <p className='w-[258px] font-primary md:text-paraColor text-white md:group-hover:text-white transition-all duration-500 font-regular text-[16px] leading-[26px] mt-[8px] mb-[26px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                  <h6 className='flex w-[258px] items-center font-primary text-white md:text-secondary md:group-hover:text-white transition-all duration-500 font-medium text-[16px] leading-[26px] mb-[26px]'>Read More <span className='ml-[4px]'><FaLongArrowAltRight /></span> </h6>
                </div>
              </div>
            </div>
            <div>
              <div className='py-[36px] w-[330px] mt-[20px] md:mt-0 mb-[20px] md:mb-0 rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] bg-[#3639A4] md:bg-white group hover:bg-secondary transition-all duration-500'>
                <div className='ml-[26px] relative flex justify-center items-center w-[92px] h-[92px] rounded-full bg-white md:bg-[#FAEAE8] group-hover:text-white transition-all duration-500'>
                  {/* <img className='absolute w-[50px]' src={card2} alt="#card2" /> */}
                  

<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.2843 30.3947C44.7419 30.8524 44.7419 31.5943 44.2843 32.052L37.712 38.6243C37.4923 38.844 37.1941 38.9676 36.8834 38.9676C36.5726 38.9676 36.2745 38.8441 36.0548 38.6243L32.0598 34.6294C31.6022 34.1717 31.6022 33.4298 32.0598 32.9721C32.5176 32.5144 33.2596 32.5144 33.7172 32.9721L36.8834 36.1384L42.627 30.3947C43.0847 29.9372 43.8266 29.9371 44.2843 30.3947V30.3947ZM50 34.5095C50 41.0314 44.694 46.3374 38.1721 46.3374C36.9751 46.3374 35.8194 46.1581 34.7297 45.8259C29.7837 48.2583 24.7735 49.4861 19.8069 49.4861C19.1002 49.4861 18.395 49.4613 17.6903 49.4116C12.0159 49.0109 6.28388 46.984 0.653512 43.3868C0.350192 43.1931 0.152731 42.8705 0.118063 42.5122C-0.358304 37.5931 0.64111 32.7939 2.93242 28.9989C5.11044 25.3913 8.35351 22.7678 12.3827 21.3294C10.8049 19.4542 9.69492 17.2557 9.14872 14.8955C8.52206 12.1874 8.69794 9.40478 9.64384 7.06025C11.2951 2.96787 15.0111 0.581445 19.8392 0.512891L19.8559 0.512695L19.8725 0.512891C24.7006 0.581543 28.4166 2.96797 30.0678 7.06035C31.0138 9.40478 31.1895 12.1874 30.5629 14.8955C30.0167 17.2559 28.9065 19.4546 27.3284 21.33C29.2279 22.0074 30.9537 22.9486 32.483 24.1423C34.172 23.2118 36.111 22.6815 38.1719 22.6815C44.694 22.6814 50 27.9875 50 34.5095V34.5095ZM15.0054 20.7235C16.6413 22.346 18.2732 23.1686 19.8559 23.1686C21.4385 23.1686 23.0704 22.346 24.7062 20.7235C28.2164 17.2425 29.5274 11.9846 27.8943 7.93711C26.5965 4.72051 23.7422 2.9166 19.8559 2.85644C15.9694 2.9166 13.1151 4.72051 11.8173 7.93711C10.1843 11.9847 11.4952 17.2426 15.0054 20.7235ZM31.9162 44.5431C28.5727 42.451 26.344 38.7358 26.344 34.5095C26.344 30.9339 27.939 27.7239 30.4547 25.5532C28.9838 24.5145 27.3165 23.7243 25.4768 23.1944C23.6556 24.7331 21.7689 25.5125 19.8559 25.5125C17.9428 25.5125 16.0562 24.7331 14.2349 23.1945C6.32177 25.4804 1.73613 32.6524 2.40244 41.7189C12.3168 47.8865 21.9964 48.8159 31.9162 44.5431V44.5431ZM47.6562 34.5095C47.6562 29.2799 43.4016 25.0252 38.1721 25.0252C32.9425 25.0252 28.6878 29.2798 28.6878 34.5095C28.6878 39.7392 32.9424 43.9936 38.1721 43.9936C43.4017 43.9936 47.6562 39.7391 47.6562 34.5095V34.5095Z" fill="#3639A4" className='md:group-hover:fill-secondary transition-all duration-500'/>
</svg>


                </div>
                <div className='justify-center ml-[26px]'>
                  <h3  className='w-[258px] font-secondary font-bold text-[22px] text-white md:text-titleColor group-hover:text-white transition-all duration-500 leading[34px] mt-[26px]'>Plan Product Roadmap</h3>
                  <p className='w-[258px] font-primary text-white md:text-paraColor group-hover:text-white transition-all duration-500 font-regular text-[16px] leading-[26px] mt-[8px] mb-[26px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                  <h6 className='flex w-[258px] items-center font-primary text-white md:text-secondary group-hover:text-white transition-all duration-500 font-medium text-[16px] leading-[26px] mb-[26px]'>Read More <span className='ml-[4px]'><FaLongArrowAltRight /></span> </h6>
                </div>
              </div>
            </div>
            <div>
              <div className='py-[36px] w-[330px] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]  bg-[#3639A4] md:bg-white group hover:bg-secondary transition-all duration-500'>
                <div className='ml-[26px] relative flex justify-center items-center w-[92px] h-[92px] rounded-full bg-white md:bg-[#FAEAE8] group-hover:text-white transition-all duration-500'>
                  {/* <img className='absolute w-[50px]' src={card3} alt="#card3" /> */}
                  


<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.9519 2.58887H37.5299C37.1254 2.58887 36.7975 2.9168 36.7975 3.32129C36.7975 3.72578 37.1254 4.05371 37.5299 4.05371H46.9519C47.8249 4.05371 48.5352 4.76396 48.5352 5.63701V33.4665H1.46484V5.63701C1.46484 4.76396 2.1751 4.05371 3.04814 4.05371H34.1118C34.5163 4.05371 34.8442 3.72578 34.8442 3.32129C34.8442 2.9168 34.5163 2.58887 34.1118 2.58887H3.04814C1.36738 2.58887 0 3.95625 0 5.63701V35.7895C0 37.4702 1.36738 38.8376 3.04814 38.8376H10.06C10.4645 38.8376 10.7924 38.5097 10.7924 38.1052C10.7924 37.7007 10.4645 37.3728 10.06 37.3728H3.04814C2.1751 37.3728 1.46484 36.6625 1.46484 35.7895V34.9314H48.5352V35.7895C48.5352 36.6625 47.8249 37.3728 46.9519 37.3728H13.4457C13.0412 37.3728 12.7133 37.7007 12.7133 38.1052C12.7133 38.5097 13.0412 38.8376 13.4457 38.8376H18.0555L17.3323 43.0168H15.9958C14.7842 43.0168 13.7985 44.0024 13.7985 45.2141C13.7985 46.4257 14.7842 47.4113 15.9958 47.4113H34.0042C35.2158 47.4113 36.2015 46.4257 36.2015 45.2141C36.2015 44.0024 35.2158 43.0168 34.0042 43.0168H32.6677L31.9445 38.8376H46.9518C48.6325 38.8376 49.9999 37.4702 49.9999 35.7895V5.63701C50 3.95625 48.6326 2.58887 46.9519 2.58887ZM31.1811 43.0168H29.1871C28.7826 43.0168 28.4547 43.3447 28.4547 43.7492C28.4547 44.1537 28.7826 44.4816 29.1871 44.4816H34.0042C34.4081 44.4816 34.7366 44.8102 34.7366 45.2141C34.7366 45.618 34.4081 45.9465 34.0042 45.9465H15.9958C15.5919 45.9465 15.2634 45.618 15.2634 45.2141C15.2634 44.8102 15.5919 44.4816 15.9958 44.4816H25.768C26.1725 44.4816 26.5004 44.1537 26.5004 43.7492C26.5004 43.3447 26.1725 43.0168 25.768 43.0168H18.8189L19.5421 38.8376H30.458L31.1811 43.0168Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M39.621 21.1208C39.3454 21.1208 39.0932 21.2755 38.9682 21.5211L35.5117 28.3146L32.5949 22.5817C32.4699 22.3361 32.2177 22.1814 31.9421 22.1814C31.6665 22.1814 31.4143 22.3361 31.2893 22.5817L29.7081 25.6894H27.1836C26.7791 25.6894 26.4512 26.0173 26.4512 26.4218C26.4512 26.8263 26.7791 27.1542 27.1836 27.1542H30.1572C30.4328 27.1542 30.6851 26.9996 30.8101 26.754L31.9421 24.5291L34.8589 30.262C34.9839 30.5076 35.2361 30.6623 35.5117 30.6623C35.7873 30.6623 36.0396 30.5076 36.1646 30.262L39.621 23.4685L41.2926 26.7541C41.4176 26.9997 41.6698 27.1543 41.9454 27.1543H44.919C45.3235 27.1543 45.6515 26.8264 45.6515 26.4219C45.6515 26.0174 45.3235 25.6895 44.919 25.6895H42.3945L40.2738 21.5212C40.1488 21.2755 39.8966 21.1208 39.621 21.1208Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M27.1836 18.9511H30.9843C31.3888 18.9511 31.7167 18.6231 31.7167 18.2187V10.5083C31.7167 10.1038 31.3888 9.77588 30.9843 9.77588H27.1836C26.7791 9.77588 26.4512 10.1038 26.4512 10.5083V18.2187C26.4512 18.6231 26.7791 18.9511 27.1836 18.9511ZM27.916 11.2407H30.2519V17.4862H27.916V11.2407Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M37.9784 11.8711H34.1777C33.7732 11.8711 33.4453 12.199 33.4453 12.6035V18.2187C33.4453 18.6231 33.7732 18.9511 34.1777 18.9511H37.9784C38.3829 18.9511 38.7108 18.6231 38.7108 18.2187V12.6035C38.7108 12.199 38.3829 11.8711 37.9784 11.8711ZM37.246 17.4862H34.9102V13.3359H37.246V17.4862Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M44.9198 18.9511C45.3243 18.9511 45.6522 18.6231 45.6522 18.2187V8.5752C45.6522 8.1707 45.3243 7.84277 44.9198 7.84277H41.1191C40.7146 7.84277 40.3867 8.1707 40.3867 8.5752V18.2187C40.3867 18.6231 40.7146 18.9511 41.1191 18.9511H44.9198ZM41.8516 9.30762H44.1874V17.4862H41.8516V9.30762Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M21.6699 16.1282H5.06836C4.66387 16.1282 4.33594 16.4561 4.33594 16.8606C4.33594 17.2651 4.66387 17.593 5.06836 17.593H21.6699C22.0744 17.593 22.4023 17.2651 22.4023 16.8606C22.4023 16.4561 22.0744 16.1282 21.6699 16.1282Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M5.06836 21.4839H8.03926C8.44375 21.4839 8.77168 21.156 8.77168 20.7515C8.77168 20.347 8.44375 20.019 8.03926 20.019H5.06836C4.66387 20.019 4.33594 20.347 4.33594 20.7515C4.33594 21.156 4.66387 21.4839 5.06836 21.4839Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M21.6692 20.019H11.3945C10.99 20.019 10.6621 20.347 10.6621 20.7515C10.6621 21.156 10.99 21.4839 11.3945 21.4839H21.6692C22.0737 21.4839 22.4017 21.156 22.4017 20.7515C22.4017 20.347 22.0737 20.019 21.6692 20.019Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M21.6699 7.84277H5.06836C4.66387 7.84277 4.33594 8.1707 4.33594 8.5752C4.33594 8.97969 4.66387 9.30762 5.06836 9.30762H21.6699C22.0744 9.30762 22.4023 8.97969 22.4023 8.5752C22.4023 8.1707 22.0744 7.84277 21.6699 7.84277Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M5.06836 13.1985H15.3635C15.768 13.1985 16.0959 12.8706 16.0959 12.4661C16.0959 12.0616 15.768 11.7336 15.3635 11.7336H5.06836C4.66387 11.7336 4.33594 12.0616 4.33594 12.4661C4.33594 12.8706 4.66387 13.1985 5.06836 13.1985Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M21.6692 11.7336H18.7187C18.3143 11.7336 17.9863 12.0616 17.9863 12.4661C17.9863 12.8706 18.3143 13.1985 18.7187 13.1985H21.6692C22.0737 13.1985 22.4017 12.8706 22.4017 12.4661C22.4017 12.0616 22.0737 11.7336 21.6692 11.7336Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M22.4023 24.595C22.4023 24.1905 22.0744 23.8625 21.6699 23.8625H5.06836C4.66387 23.8625 4.33594 24.1905 4.33594 24.595C4.33594 24.9995 4.66387 25.3274 5.06836 25.3274H21.6699C22.0744 25.3274 22.4023 24.9995 22.4023 24.595Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
<path d="M5.06836 27.7327C4.66387 27.7327 4.33594 28.0606 4.33594 28.4651C4.33594 28.8696 4.66387 29.1975 5.06836 29.1975H12.8809C13.2854 29.1975 13.6133 28.8696 13.6133 28.4651C13.6133 28.0606 13.2854 27.7327 12.8809 27.7327H5.06836Z" fill="#28AE61" className='md:group-hover:fill-secondary transition-all duration-500'/>
</svg>



                </div>
                <div className='justify-center ml-[26px]'>
                  <h3  className='w-[258px] font-secondary font-bold text-[22px] text-white  md:text-titleColor group-hover:text-white transition-all duration-500 leading[34px] mt-[26px]'>Plan Product Roadmap</h3>
                  <p className='w-[258px] font-primary text-white md:text-paraColor group-hover:text-white transition-all duration-500 font-regular text-[16px] leading-[26px] mt-[8px] mb-[26px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                  <h6 className='flex w-[258px] items-center font-primary text-white md:text-secondary group-hover:text-white transition-all duration-500 font-medium text-[16px] leading-[26px] mb-[26px]'>Read More <span className='ml-[4px]'><FaLongArrowAltRight /></span> </h6>
                </div>
              </div>
            </div>
            <div>
              <div className='py-[36px] w-[330px] mt-[20px] md:mt-0 rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] bg-[#3639A4] md:bg-white group hover:bg-secondary transition-all duration-500'>
                <div className='ml-[26px] relative flex justify-center items-center w-[92px] h-[92px] rounded-full bg-white md:bg-[#FAEAE8] group-hover:text-white transition-all duration-500'>
                  {/* <img className='absolute w-[50px]' src={card4} alt="#card4" /> */}
                  

<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5188 28.75C9.69844 28.3539 8.78281 28.125 7.8125 28.125C4.36641 28.125 1.5625 30.9289 1.5625 34.375C1.5625 37.8211 4.36641 40.625 7.8125 40.625C9.975 40.625 11.8836 39.5203 13.0063 37.8461L18.9102 40.8016C18.8086 41.2477 18.75 41.7109 18.75 42.1875C18.75 45.6336 21.5539 48.4375 25 48.4375C28.4461 48.4375 31.25 45.6336 31.25 42.1875C31.25 40.8922 30.8539 39.6883 30.1758 38.6891L38.4719 30.0148C39.5125 30.7867 40.7953 31.25 42.1875 31.25C45.6336 31.25 48.4375 28.4461 48.4375 25C48.4375 21.5539 45.6336 18.75 42.1875 18.75C40.7453 18.75 39.4203 19.2453 38.3609 20.0688L29.9312 11.6391C30.7547 10.5797 31.25 9.25469 31.25 7.8125C31.25 4.36641 28.4461 1.5625 25 1.5625C21.5539 1.5625 18.75 4.36641 18.75 7.8125C18.75 8.2875 18.8078 8.74922 18.9094 9.19453L13.3687 11.2133C12.3297 9.19687 10.232 7.8125 7.8125 7.8125C4.36641 7.8125 1.5625 10.6164 1.5625 14.0625C1.5625 17.5086 4.36641 20.3125 7.8125 20.3125C8.70156 20.3125 9.54609 20.1234 10.3125 19.7867L13.1883 24.6266L10.5188 28.75ZM7.8125 39.0625C5.22734 39.0625 3.125 36.9602 3.125 34.375C3.125 31.7898 5.22734 29.6875 7.8125 29.6875C10.3977 29.6875 12.5 31.7898 12.5 34.375C12.5 36.9602 10.3977 39.0625 7.8125 39.0625ZM13.7023 36.4461C13.9312 35.7969 14.0625 35.1016 14.0625 34.375C14.0625 32.4586 13.1938 30.743 11.832 29.5961L14.0789 26.1258L20.8531 37.525C20.2828 38.0328 19.8055 38.6406 19.4516 39.3242L13.7023 36.4461ZM25 14.0625C26.4422 14.0625 27.7672 13.5672 28.8266 12.7438L37.257 21.1742C36.7516 21.8242 36.3734 22.575 36.1555 23.3922L31.2477 22.7172C31.2469 22.6969 31.25 22.6766 31.25 22.6562C31.25 19.2102 28.4461 16.4062 25 16.4062C22.8375 16.4062 20.9281 17.5109 19.8062 19.1852L18.8742 18.7195L22.2945 13.4375C23.1141 13.8336 24.0297 14.0625 25 14.0625ZM25.7812 35.9914V28.8516C28.3203 28.5328 30.3859 26.6875 31.0328 24.2641L35.9406 24.9391C35.9406 24.9594 35.9375 24.9797 35.9375 25C35.9375 26.4922 36.4641 27.8617 37.3398 28.9375L29.1367 37.5148C28.2172 36.7 27.0602 36.1523 25.7812 35.9914ZM25 17.9688C27.5852 17.9688 29.6875 20.0711 29.6875 22.6562C29.6875 25.2414 27.5852 27.3438 25 27.3438C22.4148 27.3438 20.3125 25.2414 20.3125 22.6562C20.3125 20.0711 22.4148 17.9688 25 17.9688ZM19.1102 20.5852C18.8813 21.2344 18.75 21.9297 18.75 22.6562C18.75 25.8375 21.1406 28.4656 24.2188 28.8523V35.9922C23.4781 36.0852 22.7789 36.307 22.1422 36.6359L15.0266 24.6617L18.0195 20.0398L19.1102 20.5852ZM25 46.875C22.4148 46.875 20.3125 44.7727 20.3125 42.1875C20.3125 39.6023 22.4148 37.5 25 37.5C27.5852 37.5 29.6875 39.6023 29.6875 42.1875C29.6875 44.7727 27.5852 46.875 25 46.875ZM42.1875 20.3125C44.7727 20.3125 46.875 22.4148 46.875 25C46.875 27.5852 44.7727 29.6875 42.1875 29.6875C39.6023 29.6875 37.5 27.5852 37.5 25C37.5 22.4148 39.6023 20.3125 42.1875 20.3125ZM25 3.125C27.5852 3.125 29.6875 5.22734 29.6875 7.8125C29.6875 10.3977 27.5852 12.5 25 12.5C22.4148 12.5 20.3125 10.3977 20.3125 7.8125C20.3125 5.22734 22.4148 3.125 25 3.125ZM19.4438 10.6617C19.8258 11.4031 20.3484 12.0586 20.9805 12.5914L17.468 18.0164L13.7023 16.1336C13.9312 15.4844 14.0625 14.7891 14.0625 14.0625C14.0625 13.5875 14.0047 13.1258 13.9031 12.6805L19.4438 10.6617ZM3.125 14.0625C3.125 11.4773 5.22734 9.375 7.8125 9.375C10.3977 9.375 12.5 11.4773 12.5 14.0625C12.5 16.6477 10.3977 18.75 7.8125 18.75C5.22734 18.75 3.125 16.6477 3.125 14.0625ZM11.6523 18.9836C12.1758 18.5742 12.6352 18.0867 13.0063 17.5336L16.6133 19.3367L14.1359 23.1625L11.6523 18.9836Z" fill="#2290F5" className='md:group-hover:fill-secondary transition-all duration-500'/>
</svg>


                </div>
                <div className='justify-center ml-[26px]'>
                  <h3  className='w-[258px] font-secondary font-bold text-[22px] text-white md:text-titleColor group-hover:text-white transition-all duration-500 leading[34px] mt-[26px]'>Plan Product Roadmap</h3>
                  <p className='w-[258px] font-primary text-white md:text-paraColor group-hover:text-white transition-all duration-500 font-regular text-[16px] leading-[26px] mt-[8px] mb-[26px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                  <h6 className='flex w-[258px] items-center font-primary text-white md:text-secondary group-hover:text-white transition-all duration-500 font-medium text-[16px] leading-[26px] mb-[26px]'>Read More <span className='ml-[4px]'><FaLongArrowAltRight /></span> </h6>
                </div>
              </div>
            </div>
            </div>
            <div className='mt-[30px] md:mt-[80px] flex justify-center'>
              <button className=' bg-white border py-[20px] px-12 font-priamry font-medium text-lg rounded-[6px] text-secondary mt-10'>View More</button>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default OurServices
