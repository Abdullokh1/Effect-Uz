import "./Sidebar.scss";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import API from "../../API/API";

function Sidebar() {
  const { t } = useTranslation();

  const [category, setCategory] = useState([]);
  const [provence, setProvence] = useState([]);

  const getData = async () => {
    try {
      const category = await API.category();
      const provence = await API.provence();
      setCategory(category.data);
      setProvence(provence.data);
    } catch (err) {
      console.error(err);
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="sidebar">
      <ul className="sidebar__list">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "static-link"
          }
          to="/"
        >
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M9 22V12H15V22"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
            </svg>
            <h4>{t("Главный")}</h4>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "static-link"
          }
          to="/News"
        >
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M9 12H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M9 18H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M5 6V6.01"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M5 12V12.01"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M5 18V18.01"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
            </svg>
            <h4>{t("Новости")}</h4>
          </li>
        </NavLink>

        <li>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="svg-color"
                    />
                    <path
                      d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="svg-color"
                    />
                    <path
                      d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="svg-color"
                    />
                    <path
                      d="M14 17H20M17 14V20"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="svg-color"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t("Cтолбцы")}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="mt-3">
                    {category.map((item) => {
                      return <li key={item.id}>{item.name_oz}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "static-link"
          }
          to="qqq"
        >
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10V5Z"
                stroke="#072D4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M5 10C5 11.8565 5.7375 13.637 7.05025 14.9497C8.36301 16.2625 10.1435 17 12 17C13.8565 17 15.637 16.2625 16.9497 14.9497C18.2625 13.637 19 11.8565 19 10"
                stroke="#072D4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M8 21H16"
                stroke="#072D4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M12 17V21"
                stroke="#072D4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
            </svg>
            <h4>{t("Звуковые")}</h4>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "static-link"
          }
          to="www"
        >
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10L19.553 7.724C19.7054 7.64783 19.8748 7.61188 20.045 7.61954C20.2152 7.62721 20.3806 7.67824 20.5256 7.7678C20.6706 7.85736 20.7902 7.98247 20.8733 8.13127C20.9563 8.28006 20.9999 8.44761 21 8.618V15.382C20.9999 15.5524 20.9563 15.7199 20.8733 15.8687C20.7902 16.0175 20.6706 16.1426 20.5256 16.2322C20.3806 16.3218 20.2152 16.3728 20.045 16.3805C19.8748 16.3881 19.7054 16.3522 19.553 16.276L15 14V10Z"
                stroke="#072D4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
              <path
                d="M13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6Z"
                stroke="#072D4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-color"
              />
            </svg>
            <h4>{t("Видео сообщения")}</h4>
          </li>
        </NavLink>

        <li>
          <div className="accordion" id="accordionExample2">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne2"
                  aria-expanded="false"
                  aria-controls="collapseOne2"
                >
                  <i className="bx bx-globe"></i>
                  {t("Регионы")}
                </button>
              </h2>
              <div
                id="collapseOne2"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  <ul className="sidebar-country">
                    {provence.map((item) => {
                      return <li key={item.id}>{item.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </section>
  );
}

export default Sidebar;
