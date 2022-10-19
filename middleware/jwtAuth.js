const jwt = require('jsonwebtoken');

module.exports = (roles) => (req, res, next) => {
    try {
        const authorization = req.get("Authorization");
        if (!authorization) {
            return res.status(401).json({
                success: false,
                message: "You are not authorized",
            })
        }

        const splitToken = authorization.split(" ");
        const authToken = splitToken[1];

        if (!authToken) {
            return res.status(400).json({
                success: false,
                message: 'You are not authorized'
            })
        }

        let decode

        try {
            decode = jwt.verify(authToken, process.env.SECRET);
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'You are not authorized'
            })
        }


        const role = decode.role

        if(roles.includes(role)){
            req.user = decode;
            next();
        }else{
            return res.status(401).json({
                success:false,
                message:'you are not authorized'
            })
        }

    } catch (err) {
        return res.status(401).json({
            success: false,
            message: err.message
        });
    }
};