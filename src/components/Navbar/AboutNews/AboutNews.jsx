import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import API from '../../../API/API'
import './AboutNews.scss'


function AboutNews() {
  const [newsEnd, setNewsEnd] = useState([])
  let location = useLocation()
  let pathId = location.pathname.split('/').at(-1)

  const useNewsEnd = async () =>{
    try{
      const newsEnd = await API.newsEnd()
      setNewsEnd(newsEnd.data.items.slice(0,4))

    }catch(err){
      console.error(err);
      return;
    }
  }
  useEffect(() =>{
    useNewsEnd()
  },[])


  return (
    <section className='about-news'>
      <ul className='about'>
        {newsEnd.map(item =>  {
          if(item.id === +pathId){
            return (
              <li key={item.id}>
                <h4 className='about__title'>{item.title_uz}</h4>
                <img className='about__img' src={item.default_img} alt={item.title}  />
              </li>
            )
          }
        })}
      </ul>
    </section>
  )
}

export default AboutNews