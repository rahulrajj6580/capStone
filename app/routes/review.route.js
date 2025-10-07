const controller = require('../controller/review.controller')
const router = require("express").Router()

module.exports = (app) => {
    router.post(`/:id/review`, controller.addReview);

    router.get(`/:id/review`, controller.getAllReviews);

    router.put(``,controller.editReviewById); //pending

    router.delete('',controller.deleteReviewById); //pending

    app.use('/api/book',router);

}