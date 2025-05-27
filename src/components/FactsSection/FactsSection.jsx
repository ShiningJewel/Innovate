import React from 'react'
import Container from '../Layout/Container'
import factsection from '../../assets/factsection.png'
const FactsSection = () => {
  return (
    <section className='pt-[140px] pb-[140px]'>
      <Container>
        <div
          className="relative bg-cover bg-center h-[468px] flex items-start justify-center text-white"
          style={{ backgroundImage: `url(${factsection})` }}
        >
          <div className='mt-[84px] ml-[732px] text-white'>
            <h3 className='w-[554px] font-secondary font-bold text-[44px]'>
              Trusted by 35,000+ happy customers.
            </h3>
            <div className='mt-[64px] flex justify-between'>
              <div>
                <h4 className='w-[115px] font-secondary font-black text-[44px]'>720+</h4>
                <p className='w-[176px] font-primary font-medium text-lg leading-[32px]'>Over 500 business powered with us</p>
              </div>
              <div>
                <h4 className='w-[71px] font-secondary font-black text-[44px]'>4.9</h4>
                <p className='w-[176px] font-primary font-medium text-lg leading-[32px]'>Rating on google play and app store</p>
              </div>
              <div>
                <h4 className='w-[109px] font-secondary font-black text-[44px]'>200+</h4>
                <p className='w-[176px] font-primary font-medium text-lg leading-[32px]'>Easily integrate with your favorite apps</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default FactsSection
