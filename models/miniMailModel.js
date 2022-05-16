const mongoose = require("mongoose");

const MiniMail = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: date,
    default: Date.now
  }
})

module.exports = mongoose.model("MiniMail", MiniMail);