const MiniMail = require("../models/miniMailModel");

module.exports = {
  createMiniMail: function(req, res) {
    res.send("Create a Mail");
  },
  getAllMiniMail: function(req, res) {
    res.send("Get All Mail");
  },
  getMiniMail: function(req, res) {
    res.send("Get a Mail");
  },
  updateMiniMail: function(req, res) {
    res.send("Update a Mail");
  },
  deleteMiniMail: function(req, res) {
    res.send("Delete a Mail");
  }
}