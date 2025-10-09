const controller = require('../controller/review.controller')
const router = require("express").Router()

module.exports = (app) => {
    router.post(`/:id/review`, controller.addReview);

    router.get(`/:bookid/review`, controller.getAllReviews);

    router.put('/:bookid/review/:reviewId',controller.editReviewById);

    router.delete('/:id/review/:reviewId',controller.deleteReviewById);

    app.use('/api/book',router);

}