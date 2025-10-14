const controller = require("../controller/file.controller");
const router = require("express").Router();
const isAdmin = require('../auth/isAdmin');
const authenticateUser = require('../auth/authorization')

module.exports = (app) => {
    router.post('/files/:bookId', [authenticateUser, isAdmin], controller.bookFileUpload);
    router.get("/files", controller.getAllFiles);
    router.get("/files/:name", controller.downloadApi);
    router.delete("/files/:name", controller.removeFile);

    app.use('/api', router);
}