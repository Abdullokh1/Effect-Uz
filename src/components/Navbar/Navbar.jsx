import React from 'react'
import Advert from './Advert/Advert'
import InfoCards from './InfoCards/InfoCards'
import './Navbar.scss'
import NewsCards from './NewsCards/NewsCards'
import PhotoNews from './PhotoNews/PhotoNews'
import VideoNews from './VideoNews/VideoNews'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Navbar() {
  const categories = ['Barchasi', 'Texnika', 'Siyosat', 'Jamiyat', 'Sport', 'Iqtisod', 'Ilm-fan', 'Turizm']
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 7,
    speed: 500,
    autoplay: true,
  }

  return (

    <section className='info'>
      <h2 className='info__title'>So’nggi Yangiliklar</h2>
      <ul className='info__list'>
        <Slider {...settings}>
          {categories.map((item, i) =>{
            return (
              <li key={i}>
                <button>{item}</button>
              </li>
            )
          })}
        </Slider>
      </ul>

      <InfoCards/>
      <Advert/>
      <NewsCards/>
      <PhotoNews/>
      <VideoNews/>
    </section>
  )
}

export default Navbar