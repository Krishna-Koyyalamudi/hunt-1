const express = require("express");
const { response } = require("../app");
const app = express();

const Quest = require('../models/quest');
var exports = module.exports = {};

// Render view to add a new quest
exports.createquest = function (req, res) {
    res.render('quest/create.html');
}

// api to CREATE a new quest data
exports.addquest = function (req, res) {

}

// Render view with list of quests
exports.questlist = function (req, res) {
    res.render('quest/index');
}

// api to GET list of quets data
exports.getquest = function (req, res) {

}

// api to UPDATE quest data
exports.editquest = function (req, res) {

}

// api to DELETE a quest data
exports.removequest = function (req, res) {

}