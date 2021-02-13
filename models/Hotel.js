const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotel: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    freeRooms: {
        type: Number,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Hotel', hotelSchema);