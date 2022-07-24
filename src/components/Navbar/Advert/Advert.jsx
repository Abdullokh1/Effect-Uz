import React from 'react'
import './Advert.scss'
import gift from '../../../assets/images/gift.svg'

function Advert() {

  return (
    <div className='advert'>
      <div className='advert__inner d-flex align-items-center'>
        <img src={gift} alt="gift"/>
        <h5>Subscribe to Premium</h5>
        <p>$8 <span>/m</span></p>
        <button>Upgrade</button>
      </div>
    </div>
  )
}

export default Advert