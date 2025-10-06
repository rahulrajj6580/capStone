const { body } = require('express-validator')
const db= require("../models")
const user = db.user

exports.name = body('name').notEmpty().withMessage(`Name can't be empty`).isLength({max : 50}).withMessage('exceeding title characters')

exports.email = body('email').notEmpty().withMessage(`Email can't be empty`).isEmail().withMessage("Enter a valid email-Id")

exports.phone = body('phone').notEmpty().withMessage(`phone can't be empty`).isMobilePhone("en-IN").withMessage(`Enter a valid phone number`)

exports.address = body('address').notEmpty().withMessage(`Address can't be empty`)

exports.age = body('age').notEmpty().withMessage(`Age can't be empty`).isNumeric().withMessage(`Age must be a number`).isInt({min: 10, max: 90}).withMessage('Age must be between 10 and 99');

exports.checkDuplicateUser = async (email) => {
    const existingUser = await user.findOne({email:email});
    if(existingUser){
        return false;
    }else{
        return true;
    }
}