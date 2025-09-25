const controller = require("../controller/book.controller")

module.exports = (app) =>{
    app.post("/api/books",controller.add);
}