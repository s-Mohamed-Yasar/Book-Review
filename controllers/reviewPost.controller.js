import BookReview from "../db/bookReview.schema.js"

const postReview = async(req, res)=>{
    const { bookTitle, img, author, reviewContent, reviewerName } = req.body;
    try {
        if (!bookTitle.trim() || !author.trim() || !reviewContent.trim() || !reviewerName.trim()) return res.json({message: "kindly fill all the fields"})
        const new_review = await new BookReview({
            bookTitle,
            author,
            reviewContent,
            reviewerName,
        })
        if(img.trim()) new_review.img.push(img)
        new_review.save()
        res.json({message: "new book review have been created"})
    } catch (error) {
        res.json({message: error.message})
    }
}
export default postReview;