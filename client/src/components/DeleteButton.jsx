import React from "react";
import deleteIcon from "../assets/deleteIcon.svg";
import axios from "axios";

function DeleteButton(props) {
  async function Delete() {
    try {
      const res = await axios.delete(`/book/review/delete/${props.id}`);
      
      props.clicked();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div onClick={Delete}>
      <img src={deleteIcon} />
    </div>
  );
}

export default DeleteButton;
