const axios = require("axios");

const MiniMail = require("../models/miniMailModel");

module.exports = {
  createMiniMail: async function(req, res) {
    const newMiniMail = await new MiniMail(req.body);
    try {
      const miniMail = await newMiniMail.save();
      res.redirect("/v1/create");
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },
  getAllMiniMail: async function(req, res) {
    try {
      const miniMails = await MiniMail.find();
      res.status(200).json(miniMails);
    } catch (error) {
      res.status(404).json({message: error.message});
    }
  },
  getMiniMail: async function(req, res) {
    try {
      const miniMail = await MiniMail.findById(req.params.id);
      res.status(200).json(miniMail);
    } catch (error) {
      res.status(404).json({message: error.MiniMail});
    }
  },
  updateMiniMail: async function(req, res) {
    const idCheck = await MiniMail.findById(req.params.id);
    if(!idCheck) {
      return res.status(404).json("Mail ID not Found");
    }
    try {
      const updatedMiniMail = await MiniMail.updateOne({_id: req.params.id}, {$set: req.body});
      res.status(200).json(updatedMiniMail);
    } catch (error) {
      res.status(500).json({message: error.MiniMail});
    }
  },
  deleteMiniMail: async function(req, res) {
    const idCheck = await MiniMail.findById(req.params.id);
    if(!idCheck) {
      return res.status(404).json("Mail ID not Found");
    }
    try {
      const deletedMiniMail = await MiniMail.deleteOne({_id: req.params.id});
      res.status(200).json(deletedMiniMail);
    } catch (error) {
      res.status(500).json({message: error.MiniMail});
    }
  },
  home: async function(req, res) {
    res.render("home");
  },
  createYourMiniMail: async function(req, res) {
    res.render("createMiniMail", {layout: "./layouts/createMiniMailLayout"})
  },
  allMiniMail: async function(req, res) {
    try {
      await axios.get("http://localhost:3004/v1/mails")
        .then(response => res.render("showAllMiniMail", {miniMail: response.data}))
        // .then(res.render("showAllMiniMail", {miniMail: res.data}))
        // .then(console.log(res))
        .catch(error => console.log(error))
    } catch (error) {
      
    }
  }
}