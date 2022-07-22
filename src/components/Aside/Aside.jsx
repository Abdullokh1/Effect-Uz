import React from 'react'
import './Aside.scss'
import left from '../../assets/images/left.svg'
import right from '../../assets/images/right.svg'
import weatherSun from '../../assets/images/weather-sun.svg'
import feather from '../../assets/images/feather.svg'
import gift from '../../assets/images/gift.svg'

import Faq from './Faq/Faq'


function Aside() {
  return (
    <aside className='aside'>
      <ul className='aside__list'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className='aside__weather'>
        <div className='aside__inner d-flex align-items-center'>
          <h5>Qashqadaryo, Qarshi</h5>
          <button>
             <img src={left} alt="left"/>
          </button>
          <button>
            <img src={right} alt="right"/>
          </button>
        </div>
        <div className='d-flex justify-content-between mt-2'>
          <div>
            <p>Quyoshli</p>
            <span> <span className='aside__temp'>31</span> c / <span className='aside__temp'>25</span> c</span>
          </div>
          <img src={weatherSun} alt="sun"/>
        </div>
      </div>
      <div className='aside__info'>
        <img className='me-2' src={feather} alt="feather"/>
        <span>Mobil muhbirga aylaning!</span>
        <div className='d-flex align-items-center mt-2'>
          <p>Masofadan bizning muhbirga aylaning !</p>
          <button>Batafsil</button>
        </div>
      </div>

      <Faq/>

      <div className='aside__advert'>
        <div className='aside__advert-inner d-flex align-items-center justify-content-end mb-2'>
          <img src={gift} alt="gift"/>
          <h5>Subscribe to Premium</h5>
        </div>
        <div className='d-flex align-items-center justify-content-end'>
          <p className='m-0'>$8 <span>/m</span></p>
          <button>Upgrade</button>
        </div>
      </div>
    </aside>
  )
}

export default Aside