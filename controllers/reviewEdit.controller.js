import BookReview from "../db/bookReview.schema.js";

const editReview = async (req, res) => {
  const { id } = req.params;
  const {img, author, reviewContent, reviewerName } = req.body;
  if (!img && !author.trim() && !reviewContent.trim() && !reviewerName.trim()){ return res.json({ message: "kindly fill anyone of the field " })}
    

  const updateData = {};

  if (img.trim()) updateData.img = img;
  if (author.trim()) updateData.author = author;
  if (reviewContent.trim()) updateData.reviewContent = reviewContent;
  if (reviewerName.trim()) updateData.reviewerName = reviewerName;

  try {
    const editReview = await BookReview.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.json({ message: "successfully updated" });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export default editReview;
