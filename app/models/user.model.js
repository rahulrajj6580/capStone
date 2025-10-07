module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        password: String,
        age: Number,
        address: String,
        role : {
            type : String,
            enum : ['userRole','adminRole'],
            default : 'userRole'
        }
    });
    const user = mongoose.model("Users", schema)
    return user;
};
