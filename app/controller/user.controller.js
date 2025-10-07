const bcrypt = require('bcrypt');
// const {checkDuplicateUser} = require("../utils/user.validations")
const { validationResult } = require("express-validator");
const db = require("../models");
const user = db.user

exports.addUser = async (request, response) => {
    try {
        // const isUniqueUser = await checkDuplicateUser(request.body.email);
        // if(!isUniqueUser){
        //     return response.status(409).send({ message: "User already exists" })
        // }
        const errors = validationResult(request);
        console.log(errors, "errrrrrorrrrrrr");
        if (!errors.isEmpty()) {
            return response.status(403).send({ message: errors.errors[0].msg })
        }
        const hashedPassword = bcrypt.hashSync(request.body.password, 10);
        const newUser = new user({
            name: request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            password: hashedPassword,
            age: request.body.age,
            address: request.body.address
        });
        const data = await newUser.save(newUser);
        return response.status(200).send(data);
    } catch (err) {
        console.log(err,"catch block errorrrrrr");
        return response.status(500).send({ message: 'Error adding a new user' });
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


