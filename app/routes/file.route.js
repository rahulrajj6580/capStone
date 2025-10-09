const controller = require("../controller/file.controller");
const router = require("express").Router()

module.exports = (app) => {
    router.post('/files', controller.upload);
    router.get("/files", controller.getAllFiles);
    router.get("/files/:name", controller.downloadApi);


    app.use('/api', router);
}