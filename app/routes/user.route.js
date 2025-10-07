const controller = require('../controller/user.controller')
const {userValidation} = require("../utils/user.validations")
const {password} = require('../utils/password.validations');
const router = require("express").Router();
const authenticateUser = require('../auth/authorization')
const isAdmin = require("../auth/isAdmin");

module.exports = app => {
    router.post("/user",[userValidation,password], controller.addUser);

    router.get("/user", authenticateUser, isAdmin , controller.getAllUsers);

    router.get("/user/:id", controller.getUserById);

    router.post("/login",controller.loginUser);

    app.use('/api',router);
}

