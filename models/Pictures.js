var mongoose = require('mongoose');

var pictureSchema = new mongoose.Schema({
    url: String,
    caption: String
});

mongoose.model('Picture', pictureSchema);
