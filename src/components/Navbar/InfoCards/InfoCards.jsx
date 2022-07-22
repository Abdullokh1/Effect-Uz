import React from 'react'
import './InfoCards.scss'
import infoCard from '../../../assets/images/info-card.png'
import crosshair from '../../../assets/images/crosshair.svg'
import clock from '../../../assets/images/clock.svg'
import calendar from '../../../assets/images/calendar.svg'
import cardImg from '../../../assets/images/card-img.svg'



function InfoCards() {
  return (
    <div className='info-card d-flex'>
      <div className='info-card__left'>
        <img className='info-card__img mb-3' src={infoCard} alt="infocard" />
        <div className='d-flex align-items-center mb-3'>
          <img src={crosshair} alt="crosshair"/>
          <h5>Texnologiya</h5>
          <img src={clock} alt="clock"/>
          <span>Bugun . 15:45</span>
        </div>
          <h4>Samsung Galaxy F22 launched in India: Price, features, other details</h4>
          <p>Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment.</p>
      </div>

      <div className='info-card__right'>
        <ul className='info-card__list'>
          <li>
            <div>
                <img src={calendar} alt="calendar" />
                <span>11:45 |</span>
                <span>13.07.2022</span>
                <h5>Instagram working on ‘Exclusive Stories’ for subscribers</h5>
            </div>
            <img src={cardImg} alt="card-img" />
          </li>
          <li>
            <div>
                <img src={calendar} alt="calendar" />
                <span>11:45 |</span>
                <span>13.07.2022</span>
                <h5>Instagram working on ‘Exclusive Stories’ for subscribers</h5>
            </div>
            <img src={cardImg} alt="card-img" />
          </li>
          <li>
            <div>
                <img src={calendar} alt="calendar" />
                <span>11:45 |</span>
                <span>13.07.2022</span>
                <h5>Instagram working on ‘Exclusive Stories’ for subscribers</h5>
            </div>
            <img src={cardImg} alt="card-img" />
          </li>
          <li>
            <div>
                <img src={calendar} alt="calendar" />
                <span>11:45 |</span>
                <span>13.07.2022</span>
                <h5>Instagram working on ‘Exclusive Stories’ for subscribers</h5>
            </div>
            <img src={cardImg} alt="card-img" />
          </li>
        </ul>
      </div>

    </div>
  )
}

export default InfoCards