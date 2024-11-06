import React from "react";
import BookCard from "./BookCard";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import { CloseButton } from "react-bootstrap";
import editIcon from "../assets/editIcon.svg";


function FullBookCard(props) {
    const navigate = useNavigate();
    const card_data = { id: props.id };

  return (
    <div className="album-bg ">
      <div className="full-page-card-menu">
        <div className="close-button">
          <CloseButton
            onClick={() => {
              props.cardUnselect();
            }}
          />
        </div>

        <div
          onClick={() => {
            navigate("/edit", { state: card_data });
          }}
          className="edit-button"
        >
          <img src={editIcon} />
        </div>

        <div className="delete-button">
          <DeleteButton clicked={props.cardUnselect} id={props.id} />
        </div>
      </div>
      <div className="s-card-center">
        <BookCard img={props.img} title={props.bookTitle} />
        
      </div>
      <div id="author-name">
        <h5>-{props.author} .</h5>
      </div>
      
      
      
      
      <div className="full-page-des">
        <h2>{props.reviewContent}</h2>
      </div>
      <div id="author-name">
        <h5>-{props.reviewerName} .</h5>
      </div>
    </div>
  );
}

export default FullBookCard