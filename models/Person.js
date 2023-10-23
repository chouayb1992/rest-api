const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    age: {
        type: Number,
        required: true
    },
    favoriteFoods:  [String],
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Person', PersonSchema);
