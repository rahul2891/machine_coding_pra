import React from 'react'
import OffersCaraousel from './caraousel/OfferCaraousel'
import test from '../assets/test.png'

const Team = () => {
  return (
   <div style={{margin:"200px 200px", flexGrow: 1,
   position: 'relative'}}>
     <OffersCaraousel
      swipeable={true}
      showDots={true}
      slideTimer={3000}
    >
      <img src={test} alt="Slide 1" />
      <img src={test} alt="Slide 2" />
      <img src={test} alt="Slide 3" />
    </OffersCaraousel>
   </div>
  )
}

export default Team

