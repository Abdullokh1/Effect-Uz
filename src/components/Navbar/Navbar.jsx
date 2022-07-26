import Advert from './Advert/Advert'
import InfoCards from './InfoCards/InfoCards'
import './Navbar.scss'
import NewsCards from './NewsCards/NewsCards'
import PhotoNews from './PhotoNews/PhotoNews'
import VideoNews from './VideoNews/VideoNews'
import {useTranslation} from "react-i18next";
import Categories from './Categories/Categories'


const  Navbar = () => {
  const {t} = useTranslation();

  return (

    <section className='info'>
      <h2 className='info__title'>{t('Последние новости')}</h2>

      
     
      <Categories/>
      <InfoCards/>
      <Advert/>
      <NewsCards/>
      <PhotoNews/>
      <VideoNews/>
    </section>
  )
}

export default Navbar