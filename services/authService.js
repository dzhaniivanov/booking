const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = 'sss';


const register = async ({ email, username, password }) => {
    //t0d0 check if user exists

    let salt = await bcrypt.genSalt(saltRounds);
    let hash = await bcrypt.hash(password, salt);
    const user = new User({ email, username, password: hash });

    return await user.save();
}

const login = async ({ username, password }) => {
    //get user from db
    let user = await User.findOne({ username });

    if (!user) throw { message: 'user not found' };

    //compare password hash
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw { message: 'password does not match' };


    //generate token
    let token = jwt.sign({ _id: user._id }, secret);
    return token;


};

module.exports = {
    register,
    login,
    secret
}