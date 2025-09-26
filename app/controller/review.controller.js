const db = require("../models");
const reviews = db.review

exports.addReview = async (request,response) => {
    try{
        const reqBookId = request.query.id
        const newReview = new review({
            bookId : reqBookId,
            rating : request.body.rating,
            comment: request.body.comment
        });
        const data = await reviews.save(newReview)
        return response.status(200).send(data)
    }catch(err){
        response.status(500).send({error : "Error adding review"})
    }
}

