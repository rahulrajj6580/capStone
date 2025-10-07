const { body } = require('express-validator');

// const regexPolicy = (password) => {
//     const num = /\d/;
//     const specailChar = /[!@#$%^&*]/;
//     const upperCase = /[A-Z]/;
//     const lowerCase = /[a-z]/;

//     if (!num.test(password)) {
//         throw new Error("password missing number");
//     }
//     if (!specailChar.test(password)) {
//         throw new Error("password missing special characters");
//     }
//     if (!upperCase.test(password)) {
//         throw new Error("password missing uppercase");
//     }
//     if (!lowerCase.test(password)) {
//         throw new Error("password missing lowercase");
//     }
//     return true;
// }

const passwordPolicy = (password) => {
    const num = /\d/;
    const specailChar = /[!@#$%^&*]/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    console.log(password,"rahulllllllll")
    if (!num.test(password)) {
        throw new Error("password missing number");
    }
    if (!specailChar.test(password)) {
        throw new Error("password missing special characters");
    }
    if (!upperCase.test(password)) {
        throw new Error("password missing uppercase");
    }
    if (!lowerCase.test(password)) {
        throw new Error("password missing lowercase");
    }
    return true;
}

exports.password = [body('password').notEmpty().withMessage('Password is empty')
    .isLength({ min: 8}).withMessage('Password must contain atleast 8 characters')
    .isLength({ max: 20}).withMessage('Password must be less than 20 characters')
    .custom(passwordPolicy)]
