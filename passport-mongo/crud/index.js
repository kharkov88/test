var mongoose = require('mongoose')
var Employer = require('../models/Employer')
var credentials = require('../credentials')
var readAll, createItem, destroyItem, updateItem

readAll = function (callback) {
  Employer.find()
    .then(obj_map => callback(obj_map))
}

createItem = function (obj_map, callback) {
  let employer = new Employer(obj_map)
  employer.save()
    .then(result => callback(result))
    .catch(err => callback({ message: err.message }))
}

destroyItem = function (id, callback) {
  Employer.findByIdAndDelete(id)
    .then(result => callback(result))
}

updateItem = function (id, obj_map, callback) {
  let options = {
    new: true,
    runValidators: true
  }
  Employer.findOneAndUpdate({_id: id}, obj_map, options)
    .then(result => callback(result))
    .catch(err => callback({ message: err.message }))
}

module.exports = {
  read: readAll,
  create: createItem,
  destroy: destroyItem,
  update: updateItem
}

mongoose.set('debug', true)
mongoose.connect(
  credentials.mongo.development.connection,
  { useNewUrlParser: true },
  function (err) {
    if (err) {
      console.log(err)
      return
      }
    console.log('connected to db')
  })
