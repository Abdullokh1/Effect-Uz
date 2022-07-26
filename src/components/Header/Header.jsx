import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import down from "../../assets/images/down.svg";
import up from "../../assets/images/up.svg";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import '../../i18'
import {useTranslation} from "react-i18next";


function Header() {
  const {t, i18n} = useTranslation();
  let [isDark, setIsDark] = useState(false);

  const changeLanguage = (lang) =>{
    i18n.changeLanguage(lang)
  }

  return (
    <header className="header">
      <Helmet>
        <style>{ isDark ? "body { background-color: #222; color: #fff }" : ''}</style>
      </Helmet>
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>

        <div className="header__box d-flex">
          <div className="header__input-wrapper">
            <input
              className="header__input"
              placeholder={t('поиск по всему сайту')}
              type="text"
            />
            <i className="bx bx-search"></i>
          </div>
          <ul className="currency d-flex align-items-center">
            <li>
              Usd=10891.93
              <span>
                <img src={down} alt="down" width={10} height={10} />
              </span>
            </li>
            <li>
              Euro=12333.00
              <span>
                <img src={up} alt="up" width={10} height={10} />
              </span>
            </li>
            <li>
              Usd=10891.93
              <span>
                <img src={up} alt="up" width={10} height={10} />
              </span>
            </li>
          </ul>
        </div>

        <div className="header__settings d-flex ">
          <div className="header__settings-wrapper">
            <span
              style={{
                transform: isDark ? "translate(40px)" : "",
                borderRadius: isDark ? "0 4px 4px 0" : "",
              }}
              className="active-btn"
            ></span>
            <button onClick={() => setIsDark((isDark = false))}>
              <img src={sun} alt="sun" />
            </button>
            <button onClick={() => setIsDark((isDark = true))}>
              <img src={moon} alt="moon" />
            </button>
          </div>
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="uz">O'zbek</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
