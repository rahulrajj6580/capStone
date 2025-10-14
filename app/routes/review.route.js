const controller = require('../controller/review.controller')
const router = require("express").Router()
const isAdmin = require('../auth/isAdmin');
const authenticateUser = require('../auth/authorization');

module.exports = (app) => {
    router.post(`/:id/review`, controller.addReview);

    router.get(`/:bookid/review`, controller.getAllReviews);

    router.put('/:bookid/review/:reviewId',controller.editReviewById);

    router.delete('/:id/review/:reviewId',[ authenticateUser , isAdmin],controller.deleteReviewById);

    app.use('/api/book',router);

}