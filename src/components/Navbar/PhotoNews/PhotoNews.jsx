import React from 'react'
import './PhotoNews.scss'
import photoNews1 from '../../../assets/images/photo-news-1.png'
import photoNews2 from '../../../assets/images/photo-news-2.png'
import photoNews3 from '../../../assets/images/photo-news-3.png'


function PhotoNews() {
  return (
    <div className='photo-news'>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h4>Foto-yangiliklar</h4>
        <button className='news-cards__btn m-0'>Bo‘limga o‘tish</button>
      </div>

      <ul className='photo-news__list photos'>
        <li>
          <img src={photoNews2} alt="photo-news-2"/>
          <p>Samsung Galaxy F22 launched in India: Price, features, other details</p>
          <span className='shadow'></span>
        </li>
        <li>
          <img src={photoNews2} alt="photo-news-2"/>
          <p>Samsung Galaxy F22 launched in India: Price, features, other details</p>
          <span className='shadow'></span>
        </li>
        <li>
          <img src={photoNews3} alt="photo-news-3"/>
          <p>Samsung Galaxy F22 launched in India: Price, features, other details</p>
          <span className='shadow'></span>
        </li>
      </ul>


    </div>
  )
}

export default PhotoNews