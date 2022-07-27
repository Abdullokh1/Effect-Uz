import React from "react";
import calendar from "../../../../assets/images/calendar.svg";
import pubg from "../../../../assets/images/pubg.png";
import comment from "../../../../assets/images/comment.svg";

function NewsCardItems({ item }) {
  return (
    <li>
      <p className="m-0">{item.category_id}</p>
      <div className="d-flex justify-content-between">
        <div>
          <h5>{item.title_uz.substring(0, 55)}...</h5>
          <div className="news-cards__time d-flex justify-content-end pe-3">
            <img src={calendar} alt="calendar" />
            <span className="ms-2">{item.created_date}</span>
            {item.comments.length === 0 ? (
              ""
            ) : (
              <span className="ms-3 comment">
                <img src={comment} alt="comment" /> {item.comments.length} Izoh
              </span>
            )}
          </div>
        </div>
        <img src={pubg} alt="pubg" />
      </div>
    </li>
  );
}

export default NewsCardItems;
