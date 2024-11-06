import React, { useState }from 'react'
import axios from "axios";
import FormInput from "../components/FormInput.jsx";
import TextAreaInput from './TextAreaInput.jsx';


function FullForm() {

  const [ popUp, setPopUp ] = useState(null)
    const [formData, setFormData] = useState({
      bookTitle: "",
      img: "",
      author: "",
      reviewContent: "",
      reviewerName: "",
    });
    console.log(formData)
    function changing(event){
      const {name, value} = event.target
      //console.log(value);
      

      setFormData((preValue)=>{
      return {...preValue,
        [name]:value
       }

      })
    }
    async function submit(event) {
      event.preventDefault();
      try {
        //console.log(formData);

        const response = await axios.post(
          "/book/review/post",
          formData
        );
        console.log(response.data);
        const feedBack = await response.data;
        setPopUp(feedBack.message);
        setTimeout(() => {
          setPopUp(null);
          setFormData({
            bookTitle: "",
            img: "",
            author: "",
            reviewContent: "",
            reviewerName: "",
          });
        }, 2000);
      } catch (error) {
        console.log(`This is the  ----------------${error}`);
      }
    }
    
    function popupTab(){
    return (
      <div className="pop">
        <h6>{popUp}</h6>
      </div>
    )
    }

  return (
    <div className="form-top">
      {popUp ? popupTab() : null}
      <div>
        <h3>Here you can create book review</h3>
      </div>
      <div className="form-inputs">
        <form onSubmit={submit}>
          <FormInput
            changing={changing}
            value={formData.bookTitle}
            name="bookTitle"
            required={true}
            placeholder="Book title"
          />
          <FormInput
            changing={changing}
            value={formData.img}
            name="img"
            required={false}
            placeholder="Book image url (optional)"
          />
          <FormInput
            name="author"
            required={true}
            placeholder="Name of author"
            changing={changing}
            value={formData.author}
          />
          <TextAreaInput
            name="reviewContent"
            required={true}
            placeholder="Enter you review"
            changing={changing}
            value={formData.reviewContent}
          />
          <FormInput
            name="reviewerName"
            required={true}
            placeholder="Enter your name"
            changing={changing}
            value={formData.reviewerName}
          />
          <button className="form-button" type="submit">
            Create Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default FullForm