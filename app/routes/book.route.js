const controller = require("../controller/book.controller")
const paths = `/api/books`
const validateReqBody = require("../utils/reqBody.validations");
const { title, author, description, publishedDate, genre } = require("../utils/book.validations")

module.exports = (app) => {
    app.post(paths, validateReqBody([title, author, description, genre, publishedDate]), controller.addBooks);

    app.get(paths, controller.getAllBooks);

    app.get(`${paths}/:id`, controller.getBookById);

    app.put(`${paths}/:id`, controller.updateBookById);

}