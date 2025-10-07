const jwt = require('jsonwebtoken');

module.exports = (request, response, next) =>{
    const token = request.headers['x-access-token'];
    if(!token){
        return response.status(401).send({message: "access token missing"})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
        if(err){
            return response.status(403).send({message: "forbidden"});
        }
        request.user = user;
        next();
    })
}