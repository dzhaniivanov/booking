const Hotel = require('../models/Hotel');


function create(data) {
    let hotel = new Hotel(data);
    return hotel.save();
};

async function getAll() {
    let hotels = await Hotel.find({}).lean();

    return hotels;
}

function getOne(id) {
    return Hotel.findById(id).lean();

}

module.exports = {
    create,
    getAll,
    getOne
}