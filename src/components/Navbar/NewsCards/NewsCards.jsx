import React, { useEffect, useState } from 'react'
import './NewsCards.scss'
import {useTranslation} from "react-i18next";
import API from '../../../API/API';
import NewsCardItems from './NewsCardsItems/NewsCardItems';



function NewsCards() {
  const [newsAll, setNewsAll] = useState([])
  const {t} = useTranslation();

  const useNewsAll = async () =>{
    try{
      const newsAll = await API.newsAll()
      setNewsAll(newsAll.data.items)

    }catch(err){
      console.error(err);
      return;
    }
  }

  useEffect(() =>{
    useNewsAll()
  },[])

  return (
    <div className='news-cards'>
      <ul className='news-cards__list'>
        {newsAll.map((item) =>{
         return <NewsCardItems key={item.id} item={item}/>
        })}
      </ul>
      <div className='text-center'>
        <button className='news-cards__btn'>{t('Все новости')}</button>
      </div>
    </div>
  )
}

export default NewsCards