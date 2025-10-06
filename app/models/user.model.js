module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        password: String,
        age: Number,
        address: String
    },
        {
            timestamps: true
        });
    const user = mongoose.model("Users", schema)
    return user;
};
