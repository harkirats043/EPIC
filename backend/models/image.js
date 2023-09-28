const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  caption: String,
  image: String,
  version: String,
  centroid_coordinates: {
    lat: Number,
    lon: Number
  },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
