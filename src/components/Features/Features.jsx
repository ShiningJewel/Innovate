import React from 'react'
import Container from '../Layout/Container'
import features from '../../assets/features.png'
const Features = () => {
  return (
    <div className='pt-[164px] pb-[55px]'>
      <Container>
        <div className='flex justify-between'>
          <div>
            <img src={features} alt="" />
          </div>
          <div>
            
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Features
