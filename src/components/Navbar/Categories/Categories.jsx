import React, { useEffect, useState } from 'react'
import './Categories.scss'
import API from '../../../API/API';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


function Categories() {

  const [category, setCategory] = useState([])
  const [move, setMove] = useState(0)

  const getData = async () =>{
    try{
      const category = await API.category();
      setCategory(category.data)

    }catch(err){
      console.error(err);
      return;
    }
  }

  useEffect(() =>{
    getData()
  },[])


  return (
    <ul className='info__list'>
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={7} spaceBetween={10} className="mySwiper">
        {category.map((item) =>{
          return (
            <SwiperSlide key={item.id} className='category-items'>{item.name_ru}</SwiperSlide>
          )
        })}
      </Swiper>
  </ul>
  )
}

export default Categories