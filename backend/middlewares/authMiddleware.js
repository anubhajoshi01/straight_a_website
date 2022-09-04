const jwt = require('jsonwebtoken')
const user = {
    name: process.env.EMAIL,
    password: process.env.ADMIN_PSW
}

const auth = async (req, res, next) =>{
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
        try{
            // get token from header 
            token = req.headers.authorization.split(' ')[1]
            // varify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            next()
        }catch(err){
            //console.log(err)
            res.status(401)
            throw new Error('not authorized')
        }

        if(!token){
            res.status(401)
            throw new Error('no token')
        }
    }
}

module.exports = {
    auth,
}