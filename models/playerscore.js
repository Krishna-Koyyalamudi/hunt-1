const mongoose = require("mongoose")
//const { model } = require("./user");

const PlayerscoreSchema = new mongoose.Schema({
    playerScoreid: {
        type: Number,
        unique: true,
        required: true,
    }, 
    dateTimeScored: { 

        myDate : ISODate("0001-01-01T18:59:32.521Z") 
        
    }
}); 

