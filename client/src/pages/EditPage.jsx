import React, { useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../components/Header"
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";
import TextAreaInput from "../components/TextAreaInput";


function EditPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const edit_card_id = location.state.id;
    //history.pushState(null, null, location.pathname);

    const [popUp, setPopUp] = useState(null);
    const [formEditData, setFormEditData] = useState(
      {
        img: "",
        author: "",
        reviewContent: "",
        reviewerName: ""
      },
    );
    console.log(formEditData)
    function changing(event) {
      const { name, value } = event.target;
      //console.log(value);

      setFormEditData((preValue) => {
        return { ...preValue, [name]: value };
      });
    }
    async function submit(event) {
      event.preventDefault();
      try {
        const res = await axios.patch(
          `/book/review/editreview/${edit_card_id}`,
          formEditData
        );
        console.log(res.data.message);

        setPopUp(res.data.message);

        setTimeout(() => {
          setPopUp(null);
          navigate("/all/review");
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
    function popupTab() {
      return (
        <div className="pop">
          <h6>{popUp}</h6>
        </div>
      );
    }
    


  return (
    <div>
      <Header />
      <div className="form-top">
        {popUp ? popupTab() : null}
        <div>
          <h3>anyone of the field should be filled</h3>
        </div>

        <div className="form-inputs edit-form">
          <form onSubmit={submit}>
            <FormInput
              changing={changing}
              value={formEditData.img}
              name="img"
              required={false}
              placeholder="Url of book image"
            />
            <FormInput
              changing={changing}
              name="author"
              placeholder="Name of author"
              value={formEditData.author}
              required={false}
            />
            <TextAreaInput
              changing={changing}
              name="reviewContent"
              placeholder="Book review"
              value={formEditData.reviewContent}
              required={false}
            />
            <FormInput
              changing={changing}
              value={formEditData.reviewerName}
              name="reviewerName"
              required={false}
              placeholder="your name"
            />

            <button className="form-button" type="submit">
              Update Review
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EditPage