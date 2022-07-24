import React from 'react'
import './Advertisement.scss'
import {Link} from 'react-router-dom'
import apple from '../../assets/images/apple.svg'
import google from '../../assets/images/google.svg'
import {useTranslation} from "react-i18next";



function Advertisement() {
  const {t} = useTranslation();

  return (
    <div className='advertisement'>
      <h4>{t('Будьте всегда в курсе!')}</h4>
      <p>{t('Скачайте мобильное приложение Effect.uz и все новости с вами')}</p>
      <Link to='/'>
        <img className='me-4' src={apple} alt="apple"/>
        <img src={google} alt="google"/>
      </Link>
    </div>
  )
}

export default Advertisement