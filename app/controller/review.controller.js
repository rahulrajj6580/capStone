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


exports.getAllReviews = async (_, response) => {
    try {
        const data = await review.find();
        return response.status(200).send(data)

    } catch (error) {
        response.status(500).send({ message: "error in getting records" });
    }
}
