const controller = require('../controller/user.controller')
const paths = `/api/user`
const validateReqBody = require("../utils/reqBody.validations")
const {name,phone,address,email,age} = require("../utils/user.validations")


module.exports = (app) => {
    app.post(`${paths}`,validateReqBody([name,phone,address,email,age]), controller.addUser);

    app.get(`${paths}`, controller.getAllUsers);

    app.get(`${paths}/:id`, controller.getUserById)
}