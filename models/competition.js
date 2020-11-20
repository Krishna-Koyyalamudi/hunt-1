const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
    competitionName: {
        type: String,
        primaryKey: true,
    },
     creatorUserId: {
         type: Number,
       //  references: {
       //  Model: "quest",
       //  primaryKey: "locationId"}
    },

     questId : {
        type: Number,
        allowNull: false,
        unique: true,
      },
      dateCreated: {
         type: Number,
         allowNull: false,         
      }, 
      startDatetime: {
         type: Number,
         allowNull: false,         
      }, 
      endDatetime: {
         type: Number,
         allowNull: false,         
      }, 
});
module.exports = mongoose.model('Competition', competitionSchema);
