module.exports = (request,response,next) => {
    if(request.user && request.user.role === 'adminRole'){
        return  next();
    }
    return response.ststus(403).send({message : 'Admin access required'});
}