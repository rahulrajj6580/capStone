const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { validationResult } = require("express-validator");
const db = require("../models");
const user = db.user

exports.addUser = async (request, response) => {
    try {
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
            address: request.body.address,
            role: request.body.role
        });
        const data = await newUser.save(newUser);
        return response.status(200).send(data);
    } catch (err) {
        console.log(err, "catch block errorrrrrr");
        return response.status(500).send({ message: 'Error adding a new user' });
    }
}

exports.getAllUsers = async (request, response) => {
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

exports.loginUser = async (request, response) => {
    try {
        const { email, password } = request.body;
        const foundUser = await user.findOne({ email: email });
        if (!foundUser) {
            return response.status(401).send({ message: "User not found" });
        }
        const checkPwd = await bcrypt.compare(password, foundUser.password)
        if (!checkPwd) {
            return response.status(401).send({ message: "Invalid credentials" });
        }

        const payload = {
            userId: foundUser._id,
            role: foundUser.role,
        }
        console.log(`payload        `, payload);
        console.log(`JWT SECRET     `, process.env.JWT_SECRET);

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            algorithm: 'HS256',
            expiresIn: '1hr',
        });

        return response.status(200).send({
            messgae: "Logged in successfulluy",
            token: token
        })
    } catch (err) {
        return response.status(200).send(err);
    }
}


