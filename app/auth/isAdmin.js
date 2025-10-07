module.exports = (request,response,next) => {
    console.log(`role from payload      `,request.user.role);
    if(request.user && request.user.role === 'adminRole'){
        return  next();
    }
    return response.ststus(403).send({message : 'Admin access required'});
}