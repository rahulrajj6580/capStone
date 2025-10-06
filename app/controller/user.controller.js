const bcrypt = require('bcrypt');
const {checkDuplicateUser} = require("../utils/user.validations")
const db = require("../models");
const user = db.user

exports.addUser = async (request, response) => {
    try {
        const isUniqueUser = await checkDuplicateUser(request.body.email);
        if(!isUniqueUser){
            return response.status(409).send({ message: "User already exists" })
        }
        const hashedPassword = bcrypt.hashSync(request.body.password, 10);
        console.log("password", hashedPassword);
        const newUser = new user({
            name: request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            password: hashedPassword,
            age: request.body.age,
            address: request.body.address
        });
        const data = await newUser.save(newUser);
        console.log(data, "dataaaa")
        return response.status(200).send(data);
    } catch (err) {
        return response.status(500).send({ message: err.message });
    }
}

exports.getAllUsers = async (_, response) => {
    try {
        const data = await user.find();
        return response.status(200).send(data);
    } catch (err) {
        return response.status(500).send({ message: "Error getting all users" });
    }
}

exports.getUserById = async (request, response) => {
    try {
        const id = request.params.id;
        const data = await user.findById(id);
        return response.status(200).send(data);
    } catch (err) {
        return response.status(500).send({ message: "Error getting user by ID" });
    }
}


