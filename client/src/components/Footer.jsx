import React from "react";
import "../assets/App.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer>
        <div className="footer-content">
          <nav>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/create">Create-Review</a>
              </li>
              <li>
                <a href="/all/review">Book-Reviews </a>
              </li>
            </ul>
          </nav>
          <p>&copy; {year} all the rights are reserved by book review.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
