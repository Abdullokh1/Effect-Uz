import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/images/footer-logo.svg'
import footerGoogle from '../../assets/images/footer-google.svg'
import footerApple from '../../assets/images/footer-apple.svg'


function Footer() {
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
                <h4>Foydali sahifalar</h4>
                <li><a href="#">Yangiliklar lentasi</a></li>
                <li><a href="#">Foto-yangiliklar</a></li>
                <li><a href="#">Video-yangiliklar</a></li>
                <li><a href="#">Content</a></li>
                <li><a href="#">Integrations</a></li>
              </div>
              <div>
                <h4>Ruknlar</h4>
                <li><a href="#">Siyosat</a></li>
                <li><a href="#">Texnologiya</a></li>
                <li><a href="#">Sport</a></li>
                <li><a href="#">Website Builder</a></li>
              </div>
              <div>
                <h4>Hududlar</h4>
                <li><a href="#">Toshkent</a></li>
                <li><a href="#">Samarqand</a></li>
                <li><a href="#">Qashqadaryo</a></li>
                <li><a href="#">Hosting</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Support</a></li>
              </div>
              <div>
                <h4>Biz haqimizda</h4>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Ko’p so’raladigan savollar</a></li>
                <li><a href="#">Jamoa</a></li>
                <li><a href="#">Bo’sh ish o’rni</a></li>
              </div>
            </ul>
            <p>
              «EFFECT.UZ» интернет-нашри 2019 йилнинг 1 ноябрь куни электрон ОAВ
              сифатида Ўзбекистон Республикаси Президенти Aдминстрацияси
              ҳузуридаги Aхборот ва оммавий коммуникациялар агентлигида
              рўйхатдан ўтказилган. Гувоҳнома рақами: 1323. Муассис:
              «EFFECTUZBEK» МЧЖ Сайт раҳбари: Aкмалхон Эшонхонов Электрон
              манзил: www.effect.uz@gmail.com Таҳририят манзили: 100016, Тошкент
              шаҳри, Яшнобод тумани, Маҳтумқули кўчаси 26-уй. EFFECT.UZ сайтида
              эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа
              шаклларда фойдаланиш фақат таҳририят раҳбариятининг ёзма розилиги
              билан амалга оширилади.
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