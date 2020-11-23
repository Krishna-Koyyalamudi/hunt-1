const express = require("express");
const app = express();

const Competition = require('../models/competition');
var exports = module.exports = {};

// Render view to add a new competition
// exports.createcompetition = function (req, res) {
//     res.render('competition/create');
// }
app.post("/competition:create", (req, res, next) => {
    var errors = []
    if (!req.body.competitionname) {
      errors.push("Competititon name not specified");
    }   
    if (errors.length) {
      res.status(400).json({ "error": errors.join(",") });
      return;
    }
    res.json({
      "message": "success"
    })
});

// api to CREATE a new competition data
exports.addcompetition = function (req, res) {

}

// Render view with list of competitions
exports.competitionlist = function (req, res) {
    res.render('competition/index');
}

// api to GET list of quets data
exports.getcompetition = function (req, res) {

}

// api to UPDATE competition data
exports.editcompetition = function (req, res) {

}

// api to DELETE a competition data
exports.removecompetition = function (req, res) {

}
