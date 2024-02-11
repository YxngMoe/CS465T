const express = require('express');
const router = express.Router();

// Assuming you have a trip.js controller
const tripController = require('../controllers/trips');

// API route to get a list of all trips
router
    .route('/trips')
    .get(tripController.tripsList);

// API route to find and return a single trip by trip code
router
    .route('/trips/:tripCode')
    .get(tripController.tripsFindByCode);

module.exports = router;
