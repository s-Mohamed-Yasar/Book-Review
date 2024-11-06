import mongoose from "mongoose";

const bookReviewSchema = new mongoose.Schema(
  {
    bookTitle: { type: String, required: true },
    img: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&s",
    },
    author: { type: String, required: true },
    reviewContent: { type: String, required: true },
    reviewerName: { type: String, required: true },
  },
  { timestamps: true }
);

const BookReview = mongoose.model("BookReview", bookReviewSchema)

export default BookReview