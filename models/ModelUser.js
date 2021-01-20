const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  firstName: {type: String, required: true, unique: true},
  lastName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

module.exports = model('User', schema)