import React, { useState } from "react";
import "./News.scss";
import pubg from "../../../assets/images/pubg.png";
import cardClock from "../../../assets/images/card-clock.svg";
import { useTranslation } from "react-i18next";
import Categories from "../Categories/Categories";


function News() {
  const newsCard = ["", "", "", ""];
  const { t } = useTranslation();

  return (
    <div className="news-wrapper">
      <h2 className="info__title news__title">{t("Новости")}</h2>
      <Categories />
      <div className="news">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <span className="news__left"></span>
          <p className="news__time m-0">22.07.2022</p>
          <span className="news__right"></span>
        </div>

        <ul className="news__list">
          {newsCard.map((_, i) => {
            return (
              <li key={i} className="d-flex align-items-center">
                <span className="news__list-time">19:30</span>
                <img
                  className="news__list-clock"
                  src={cardClock}
                  alt="card-clock"
                />
                <img className="news__list-img" src={pubg} alt="pubg" />
                <div>
                  <h4>
                    Card hover bo’lganda title color o’zgarishi va card
                    box-shadow ham o’zgarmoqda  
                  </h4>
                  <p className="m-0">#Ilm-fan</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="d-flex justify-content-center align-items-center mb-3">
          <span className="news__left"></span>
          <p className="news__time m-0">21.07.2022</p>
          <span className="news__right"></span>
        </div>

        <ul className="news__list">
          {newsCard.map((_, i) => {
            return (
              <li key={i} className="d-flex align-items-center">
                <span className="news__list-time">19:30</span>
                <img
                  className="news__list-clock"
                  src={cardClock}
                  alt="card-clock"
                />
                <img className="news__list-img" src={pubg} alt="pubg" />
                <div>
                  <h4>
                    Card hover bo’lganda title color o’zgarishi va card
                    box-shadow ham o’zgarmoqda
                  </h4>
                  <p className="m-0">#Ilm-fan</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="text-center">
          <button className="news-cards__btn px-4 py-2">
            {t("Перезагрузить")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
