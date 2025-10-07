const controller = require('../controller/user.controller')
// const validateReqBody = require("../utils/reqBody.validations")
const {userValidation} = require("../utils/user.validations")
const {password} = require('../utils/password.validations');
const router = require("express").Router();
// const paths = `/api/user`;

module.exports = app => {
    router.post("",[userValidation,password], controller.addUser);

    router.get("", controller.getAllUsers);

    router.get("/:id", controller.getUserById)

    app.use('/api/user',router);
}

