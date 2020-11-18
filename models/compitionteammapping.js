const mongoose = require("mongoose")
const competitionteammappingSchema = new mongoose.Schema({
    competitionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique:true,
    },
    teamId: {
        type: DataTypes.INTEGER,
        references: {
         Model: "team",
         primaryKey: "teamID"},
        primaryKey: true,
        unique:true,
    },
    datetimeInvited: {
         type: DataTypes.INTEGER,
         allowNull: false,         
      }, 
    datetimeAccepted: {
         type: DataTypes.INTEGER,
         allowNull: false,         
      }, 
    datetimeRejected: {
         type: DataTypes.INTEGER,
         allowNull: false,         
      }, 
    datetimeDeleted: {
         type: DataTypes.INTEGER,
         allowNull: false,         
      }, 
    });
module.exports = mongoose.model('Competitionteammapping', competitionteammappingschema);
    
    
