import express from "express";
import postReview from "../controllers/reviewPost.controller.js";
import getReviews from "../controllers/reviewGet.controller.js";
import deleteReview from "../controllers/reviewDelete.controller.js";
import editReview from "../controllers/reviewEdit.controller.js";

const router = express.Router();

router.get("/getall", getReviews);
router.post("/post", postReview);
router.patch("/editreview/:id", editReview);
router.delete("/delete/:id", deleteReview);

export default router;
