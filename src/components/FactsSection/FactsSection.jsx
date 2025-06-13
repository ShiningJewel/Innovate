import React from 'react'
import Container from '../Layout/Container'
import factsection from '../../assets/factsection.png'
const FactsSection = () => {
  return (
    <section className='pt-[140px] pb-[140px]'>
      <Container>
        <div
          className="relative bg-cover bg-center md:h-[468px] pt-[50px] pb-[100px] flex items-start justify-center text-white"
          style={{ backgroundImage: `url(${factsection})` }}
        >
          <div className='mt-[84px] ml-[20px] md:ml-[732px] text-white'>
            <h3 className='md:w-[554px] font-secondary font-bold text-[30px] md:text-[44px]'>
              Trusted by 35,000+ happy customers.
            </h3>
            <div className='mt-[64px] md:flex md:justify-between'>
              <div>
                <h4 className='w-auto md:w-[115px] font-secondary font-black text-[25px] md:text-[44px]'>720+</h4>
                <p className='w-auto md:w-[176px] font-primary font-medium text-lg md:leading-[32px]'>Over 500 business powered with us</p>
              </div>
              <div className='mt-[10px] md:mt-0'>
                <h4 className='w-auto md:w-[71px] font-secondary font-black text-[25px] md:text-[44px]'>4.9</h4>
                <p className='w-auto md:w-[176px] font-primary font-medium text-lg md:leading-[32px]'>Rating on google play and app store</p>
              </div>
              <div className='mt-[10px] md:mt-0'>
                <h4 className='w-auto md:w-[109px] font-secondary font-black text-[25px] md:text-[44px]'>200+</h4>
                <p className='w-auto md:w-[176px] font-primary font-medium text-lg md:leading-[32px]'>Easily integrate with your favorite apps</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default FactsSection
