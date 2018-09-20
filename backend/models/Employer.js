let
  mongoose = require('mongoose'),
  EmpoyerShema,
  Employer

EmpoyerShema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 80,
    required: true
  }
})

Employer = mongoose.model('Employer', EmpoyerShema)

module.exports = Employer
