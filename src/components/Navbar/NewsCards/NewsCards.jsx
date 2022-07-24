import React from 'react'
import './NewsCards.scss'
import calendar from '../../../assets/images/calendar.svg'
import pubg from '../../../assets/images/pubg.png'
import {useTranslation} from "react-i18next";



function NewsCards() {
  const {t} = useTranslation();
  const cards = [,,,]

  return (
    <div className='news-cards'>
      <ul className='news-cards__list'>
        {cards.map((_, i) =>{
          return (
            <li key={i}>
              <p>Texnologiya</p>
              <div className='d-flex justify-content-between'>
                <div>
                  <h5>Avvalgi kun xabarlari uchun sana ham chiqib turadi.</h5>
                  <div className='news-cards__time d-flex justify-content-end pe-3'>
                    <img src={calendar} alt="calendar" />
                    <span>11:45 |</span>
                    <span className='ms-2'>13.07.2022</span>
                  </div>
                </div>
                <img src={pubg} alt="pubg" />
              </div>
            </li>
          )
        })}
      </ul>
      <div className='text-center'>
        <button className='news-cards__btn'>{t('Все новости')}</button>
      </div>
    </div>
  )
}

export default NewsCards