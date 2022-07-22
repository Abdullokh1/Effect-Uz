import React from 'react'
import './VideoNews.scss'
import videoNews from '../../../assets/images/video-news.png'
import play from '../../../assets/images/play.svg'
import video1 from '../../../assets/images/video-1.png'
import clock from '../../../assets/images/clock.svg'




function VideoNews() {
  const videos = ['','','','','']
  return (
    <div className='video-news'>
      <h5 className='video-news__title'>Video-yangiliklar</h5>
      <div className='video-news__inner d-flex'>
        <div className='video-news__imgWrap'>
          <img className='video-news__main-img' src={videoNews} alt="video-news"/>
          <button className='video-news__btn'>
            <img src={play} alt="play" width='20' height='20' />
          </button>
          <div className='video-news__content text-center'>
            O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi
          </div>
        </div>
        <div className='w-50'>
          <ul className='video-news__list videos'>
            {videos.map((_, i) =>{
              return (
                <li key={i}>
                  <div className='videos__img-wrapper'>
                    <img src={video1} alt="video1" />
                    <button className='videos__btn'>
                      <img src={play} alt="play" width='10' height='10' />
                    </button>
                  </div>
                  <div>
                    <div className='videos__date-wrapper'>
                      <img src={clock} alt="clock" width='13' height='13'/>
                      <span className='videos__date'>05.11.2021</span>
                    </div>
                    <p className='videos__text'>Kaan Terzio‘g‘lu: “O‘zbekiston kelajagi – raqamli iqtisodiyot...</p>
                  </div>
                </li>
              )
            })}
          </ul>
          <button className='video-news__nextBtn'>
            Bo‘limga o‘tish 
          </button>
        </div>

      </div>
    </div>
  )
}

export default VideoNews