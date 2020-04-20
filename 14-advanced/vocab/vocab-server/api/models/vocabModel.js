const mongoose = require('mongoose');

// equivalent to: const Schema = mongoose.Schema;
const { Schema } = mongoose; // destructuring

const VocabSchema = new Schema({
  english: {
    type: String,
    required: 'English word cannot be blank'
  },
  german: {
    type: String,
    required: 'German word cannot be blank'
  },
  { collection: 'vocab' }
});

module.exports = mongoose.model('Vocab', VocabSchema);
