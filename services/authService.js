const User = require('../models/User');


const register = async ({ username, password }) => {
    const user = new User({ username, password });
    return await user.save();
}

module.exports = {
    register,
}