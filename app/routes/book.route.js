const controller = require("../controller/book.controller")
const paths = `/api/books`

module.exports = (app) =>{
    app.post(paths,controller.addBooks);

    app.get(paths,controller.getAllBooks);

    app.get(`${paths}/:id`,controller.getBookById);

    app.put(`${paths}/:id`,controller.updateBookById);

}