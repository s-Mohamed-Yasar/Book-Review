import BookReview from "../db/bookReview.schema.js";

const getReviews = async (req, res) => {
  try {
    const allReviews = await BookReview.find();
    res.json(allReviews)
  } catch (error) {
    res.json({message: error.message})
  }
};
export default getReviews;
