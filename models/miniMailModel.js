const mongoose = require("mongoose");

var dateNow = new Date();
var date = dateNow.getDate();
var month = dateNow.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
var year = dateNow.getFullYear();
var dateStr = date + "/" + month + "/" + year;

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
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("MiniMail", MiniMail);