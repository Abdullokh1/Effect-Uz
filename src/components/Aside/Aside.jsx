import React, { useState } from 'react'
import './Aside.scss'
import left from '../../assets/images/left.svg'
import right from '../../assets/images/right.svg'
import weatherSun from '../../assets/images/weather-sun.svg'
import feather from '../../assets/images/feather.svg'
import gift from '../../assets/images/gift.svg'
import {useTranslation} from "react-i18next";
import Faq from './Faq/Faq'


function Aside() {
  const {t} = useTranslation();
  const [slide, setSlide] = useState(0)

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
          <button disabled={slide === 0 ? true : false}  onClick={() => setSlide(slide-1)}>
             <img style={{opacity: slide <= 0 ? '0.3' : '1'}} src={left} alt="left"/>
          </button>
          <button onClick={() => setSlide(slide+1)}>
            <img src={right} alt="right"/>
          </button>
        </div>

       <div className='aside__weather-listWrapper mt-2'>

        <ul style={{transform: `translateX(-${slide * 255}px)`}} className='aside__weather-list d-flex'>
          <li className='d-flex justify-content-between'>
            <div>
              <p>Quyoshli</p>
              <span> <span className='aside__temp'>31</span> c / <span className='aside__temp'>25</span> c</span>
            </div>
            <img src={weatherSun} alt="sun"/>
          </li>
          <li className='d-flex justify-content-between'>
            <div>
              <p>Qor</p>
              <span> <span className='aside__temp'>-22</span> c / <span className='aside__temp'>-5</span> c</span>
            </div>
            <img src={weatherSun} alt="sun"/>
          </li>
          <li className='d-flex justify-content-between'>
            <div>
              <p>Yomgir</p>
              <span> <span className='aside__temp'>-22</span> c / <span className='aside__temp'>-5</span> c</span>
            </div>
            <img src={weatherSun} alt="sun"/>
          </li>
        </ul>

       </div>
      </div>
      <div className='aside__info'>
        <img className='me-2' src={feather} alt="feather"/>
        <span>{t('Станьте мобильным репортером!')}</span>
        <div className='d-flex align-items-center mt-2'>
          <p>{t('Станьте нашим корреспондентом на расстоянии!')}</p>
          <button>{t('Подробный')}</button>
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