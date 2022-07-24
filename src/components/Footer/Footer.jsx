import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/images/footer-logo.svg'
import footerGoogle from '../../assets/images/footer-google.svg'
import footerApple from '../../assets/images/footer-apple.svg'
import {useTranslation} from "react-i18next";


function Footer() {
  const {t} = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to='/'>
          <img className='footer__logo' src={footerLogo} alt="img" />
        </Link>
        <div className="footer-inside-flex">
          <div className="left-footer">
            <ul className="left-footer-ul">
              <div>
                <h4>{t('Полезные страницы')}</h4>
                <li><a href="#">{t('Новости')}</a></li>
                <li><a href="#">{t('Фото новости')}</a></li>
                <li><a href="#">{t('Видео новости')}</a></li>
                <li><a href="#">Content</a></li>
                <li><a href="#">Integrations</a></li>
              </div>
              <div>
                <h4>{t('Cтолбцы')}</h4>
                <li><a href="#">Siyosat</a></li>
                <li><a href="#">Texnologiya</a></li>
                <li><a href="#">Sport</a></li>
                <li><a href="#">Website Builder</a></li>
              </div>
              <div>
                <h4>{t('Регионы')}</h4>
                <li><a href="#">Toshkent</a></li>
                <li><a href="#">Samarqand</a></li>
                <li><a href="#">Qashqadaryo</a></li>
                <li><a href="#">Hosting</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Support</a></li>
              </div>
              <div>
                <h4>{t('Насчет нас')}</h4>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Ko’p so’raladigan savollar</a></li>
                <li><a href="#">Jamoa</a></li>
                <li><a href="#">Bo’sh ish o’rni</a></li>
              </div>
            </ul>
            <p>
              {t('1 ноября 2019 года интернет-издание «EFFECT.UZ» зарегистрировано в качестве электронного средства массовой информации в Агентстве информации и массовых коммуникаций при Администрации Президента Республики Узбекистан. Номер сертификата: 1323. Учредитель: ООО «ЭФФЕКТУЗБЕК» Руководитель сайта: Акмалхан Эшонханов Электронный адрес: www.effect.uz@gmail.com Адрес редакции: 100016, г.Ташкент, Яшнабадский район, улица Махтумкули 26. Копирование, распространение и иные формы использования материалов, опубликованных на сайте EFFECT.UZ, осуществляются только с письменного согласия редакции.')}
            </p>
          </div>
          <div className="right-footer">
            <h3>Contact Us</h3>
            <div>
              <i className="bx bx-location-plus"></i>
              <p className='m-0'>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
            </div>
            <div>
              <i className="bx bx-message-square"></i>
              <p className='m-0'>support@figma.com</p>
            </div>
            <button className="sub">Subscribe</button>
            <h3 className="follow-header">Follow us</h3>
            <div className="links-flex">
              <i className="bx bxl-facebook" />
              <i className="bx bxl-telegram" />
              <i className="bx bxl-instagram" />
              <i className="bx bxl-figma" />
            </div>
            <div className='mt-5'>
              <Link to='/'>
                <img className='me-3' src={footerGoogle} alt="footer-google"/>
              </Link>
              <Link to='/'>
                <img src={footerApple} alt="footerApple"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer