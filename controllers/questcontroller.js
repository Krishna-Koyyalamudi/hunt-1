const express = require("express");
const app = express();

const Quest = require('../models/quest');
var exports = module.exports = {};

exports.createquest = function(req, res) {
    res.render('quest/create');
}

exports.questlist = function(req, res){
    res.render('quest/index');
}