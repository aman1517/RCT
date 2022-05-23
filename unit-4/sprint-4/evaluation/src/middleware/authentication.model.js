


const jwt = require("jsonwebtoken")


const varify = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'shhhhh', function(err, decoded) {
           if(err){
               reject(err)
           }

           resolve(decoded)
          });

         
    })
}


module.exports = async(req,res,next) => {

    if(! req.headers.authorization) return res.send({message: 'header is missing'});

    if(! req.headers.authorization.startsWith('Bearer ')) return res.send({message: 'Bearer is missing'});

    const token = req.headers.authorization.split(" ")[1]

    let user;
    
    try{

        user = await varify(token)
        req.user = user.user
    }




    
    catch(err){
        return res.send({message: err.message})
    }




    return next()
}