const controller = require('../controller/review.controller')
const paths = `/api/bookReview`

module.exports = (app) => {
    app.post(`${paths}/:id/review`, controller.addReview);

    app.get(`${paths}/review`, controller.getAllReviews);
}