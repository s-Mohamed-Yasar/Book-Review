import BookReview from "../db/bookReview.schema.js";

const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteReview = await BookReview.findByIdAndDelete(id);
    
    res.json({ message: "deleted" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export default deleteReview