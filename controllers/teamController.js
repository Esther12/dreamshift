const mongoose = require("mongoose");
const Team = require("../models/team");

const teamController = {};

teamController.addTeam = function(req, res) {
  Team.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
};
//this is delete function 
teamController.findById = function(req, res) {
  Team.remove(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
};

teamController.displayTeam = function(req,res){
  Team.find(req.query)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
};

//this is find by teamId
teamController.removeTeam = function(req, res) {
  Team.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
};

module.exports = teamController;
