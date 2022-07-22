import React from 'react'
import './Advertisement.scss'
import {Link} from 'react-router-dom'
import apple from '../../assets/images/apple.svg'
import google from '../../assets/images/google.svg'


function Advertisement() {
  return (
    <div className='advertisement'>
      <h4>Har doim xabardor bo’ling!</h4>
      <p><strong>Effect.uz</strong> mobil ilovasini ko’chirib oling va barcha yangiliklar siz bilan</p>
      <Link to='/'>
        <img className='me-4' src={apple} alt="apple"/>
        <img src={google} alt="google"/>
      </Link>
    </div>
  )
}

export default Advertisement