const express = require("express");
const app = express();

const Team = require('../models/team');
var exports = module.exports = {};

exports.teamlist = function(req, res) {
    res.render('team/index');
}

exports.createteam = function(req, res) {
    res.render('team/create');
}

exports.tinvite = function(req, res) {
    res.render('team/teamInvite');
}

exports.pinvite = function(req, res) {
    res.render('team/invitePlayers');
}

exports.addTeam = function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var teamId = req.body.teamid;
    var teamName = req.body.teamname;

    // Submit to the DB
    const teamdata = {
        teamid: teamId,
        teamname: teamName
    };

    const newTeam = new Team(teamdata);

    newTeam.save(function(err) {
        if (err) {
            console.log(err)
                // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        } else {
            // And forward to success page
            console.log("Data Saved");
            res.redirect("/team/index");
        }
    });
};

exports.deleteteam = function(req, res) {
    res.render('team/delete');
}

exports.removeTeam = function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var teamId = req.body.teamid;
    var teamName = req.body.teamname;

    // Submit to the DB
    const teamdata = {
        teamid: teamId,
        teamname: teamName
    };

    const newTeam = new Team(teamdata);

    newTeam.remove(function(err) {
        if (err) {
            console.log(err)
                // If it failed, return error
            res.send("There was a problem deleting the information from the database.");
        } else {
            // And forward to success page
            console.log("Data Deleted");
            res.redirect("/team/index");
        }
    });
};

/* GET Teamlist page. */
exports.teamlist = async function(req, res) {
    try {
        const teams = await Team.find()
        console.log(teams)
        res.render('team/index', { teams })
    } catch (err) {
        console.log(err)
        res.status(500).send('failure')
    }
};