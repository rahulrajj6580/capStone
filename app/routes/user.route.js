const controller = require('../controller/user.controller')
const paths = `/api/user`

module.exports = (app) => {
    app.post(`${paths}`, controller.addUser);

    app.get(`${paths}`, controller.getAllUsers);

    app.get(`${paths}/:id`, controller.getUserById)
}