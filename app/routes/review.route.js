const controller = require('../controller/review.controller')
const paths = `/api/book`

module.exports = (app) => {
    app.post(`${paths}/:id/review`, controller.addReview);

    app.get(`${paths}/:id/review`, controller.getAllReviews);
}