const db = require("../models");
const review = db.review

exports.addReview = async (request, response) => {
    try {
        const reqBookId = request.params.id
        const newReview = new review({
            bookId: reqBookId,
            rating: request.body.rating,
            comment: request.body.comment
        });
        const data = await newReview.save(newReview)
        return response.status(200).send(data)
    } catch (err) {
        response.status(500).send({ error: "Error adding review" })
    }
}


exports.getAllReviews = async (request, response) => {
    try {
        const { bookId } = request.params;
        const data = await review.find({ bookId: new mongoose.Types.ObjectId(bookId) });
        console.log(`reviews       `, data);
        if (!data || data.length === 0) {
            return response.status(404).send({ message: "No reviews found for this book" })
        }
        return response.status(200).send(data);
    } catch (error) {
        response.status(500).send({ message: "error in getting records" });
    }
}

exports.editReviewById = async (request, response) => {
    try {
        const id = request.params.id;
        const updateData = request.body
        const data = await review.finfByIdAndUpdate(id, updateData, { new: true })
        if (!data) {
            return response.status(404).send({ message: "Review not found" })
        }
        return response.status(200).send(data)
    } catch (err) {
        return response.status(500).send({ message: "Failed with updating review" });
    }
}

exports.deleteReviewById = async (request, response) => {
    try {
        const {reviewId} = request.params;
        const data = await review.findByIdAndDelete(reviewId);
        return response.status(200).send({ message: "Review deleted successfully" })
    } catch (err) {
        console.log(err);
        return response.status(500).send({ message: "Failed with Deleting review", error: err });
    }
}