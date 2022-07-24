import React from 'react'
import './Faq.scss'
import file from '../../../assets/images/file.svg'
import calendar from '../../../assets/images/calendar.svg'
import {useTranslation} from "react-i18next";


function Faq() {
  const {t} = useTranslation();
  const faq = ['','','','','','']
  return (
    <div className='faq'>
      <div className='faq__title'>
        <img className='me-2' src={file} alt="file"/>
        <span>{t('Самые читаемые')}</span>
      </div>
      <ul className='faq__list'>
        {faq.map((item, i) =>{
          return (
            <li key={i}>
              <div className='faq__time'>
                <img className='me-1' src={calendar} alt="calendar" />
                <span>11:45 | </span>
                <span > 13.07.2022</span>
              </div>
              <p>The price of petrol remained unchanged on July 6 after reaching a new record high on.</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Faq