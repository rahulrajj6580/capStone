const controller = require("../controller/book.controller")
const paths = `/api/books`

const { title, author, description, publishedDate, genre } = require("../utils/validations")

const validateReqBody = validations => {
    return async (request, response, next) => {
        for (const validation of validations) {
            const result = await validation.run(request);
            if (!result.isEmpty()) {
                return response.status(400).json({ errors: result.array() })
            }
        }
        next();
    }
}

module.exports = (app) => {
    app.post(paths, validateReqBody([title, author, description, genre, publishedDate]), controller.addBooks);

    app.get(paths, controller.getAllBooks);

    app.get(`${paths}/:id`, controller.getBookById);

    app.put(`${paths}/:id`, controller.updateBookById);

}