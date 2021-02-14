const secret=require('../services/authService');
const jwt=require('jsonwebtoken');
module.exports = function () {
    return (req, res, next) => {
        let token=req.cookies['USER_SESSION'];
        if(token){
            jwt.verify(token,'sss',function (err,decoded){
                if(err) console.log(err);
                console.log(decoded);
        });
    }
        next();
    };
}