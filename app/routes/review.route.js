const controller = require('../controller/review.controller') 
const paths = `api/books`

module.exports = (app)=>{
    app.post(`${paths}/:id/review`, controller.addReview)
}