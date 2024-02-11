const mongoose = require('mongoose'); // Removed the erroneous comment and fixed syntax
const Model = mongoose.model('trips'); // Corrected the model creation syntax

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    try {
        const trips = await Model.find({}).exec(); // Using await with exec()
        if (!trips) {
            return res.status(404).json({ "message": "trips not found" });
        } else {
            return res.status(200).json(trips);
        }
    } catch (err) {
        return res.status(404).json(err);
    }
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Model.findOne({ 'code': req.params.tripCode }).exec();
        if (!trip) {
            return res.status(404).json({ "message": "trip not found" });
        } else {
            return res.status(200).json(trip);
        }
    } catch (err) {
        return res.status(404).json(err);
    }
};


module.exports = {
    tripsList,
    tripsFindByCode
};
