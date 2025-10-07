const { body } = require('express-validator')
const db = require("../models")
const user = db.user

const checkDuplicateUser = async (email) => {
    const existingUser = await user.findOne({ email: email });
    // console.log(existingUser, "userrrrrr in dbbbbbb");
    if (existingUser) {
        throw new Error("Email id already exists");
    }
    return true;
}

exports.userValidation = [
    body('name').notEmpty().withMessage(`Name can't be empty`)
        .isLength({ max: 50 }).withMessage('exceeding title characters'),
    body('email').notEmpty().withMessage(`Email can't be empty`)
        .isEmail().withMessage("Enter a valid email-Id"),
        // .custom(checkDuplicateUser),
    body('phone').notEmpty().withMessage(`phone can't be empty`)
        .isMobilePhone("en-IN").withMessage(`Enter a valid phone number`),
    body('address').notEmpty().withMessage(`Address can't be empty`),
    body('age').notEmpty().withMessage(`Age can't be empty`)
        .isNumeric().withMessage(`Age must be a number`)
        .isInt({ min: 10, max: 90 }).withMessage('Age must be between 10 and 99')
]