import React from 'react'
import {Card} from "react-bootstrap";

function AppIntro() {
  return (
    <div className="bg-div">
      <div>
        <div>
          <div className="intro">
            <h2>
              This app is a digital platform that allows users to
              discover, read, and share their opinions on books.
            </h2>
          </div>
        </div>
      </div>
      <Card className="main-page-div">
        <Card.Img
          className="main-page-pic"
          variant="top"
          src="https://t4.ftcdn.net/jpg/06/41/42/69/360_F_641426931_sJkCqdIkiI5GPtbBQ92S7xIJk9akRo33.jpg"
        />
        <Card.Body>
          <h6 className="img-intro">
            This app is an intuitive and user-friendly platform
            designed for book lovers to share their reading experience personalized book recommendations.
          </h6>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AppIntro