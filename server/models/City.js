const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  name: {
    lat: Number,
    lon: Number,
    wikipedia: String,
    city: String
  }
});

module.exports = mongoose.model('City', CitySchema);