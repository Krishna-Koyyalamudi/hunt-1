const mongoose = require("mongoose")
//const { model } = require("./user");

const PlayerscoreSchema = new mongoose.Schema({
    playerScoreid: {
        type: Number,
        unique: true,
        required: true,
    }, 
    