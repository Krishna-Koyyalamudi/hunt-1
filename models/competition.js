const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
    competitionName: {
        type: DataTypes.STRING(200),
        primaryKey: true,
    },
     creatorUserId: {
         type: DataTypes.INTEGER,
       //  references: {
       //  Model: "quest",
       //  primaryKey: "locationId"}
    },

     questId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      dateCreated: {
         type: DataTypes.INTEGER,
         allowNull: false,         
      } 
      startDatetime: {
         type: DataTypes.INTEGER,
         allowNull: false,         
      } 
      endDatetime: {
         type: DataTypes.INTEGER,
         allowNull: false,         
      } 
});
module.exports = mongoose.model('Competition', competitionschema);
