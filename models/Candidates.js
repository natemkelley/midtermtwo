var mongoose = require('mongoose');

var candidateSchema = new mongoose.Schema({
    name: String
});

mongoose.model('Candidates', candidateSchema);
