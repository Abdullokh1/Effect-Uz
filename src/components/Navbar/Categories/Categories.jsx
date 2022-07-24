import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Categories() {
  const categories = ['Barchasi', 'Texnika', 'Siyosat', 'Jamiyat', 'Sport', 'Iqtisod', 'Ilm-fan', 'Turizm']
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 7,
    speed: 500,
    autoplay: true,
  }

  return (
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
  )
}

export default Categories