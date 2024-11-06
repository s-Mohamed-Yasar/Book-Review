import React from "react";
import "../assets/App.css";

function BookCard(props) {
  return (
    <div
      onClick={(event) => {
        props.toClick(props.id, props.img, props.title, props.author, props.reviewContent, props.reviewerName);
      }}
      className="album-card"
    >
      <div className="card-img ">
        <img src={props.img}></img>
      </div>
      <div className="card-img-title">
        <div id="al-ti">
          <h6>{props.title}</h6>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
