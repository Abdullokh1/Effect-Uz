import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import down from "../../assets/images/down.svg";
import up from "../../assets/images/up.svg";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


function Header() {
  let [isDark, setIsDark] = useState(false);

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
              placeholder="Sayt bo’ylab izlash"
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
          <select>
            <option value="uzb">O'zbek</option>
            <option value="eng">English</option>
            <option value="rus">Russian</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
