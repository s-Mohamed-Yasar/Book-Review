import React, {useState, useEffect}  from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BookCard from "../components/BookCard.jsx";
import axios from "axios"
import FullBookCard from "../components/FullBookCard.jsx";

function AllReviewPage() {

  const [clickedImg, setClickedImg] = useState(false);
  const [clickedCardData, setClickedCardData] = useState([
    {
      bookId: "",
      bookImgSrc: "",
      bookTitle: "",
      author: "",
      reviewContent: "",
      reviewerName: ""
    },
  ]);
  const [albumData, setAlbumData] = useState([]);




    useEffect(() => {
      async function getData() {
        const response = await axios.get("/book/review/getall");
        
        setAlbumData(response.data);

        //return response.data
      }
      getData();
    }, [albumData]);


    function CardSelected(
      bookId,
      bookImgSrc,
      bookTitle,
      author,
      reviewContent,
      reviewerName
    ) {
      //console.log(`${imgUrl} ${imgTitle} ${imgDescription} is clicked`);
      setClickedCardData(() => {
        return {
          bookId: bookId,
          bookImgSrc: bookImgSrc,
          bookTitle: bookTitle,
          author: author,
          reviewContent: reviewContent,
          reviewerName: reviewerName,
        };
      });
      setClickedImg(true);
      console.log(clickedCardData);
    }
    function UnSelected() {
      setClickedImg(false);
    }


  return (
    <div>
      <Header />
      {clickedImg ? (
        <FullBookCard
          key={clickedCardData.bookId}
          id={clickedCardData.bookId}
          img={clickedCardData.bookImgSrc}
          bookTitle={clickedCardData.bookTitle}
          author={clickedCardData.author}
          reviewContent={clickedCardData.reviewContent}
          reviewerName={clickedCardData.reviewerName}
          cardUnselect={UnSelected}
        />
      ) : (
        <div className="album-bg">
          {albumData.map((singleCard) => {
            return (
              <BookCard
                key={singleCard._id}
                id={singleCard._id}
                img={singleCard.img}
                title={singleCard.bookTitle}
                author={singleCard.author}
                reviewContent={singleCard.reviewContent}
                reviewerName={singleCard.reviewerName}
                toClick={CardSelected}
              />
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AllReviewPage;
